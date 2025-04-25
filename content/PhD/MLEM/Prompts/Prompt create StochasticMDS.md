---
createdDate: 2025-04-25
publish: true
tags:
  - DimensionReduction/MDS
  - Optimization/SGD
project:
  - MLEM
type:
  - prompt
---
```
Write a complete python module implementing a stochastic version of multi dimensional scaling as described in `SMDS short.md`. It should leverage Pytorch so that it is possible to do the optimization part on GPU. The method should take as input in particular the raw data (not paiwise distances) and not compute the full matrix of pairwise distances (for memory issues) and it should also take as input a string distance describing the distance to use. Also create a notebook to experiment with the pipeline, comparing to PCA and MDS, in particular using sklearn make_s_curve and MNIST. Please also write a `pyproject.toml` and a comprehensive `README.md`.
```