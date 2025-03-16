---
title: Chamma et al. 2023 - Statistically
paperTitle: Statistically Valid Variable Importance Assessment through Conditional Permutations
authors:
  - Chamma, Ahmad,Engemann, Denis A.,Thirion, Bertrand
publish: true
cssclasses:
  - list-cards
type:
  - annotation
project:
  - MLEM
tags:
  - FeatureImportance
status: read
progress: to annotate
---
# Annotation for [Chamma et al. 2023 - Statistically](Papers/References/Chamma%20et%20al.%202023%20-%20Statistically)

> [!abstract] Statistically Valid Variable Importance Assessment through Conditional Permutations

> [!example]- Authors
> - [Chamma, Ahmad](Chamma%2C%20Ahmad)
> - [Engemann, Denis A.](Engemann%2C%20Denis%20A.)
> - [Thirion, Bertrand](Thirion%2C%20Bertrand)

**Year:** 2023
**DOI:** 10.48550/arXiv.2309.07593
**URL:** http://arxiv.org/abs/2309.07593
**PDF:** [Chamma et al. 2023 - Statistically](Papers/PDFs/Chamma%20et%20al.%202023%20-%20Statistically%20Valid%20Variable%20Importance%20Assessment%20through%20Conditional%20Permutations.pdf)

# Highlights


# Goal (yellow)


> [!PDF|yellow] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=1&selection=28,18,32,41&color=yellow|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.1]]
> > Removal-based importance assessment is currently the reference approach, particularly when statistical guarantees are sought to justify variable inclusion. It is often implemented with variable permutation schemes. On the flip side, these approaches risk misidentifying unimportant variables as important in the presence of correlations among covariates


# Method (purple)


> [!PDF|important] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=1&selection=32,43,35,21&color=important|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.1]]
> > Here we develop a systematic approach for studying Conditional Permutation Importance (CPI) that is model agnostic and computationally lean, as well as reusable benchmarks of state-of-the-art variable importance estimators


# Data (purple)


# Results (red)


> [!PDF|red] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=1&selection=35,23,41,14&color=red|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.1]]
> > We show theoretically and empirically that CPI overcomes the limitations of standard permutation importance by providing accurate type-I error control.


# Discussion (blue)


# Questions


## Related (green)


> [!PDF|related] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=2&selection=54,0,75,47&color=related|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.2]]
> > A popular approach to interpret black-box predictive models is based on locally interpretable, i.e. instance-based, models. LIME [Ribeiro et al., 2016] provides local interpretable model-agnostic explanations by locally approximating a given complex model with a linear model around the instance of interest. SHAP [Burzykowski, 2020] is a popular package that measures local feature effects using the Shapley values from coalitional game theory

> [!PDF|related] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=2&selection=76,0,77,63&color=related|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.2]]
> > However, global, i.e. population-level, explanations are better suited than instance-level explanations for epidemiological studies and scientific discovery in general.

[[Papers/Notes/Lundberg and Lee 2017 - A|Lundberg and Lee 2017 - A]] <font color="#ff0000">(SHAP) = instance-based/local interpretation, global/population-level = better</font>

> [!PDF|related] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=2&selection=88,50,94,34&color=related|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.2]]
> > Recently, a generic approach has been proposed in [Williamson et al., 2021] that measures the loss difference between models that include or exclude a given variable, also applied with LOCO (Leave One Covariate Out) in the work by Lei et al. [2018]. They show the asymptotic consistency of the model. However, their approach is intractable, given that it requires refitting the model for each variable. A simplified version has been proposed by Gao et al. [2022]. However, relying on linear approximations, some statistical guarantees from [Williamson et al., 2021] are potentially lost


> [!PDF|related] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=2&selection=88,50,94,34&color=related|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.2]]
> > ecently, a generic approach has been proposed in [Williamson et al., 2021] that measures the loss difference between models that include or exclude a given variable, also applied with LOCO (Leave One Covariate Out) in the work by Lei et al. [2018]. They show the asymptotic consistency of the model. However, their approach is intractable, given that it requires refitting the model for each variable. A simplified version has been proposed by Gao et al. [2022]. However, relying on linear approximations, some statistical guarantees from [Williamson et al., 2021] are potentially lost


> [!PDF|related] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=2&selection=95,0,104,40&color=related|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.2]]
> > Another recent paper by Mi et al. [2021] has introduced model-agnostic explanation for black-box models based on the permutation approach. Permutation importance [Breiman, 2001] can work with

> [!PDF|related] [[Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations.pdf#page=3&selection=0,0,12,99&color=related|Chamma et al. 2023 - Statistically Valid Variable Importance Assessment through Conditional Permutations, p.3]]
> > any learner. Moreover, it relies on a single model fit, hence it is an efficient procedure. Strobl et al. [2008] pointed out limitations with the permutation approach in the face of correlated variables. As an alternative, they propose a conditional permutation importance by shuffling the variable of interest conditionally on the other variables. However, the solution was specific to Random Forests, as it is based on bisecting the space with the cutpoints extracted during the building process of the forest



