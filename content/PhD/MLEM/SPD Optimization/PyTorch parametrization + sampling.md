---
createdDate: 2025-03-27
publish: true
tags:
  - SamplingTheory
  - Optimization
project:
  - MLEM
type:
---
# Sampling theory
Start batch size for reasonable variance optimized so that 99% confidence interval of the pairwise correlations between the features are all smaller than $10^{-2}$
- Short sentence (500 sentences): reasonable batch size of 4096
- Large (7k sentences): reasonable batch size of 65536 (for 0.03 margins), more variability
- Relative clause (7k sentences): reasonable batch size of 4096

This batch size is used to start the training. Then the batch size is multiplied by $\gamma$ at each *epoch*, this ensures convergence.
# With train/test split on sentences
Problem = different distribution
![[Pasted image 20250327135454.png]]
![[Pasted image 20250327135633.png|500]]
# Only train
![[Pasted image 20250327135800.png]]
![[Pasted image 20250327135936.png|500]]
Slightly different weights, cleaner than train/test
#  Added
Normalization of the matrix of parameters to have 1 Frobenius norm
Optimization of a differentiable version of Spearman instead of MSE, reach much better Spearman

# Next
Feature Importance (need to)
Train