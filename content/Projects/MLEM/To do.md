---
createdDate: 2025-03-27
publish: true
tags: 
project:
  - MLEM
type:
  - TODO
---
- [x] Min max false 
- [x] Simple Permutation Importance on train
- [x] Paper: check if Stacked FI or Stacked FI / $\rho$
- [x] Word level dataset
- [x] Required batch size computation: change check from CI to std in some way
- [x] Use later instead of crude estimation of batch size (pb = circular import)
- [x] ~~Relative clause: remove interaction features~~ inter_NUM = interaction of 3 features
- [x] Cluster correlated (pairs of) features
- [x] HOW TO NOT LOG DEBUG IN TERMINAL
- [x] Mistral 7B bugged
- [x] Offset mapping for LLama/Mistral models
- [x] LLM2Vec
- [x] Check features clustering
- [x] Check correlation def in Jeanne's paper
- [x] Baseline encoding RandomForest
- [x] Baseline decoding classical LogisticRegression AUC
- [x] PCA/TSNE/UMAP/MDS (unfeasible)/Stochastic MDS
- [x] Simulation, show the superiority of MLEM over FR-RSA for interactions 
- [x] ~~Try again weight decay, in particular with high correlations~~ Makes the FI distribute on neighbor features (in terms of correlations) even though not relevant
- [ ] Word dataset, PCA on attention KV or Q and color by dependency relation
- [ ] Check `word in sentence[start_idx:end_idx+1]`
- [ ] Drop POS and maybe depth if too correlated with position
- [ ] Make simulated dataset in higher dimension with effects not aligned with the canonical basis
- [ ] Try to make a dataset out of ground-truth W (MDS or analytical) or try to find ground-truth from dataset
- [ ] Make plot MLEM/FR-RSA dummy (with $\delta f_1 \delta f_2$ in regressor)/FR-RSA dummy (with feature $\mathbb{1}[f_1==f_2]$ as feature of the dataset)/FR-RSA (if 2nd as strong as MLEM, maybe less robust to different types of noise)
- [ ] GTE/GTR models
- [ ] Emmanuel's experiment:
```
- sample values for effect sizes of Encoded1, Encoded2, interaction
- run 
-- MLEM, FR-RSA with dummy-coded interaction, FR-RSA without dummy-coded interaction
-- on two datasets one sampled without the interaction term, one with the interaction term added
-- [optional] with different amounts of data from the sample
This should provide
- the rates of false positive and false negative for the method (treat the method as a classifier), and optionally its statistical power
- the correlations between inferred values and underlying values
```
- [ ] Make a simulated dataset that would give negative weights in FR-RSA
- [ ] [ConceptNet](https://conceptnet.io/) to add semantic features to the syntactic ones and see which ones are picked up by the model
- [ ] Mean of univariate as another baseline
- [ ] Cross validation?
- [ ] Build comprehensive and balanced word level dataset from PTB to drop feature clustering
	- See [UD English GUM](https://universaldependencies.org/treebanks/en_gum/index.html)
- [ ] Make again what makes 2 language models think alike
	- ~~MDS on reduced version of a dataset: no lexical variability, one sample by condition~~ bad
- [ ] Correlations between approaches across layers/models/datasets
	- Approaches = different parametrizations
- [ ] Unit tests
- [ ] Fix `model_post_init` called by exca for caching
- [ ] Baseline decoding pairwise
- [ ] Add lexical variability in datasets to allow for Stratified KFold on all features
- [ ] Cross validated Permutation Importance with Stratified KFold
- [ ] Models comparisons: for a given sentence $s$, predict $d(R_{BERT}(s),R_{GPT2}(s))$ from features of $s$ (need same hidden dim)
	- Feature Importance on Random Forest or Metric Learning (on encoded features then) 
- [ ] [[Papers/Notes/King et al. 2020 - Back-to-back|King et al. 2020 - Back-to-back]] and [[Papers/Notes/Armitage et al. 2005 - Reduced|Armitage et al. 2005 - Reduced]] as *baselines*
- [ ] There seem to be a bug with `EstimateCorrelation` (increasing std between estimates with larger batch sizes, contre-intuitive), bug fixed by running on GPU but would deserve investigating
- [ ] Multi-linear form to allow for interactions between any number of features