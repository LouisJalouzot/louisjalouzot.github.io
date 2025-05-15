---
createdDate: 2025-05-15
publish: true
tags: 
project:
  - MLEM
type:
  - meeting
---
# Figures to show
- FI + correlations + MDS for BERT/GPT2 on SVO word level
- Baselines (explain them)
	- Question: encoding performance or baseline?
- FI BERT mean vs. CLS
# Next-up
- Remake correlation plot between methods (params)
	- Question: FR-RSA = diag params, with our training setup (more conservative comparison)?
	- Question: RSA = id params, do we care?
	- Question: old method = diag positive params, do we care?
- Question: how to assess method superiority (MLEM, FR-RSA, baselines)? Visually better clustering on MDS/PCA?
	- Encoding Spearman/maybe clusters in MDS
- ~~Question: word-level relative clause dataset?~~ -> PTB
- Univariate analysis:
	- BERT/RoBERTa relative clause?
	- ~~GPT2/Llama3 svo word level?~~
- Managed to run Llama4 on `unicog-ext1` (16 experts each of 17B parameters), maybe on SVO?