---
createdDate: 2025-03-27
publish: true
tags: 
project:
  - MLEM
type:
  - TODO
---
- [ ] Min max false 
- [x] Simple Permutation Importance on train
- [x] Paper: check if Stacked FI or Stacked FI / $\rho$
- [x] Word level dataset
- [ ] Cluster correlated (pairs of) features
- [ ] Unit tests
- [ ] Correlations between approaches across layers/models/datasets
	- Approaches = different parametrizations
- [ ] Required batch size computation: change check from CI to std in some way
- [ ] Use later instead of crude estimation of batch size (pb = circular import)
- [ ] Baseline encoding RandomForest
- [ ] Baseline decoding classical LogisticRegression AUC
- [ ] Baseline decoding pairwise
- [ ] ~~Relative clause: remove interaction features~~ inter_NUM = interaction of 3 features
- [ ] PCA/TSNE/UMAP/MDS (unfeasible)/Stochastic MDS
	- ~~MDS on reduced version of a dataset: no lexical variability, one sample by condition~~ bad
- [ ] LLM2Vec
- [ ] Add lexical variability in datasets to allow for Stratified KFold on all features
- [ ] Cross validated Permutation Importance with Stratified KFold
- [ ] Models comparisons: for a given sentence $s$, predict $d(R_{BERT}(s),R_{GPT2}(s))$ from features of $s$ (need same hidden dim)
	- Feature Importance on Random Forest or Metric Learning (on encoded features then) 
- [ ] [[Papers/Notes/King et al. 2020 - Back-to-back|King et al. 2020 - Back-to-back]] and [[Papers/Notes/Armitage et al. 2005 - Reduced|Armitage et al. 2005 - Reduced]] as *baselines*
