---
createdDate: 2025-04-03
publish: true
tags: 
project: 
type:
---
# Comparing parametrizations of $W$
## Relative clause (sentence-level) on BERT
[[Attachments/spearman_param.html|Encoding Spearman]]
Happy to see better encoding performance with `cholesky` (= SPD). Weird that `exp` (= SPD) does not perform as well.
[[fi_param.html|Feature Importance]]
Profile of FI seem similar for `cholesky` and `exp` (both SPD) and others are garbage.
## SVO word-level on BERT and GPT2
[[spearman_param_word_level.html|Encoding Spearman]]
No more superiority of SPD params, also weird high and flat profile of performance for GPT2.
[[fi_param_word_level.html|Feature Importance]]
Nice to see very similar profiles for BERT with `cholesky` and `exp` confirmed by this simple [[correlation.html|pearson correlation heatmap]] (computed on FIs across layers of BERT and features).