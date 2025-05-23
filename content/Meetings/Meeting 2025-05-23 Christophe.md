---
createdDate: 2025-05-23
publish: true
tags: 
project:
  - MLEM
type:
  - meeting
---
- [x] Alexis data on JZ (30mo/s, 5/6h for a 1h session)
- [x] TO Croatia
- [x] Poster 28/05
- [x] TO CCN
- [x] Update from [[Meeting 2025-05-20 Yair]]
Not seeing anything with the new dataset (here `roberta-large-mnli`) ...
![[Pasted image 20250523105451.png|600]]

> [!multi-column]
>> ![[Pasted image 20250523105635.png]]
>
>> ![[Pasted image 20250523105719.png]]

Feeling like (simple) syntax is not necessarily encoded in representations, only computed and used by attention for next token prediction. Instead, LLMs compute/disambiguate semantics throughout their layers. Need to add semantic features to our dataset, but which ones?
- Next steps for the poster:
	- [ ] Pursue a better word-level dataset ([[English Web Treebank]])
	- [x] Stick to sentence-level relative clause