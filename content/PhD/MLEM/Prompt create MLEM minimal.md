---
createdDate: 2025-03-09
publish: true
tags:
  - prompt
  - MLEM
  - python
project: 
type: prompt
---
# Goal
Please write a full Python module.

# Functionalities
We will consider that the user has the following:
- a set of $n$ stimuli (which we will not directly use)
- high-dimensional embeddings of the stimuli
	- A numpy array *repr* with dimensions $n,h$
	- for instance, $h$ can be 768
- theoretical features of the stimuli
	- a pandas dataframe *features* with dimensions $n, F$
	- 
The module should give access to the 2 following functions:

## Representation distances
A function 

## Feature distances

## Encoding Model and Permutation Feature Importance


# Constraints
Have multiple levels of verbose available in the functions.
Write simple, short, elegant and efficient code.
Write complete documentation with NumPy style docstrings.
Write a full python module that can be installed with pip directly from Github. It should support Python 3.13 down to at least Python 3.9.
Write a comprehensive yet compact readme. It should be possible for a new users to easily install and play around with the module in their code.