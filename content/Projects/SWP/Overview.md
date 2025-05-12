---
createdDate: 2025-05-12
publish: true
tags: 
project:
  - SWP
type:
---
- Investigate geometry of representations. Maybe onion-like? 
- Learn interventions mapping to, e.g. change a vowel to consonant etc. in the produced word compared to source (need a model with perfect perfs on training)
	- Differentiate source/target cases: real/real, real/pseudo, pseudo/pseudo, pseudo/real
	- Learn one mapping, then one for each case if not perfect perf
	- Investigate perfs on pseudo wrt pseudoness levels
		- Either in terms of well-formedness, probability for a 3-gram
		- Or size of phonological neighborhood, ~ min Levenshtein distance with a real word in our case
		- c.f. [[Papers/Notes/Regev et al. 2024 - High-level|Regev et al. 2024 - High-level]]
	- Investigate impact of training set, only real, real+pseudo, only pseudo
# Todo
- [ ] Why RNN not working
- [ ] Apply MLEM with cosine similarity and "norm diff" distances to get flags of onion representations
- [ ] Learn the mappings, maybe need more discussing of the training setup