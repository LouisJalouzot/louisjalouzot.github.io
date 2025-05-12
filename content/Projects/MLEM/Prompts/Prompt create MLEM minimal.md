---
createdDate: 2025-03-09
publish: true
tags:
  - Prompt
  - MLEM
  - Python
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
Then fit a Ridge regression with positive coefficients to predict *repr_pdist* from *features_pdist*.
Then use Permutation Feature Importance to compute the importance of each feature in the prediction with respect to the Spearman correlation. It should be possible to specify the number of permutations (50 by defaults).
There should be nested cross validation. The outer one (2 folds by default) on which to compute Permutation Feature Importance and the inner one (3 folds by default) on which to validate the Ridge $\alpha$ parameter (it should explore a log space of 15 $\alpha$ values between $10^{-8}$ and $10^3$). It should be possible to specify both numbers of folds.
Compute the significance of each Feature Importance and add FDR correction.
Output the results in a pandas dataframe with meaningful columns. The user should have the possibility or not to give its *features* dataframe to this functions to have feature names in the output.
Have a randomness seed for reproducability.

# Constraints 
Have multiple levels of verbose available in the functions.
Write simple, short, elegant and efficient code.
Write complete documentation with NumPy style docstrings.
Write a full python module that can be installed with pip directly from Github. It should support Python 3.13 down to at least Python 3.9.
Write a compact readme. It should be possible for new users to easily install and play around with the module in their code.