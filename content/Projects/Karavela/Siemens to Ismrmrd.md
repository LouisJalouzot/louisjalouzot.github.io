---
createdDate: 2025-05-20
publish: true
tags: 
project:
  - Karavela
type:
---
# Building Siemens to Ismrmrd on JZ
[Repo](https://github.com/ismrmrd/siemens_to_ismrmrd)
1. Start an interactive session on the `compil` partition of JZ
```bash
srun --cpus-per-task=6 --hint=nomultithread --partition=compil --account=ioj@cpu --qos=qos_cpu-dev --pty bash -i
```
2. Load necessary modules
```bash
module load cmake
```
3. Build `ismrmrd`
```bash
git clone https://github.com/ismrmrd/ismrmrd.git
cd ismrmrd
mkdir build
cd build
cmake ..
make
```