---
createdDate: 2025-03-27
publish: true
tags: 
project:
  - MLEM
type:
  - TODO
---
- [x] Simple Permutation Importance on train
- [ ] Relative clause: remove interaction features
- [ ] Word level dataset
- [ ] PCA/TSNE/UMAP/MDS (unfeasible)/Stochastic MDS
	- MDS on reduced version of a dataset: no lexical variability, one sample by condition
- [ ] Cluster correlated (pairs of) features
- [ ] Kendall Tau weighted for largest FIs
- [ ] LLM2Vec
- [ ] Required batch size computation: change check from CI to std in some way
- [ ] Use later instead of crude estimation of batch size (pb = circular import)
- [ ] Add lexical variability in datasets to allow for Stratified KFold on all features
- [ ] Cross validated Permutation Importance with Stratified KFold
- [ ] Models comparisons: for a given sentence $s$, predict $d(R_{BERT}(s),R_{GPT2}(s))$ from features of $s$ (need same hidden dim)
	- Feature Importance on Random Forest or Metric Learning (on encoded features then) 