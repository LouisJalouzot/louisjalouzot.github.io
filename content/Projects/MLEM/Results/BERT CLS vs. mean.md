---
createdDate: 2025-05-11
publish: true
tags:
  - LLM/BERT
  - FeatureImportance
  - Figures/plotly
project:
  - MLEM
type:
  - figures
---
Comparing encoding Spearman and FIs for `bert-base-uncased` when taking representations from the `[CLS]` token (`token_aggregation=first`) or by averaging the tokens (`token_aggregation=mean`) on the 3 sentence-level datasets (`short_sentence`, `relative_clause`, `long_range_agreement`).
[[Attachments/spearman.html|Encoding Spearman]]
[[Attachments/fi.html|Feature Importance]] the nice peak of `sentence_RC_attached` in middle layers disappeared because this feature was clustered with many others. I would need to loosen the clustering threshold to allow for more clusters/individual Features.