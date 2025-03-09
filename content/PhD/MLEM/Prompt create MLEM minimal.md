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
	- the features can be discrete or continuous
	- sometimes features are unspecified (NaN values)
The module should give access to the following functions:

## representation_distances
Given the *repr* numpy array, compute a pairwise distance array *repr_pdist* of dimensions $n,n$.
It should be possible to specify the distance to use.

## feature_distances
From the *features* dataframe, compute pairwise distances for all the features.
Resulting in an array *features_pdist* of dimension $n,n,F$.
For a categorical feature, the distance between 2 stimuli should be 1 if they differ on this feature and 0 otherwise.
For a continuous feature, the distance should be the $L_1$ distance.
Distances to an unspecified feature should be 0.
Distances should be min-max scaled.

## mlem
From the arrays *features_pdist* and *repr_pdist*, serialize them into arrays of dimension $p$ and $p,F$ where $p$ is the number of pairs.
Use cross-validation, it should be possible to specify the number of folds.

# Constraints
Have multiple levels of verbose available in the functions.
Write simple, short, elegant and efficient code.
Write complete documentation with NumPy style docstrings.
Write a full python module that can be installed with pip directly from Github. It should support Python 3.13 down to at least Python 3.9.
Write a comprehensive yet compact readme. It should be possible for new users to easily install and play around with the module in their code.