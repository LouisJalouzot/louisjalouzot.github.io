---
createdDate: 2025-03-20
publish: true
tags:
  - FeatureImportance
project:
  - MLEM
type:
  - Outline
---
# Conditional Permutation Importance

> [!PDF|] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=3&selection=301,0,306,66|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.3]]
> >  The permutation approach leads to false detections in the presence of correlations
> 

[[Papers/Notes/Chamma et al. 2023 - Statistically|Chamma et al. 2023 - Statistically]] but only for MSE
[[Papers/Notes/Lobo et al. 2025 - Sobol-CPI|Lobo et al. 2025 - Sobol-CPI]] seems suited for any loss

> [!info] Intuition Conditional Permutation Importance
> Permutation Importance but permute independent part of each feature instead of the whole feature
> Independent from the other features, = residual
## Shapley values
c.f. [[Papers/Notes/Lundberg and Lee 2017 - A|Lundberg and Lee 2017 - A]]
c.f. [Github](https://github.com/shap/shap)
# Conclusion
Discussion with Bertrand: CPI seems unsuited, should stick to classical Permutation Importance which are actually not bad
Note: PI and CPI were designed for black-box models, with such a simple model we can actually just look at the weights