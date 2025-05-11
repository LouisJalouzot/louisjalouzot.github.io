---
createdDate: 2025-05-11
publish: true
tags:
  - LLM/BERT
  - FeatureImportance
project:
  - MLEM
type:
  - figures
---
# Setup
Comparing encoding Spearman and FIs for `bert-base-uncased` when taking representations from the `[CLS]` token (`token_aggregation=first`) or by averaging the tokens (`token_aggregation=mean`).
# Encoding Spearman
![[PhD/MLEM/Results/BERT CLS vs. mean/spearman.html]]
# Feature Importance
![[PhD/MLEM/Results/BERT CLS vs. mean/fi.html]]