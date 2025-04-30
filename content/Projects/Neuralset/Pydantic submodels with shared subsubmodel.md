---
createdDate: 2025-04-30
publish: true
tags: 
project: 
type:
---
# Problem
An outer Pydantic model `A` has 2 submodels `B` and `C` that should have the same subsubmodel `D`. Instantiation should be streamlined and raise errors when necessary.

# Example
```python
import typing as tp
import yaml
from pydantic import BaseModel, ValidationError, model_validator

class Dataset(BaseModel):
    name: str = "default"

class Representations(BaseModel):
    dataset: Dataset = Dataset()
    model: str = "bert-base-uncased"

class Correlations(BaseModel):
    dataset: Dataset = Dataset()
    type: str = "spearman"

class MainWrong(BaseModel):
    dataset: Dataset
    representations: Representations
    correlations: Correlations

cfg = """
dataset:
    name: "A"
representations:
    dataset:
        name: "B"
correlations:
    dataset:
        name: "C"
"""
cfg = yaml.safe_load(cfg)
print("Incorrect, it is possible to have different instance of dataset:")
MainWrong(**cfg).model_dump()
```
# (One) solution
```python
class Main(BaseModel):
    dataset: Dataset
    representations: Representations
    correlations: Correlations

    @model_validator(mode="before")
    @classmethod
    def process_and_validate_input(cls, data: tp.Any) -> tp.Any:
        if not isinstance(data, dict):
            return data

        if (
            isinstance(data.get("representations"), dict)
            and "dataset" in data["representations"]
        ):
            raise ValueError(
                "Define 'dataset' only at the top level of Main, not within 'representations'"
            )
        if (
            isinstance(data.get("correlations"), dict)
            and "dataset" in data["correlations"]
        ):
            raise ValueError(
                "Define 'dataset' only at the top level of Main, not within 'correlations'"
            )

        if "dataset" in data:
            try:
                shared_ds_instance = Dataset(**data["dataset"])
                processed_data = {
                    "dataset": shared_ds_instance,
                    "representations": {
                        **data.get("representations", {}),
                        "dataset": shared_ds_instance,
                    },
                    "correlations": {
                        **data.get("correlations", {}),
                        "dataset": shared_ds_instance,
                    },
                }
                return processed_data
            except ValidationError as e:
                raise ValueError(
                    f"Invalid top-level 'dataset' data: {e}"
                ) from e
            except TypeError as e:
                raise ValueError(
                    f"Invalid format for top-level 'dataset' data: {e}"
                ) from e
        else:
            raise ValueError(
                "Top-level 'dataset' field is required in input for Main"
            )

cfg = """
dataset:
    name: "A"
"""
cfg = yaml.safe_load(cfg)
print(
    "No longer necessary to put the parameters of dataset for representations and correlations:"
)
Main(**cfg).model_dump()

cfg = """
representations:
    dataset:
        name: "A"
"""
cfg = yaml.safe_load(cfg)
print("And not even possible to:")
try:
    Main(**cfg).model_dump()
except ValidationError as e:
    print(f"Validation error: {e}")
```