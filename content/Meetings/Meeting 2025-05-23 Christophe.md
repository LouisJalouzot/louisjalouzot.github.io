---
createdDate: 2025-05-23
publish: true
tags: 
project:
  - MLEM
type:
  - meeting
---
- [ ] Update from [[Meeting 2025-05-20 Yair]]
- [ ] Alexis data on JZ (30mo/s, 5/6h for a 1h session)
- [ ] TO Croatia
- [ ] TO CCN
Not seeing anything with the new dataset (here `roberta-large-mnli`) ...
![[Pasted image 20250523105451.png|600]]

Feeling like (simple) syntax is not necessarily encoded in representations, only computed and used by attention for next token prediction. Instead, LLMs compute/disambiguate semantics throughout their layers. Need to add semantic features to our dataset, but which ones?
- Next steps for the poster:
	- [ ] Pursue a better word-level dataset ([[English Web Treebank]])
	- [ ] Stick to sentence-level relative clause