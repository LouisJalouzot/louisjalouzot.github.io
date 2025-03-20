---
createdDate: 2025-03-20
publish: true
tags: 
project:
  - MLEM
type:
  - meeting
---
[[SPD matrices]]
[[Feature Importance]]

# Questions
- [ ] PyTorch with all data on GPU or increasing data size with Pymanopt for SPD matrices?
	- [ ] PyTorch: better initial parameters? For now, random or Id
	- [ ] Same dirty solution for PyTorch as Pymanopt for speed? Epochs on random batches without exploring all the data
- [ ] Algorithm that does my dirty trick? Mail Bertrand?
- [ ] Stick with Permutation Importance?
- [ ] Ideas for applying Conditional Permutation Importance?
	- [ ] Permuting before applying distances?
- [ ] Decoding paper on arxiv?

# Next up
- [ ] More systematic (with cross val) comparison of the different approaches