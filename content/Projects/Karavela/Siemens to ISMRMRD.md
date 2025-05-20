---
createdDate: 2025-05-20
publish: true
tags: 
project:
  - Karavela
type:
---
# Using `siemens_to_ismrmrd` on JZ
[Repo](https://github.com/ismrmrd/siemens_to_ismrmrd)
## ~~With conda~~
1. ~~Install Miniconda: c.f. [here](https://www.anaconda.com/docs/getting-started/miniconda/install#linux-terminal-installer)~~
2.  ~~Create and activate virtual environment:~~
	- ~~`conda create --name siemens_to_ismrmrd`~~
	- ~~`conda activate siemens_to_ismrmrd`~~
3. ~~Install `siemens_to_ismrmrd`: `conda install inati::siemens_to_ismrmrd`~~
4. ~~Run with `siemens_to_ismrmrd -f meas_MID00832.dat`~~
~~Not working~~
## With docker
Maybe with [this](https://hub.docker.com/r/flywheel/siemens_to_ismrmrd), translate from docker to singularity to use on JZ