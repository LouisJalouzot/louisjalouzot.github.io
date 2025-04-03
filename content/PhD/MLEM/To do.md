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
- [ ] Kendall Tau weighted for largest FIs
- [ ] LLM2Vec
- [ ] PCA/TSNE/UMAP/MDS (unfeasible)/Stochastic MDS
	- MDS on reduced version of a dataset: no lexical variability, one sample by condition
- [ ] Word level dataset
- [ ] Relative clause: remove interaction features
- [ ] Required batch size computation: change check from CI to std in some way
- [ ] Use later instead of crude estimation of batch size (pb = circular import)
- [ ] Add lexical variability in datasets to allow for Stratified KFold on all features
- [ ] Cross validated Permutation Importance with Stratified KFold
- [ ] Cluster correlated (pairs of) features