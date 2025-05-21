---
createdDate: 2025-05-20
publish: true
tags:
  - Dataset/EWT
  - Syntax
project:
  - MLEM
type:
---
Using the 12 544 annotated sentences from [EN EWT UD train](https://raw.githubusercontent.com/UniversalDependencies/UD_English-EWT/refs/heads/master/en_ewt-ud-train.conllu) -> 204 427 words
# v1
Explore on [HuggingFace](https://huggingface.co/datasets/ljalouzot/EN-EWT-UD)
Correlations:
- v1
	- [[EWT_v1_correlations.html|Between features]]
	- [[EWT_v1_feature_pairs_correlations.html|Between feature pairs]]
- v1 tiny (at most 5 samples for each combination of feature that exists)
	- [[EWT_v1_tiny_correlations.html|Between features]]
	- [[EWT_v1_tiny_feature_pairs_correlations.html|Between feature pairs]]
## Filtering features
- Had to change the pairs "Do", "n't" to "Don", "'t" to align with tokenizers (649 affected).
- Furthermore they don't split "dont" and "didnt" and we can't merge so I drop them (150 dropped).
- Had to change `’` for `'`
- Got rid of words labeled as typos (860) and abbreviations (399) because split not aligned with tokenizer. Deprel "goeswith" seems similarly problematic but dropped by following filtering.

Counts of values for each feature in the raw dataset and corresponding filtering applied.

### Feature: `upos` (Universal Part of Speech)
|       |   NOUN |   PUNCT |   VERB |   PRON |   ADP |   DET |   ADJ |   AUX |   PROPN |   ADV |   CCONJ |   PART |   NUM |   SCONJ |   SYM |   INTJ |   X |
|:------|-------:|--------:|-------:|-------:|------:|------:|------:|------:|--------:|------:|--------:|-------:|------:|--------:|------:|-------:|----:|
| count |  34751 |   23596 |  22576 |  18677 | 17742 | 16299 | 13137 | 12815 |   12620 | 10167 |    6687 |   5748 |  4126 |    3819 |   722 |    695 | 400 |

Drop < 1000: X, INTJ, SYM

### ~~Feature: `deprel`~~

|       |   punct |   case |   nsubj |   det |   root |   advmod |   obj |   amod |   obl |   conj |   compound |   mark |   nmod |   cc |   aux |   cop |   advcl |   nmod:poss |   xcomp |   ccomp |   acl:relcl |   flat |   parataxis |   nummod |   appos |   acl |   aux:pass |   nsubj:pass |   obl:unmarked |   -nmod:unmarked |   discourse |   compound:prt |   iobj |   list |   expl |   fixed |   nmod:desc |   obl:agent |   csubj |   nsubj:outer |   det:predet |   vocative |   goeswith |   advcl:relcl |   cc:preconj |   reparandum |   orphan |   csubj:pass |   dislocated |   dep |   csubj:outer |
|:------|--------:|-------:|--------:|------:|-------:|---------:|------:|-------:|------:|-------:|-----------:|-------:|-------:|-----:|------:|------:|--------:|------------:|--------:|--------:|------------:|-------:|------------:|---------:|--------:|------:|-----------:|-------------:|---------------:|----------------:|------------:|---------------:|------:|-------:|-------:|--------:|------------:|------------:|--------:|--------------:|-------------:|-----------:|-----------:|--------------:|-------------:|-------------:|---------:|-------------:|-------------:|------:|--------------:|
| count |   23556 |  17444 |   15981 | 15725 |  12544 |    11301 |  9896 |   9587 |  8803 |   7614 |       7210 |   7124 |   6874 | 6756 |  6501 |  4728 |    3814 |        3688 |    3085 |    2110 |        1922 |   1829 |        1552 |     1544 |    1544 |  1493 |       1358 |         1183 |           1016 |             998 |         812 |            749 |    649 |    616 |    601 |     523 |         318 |         312 |     277 |           213 |          177 |        139 |        131 |           121 |           81 |           35 |       26 |            7 |            5 |     3 |             2 |

~~Drop < 1000: nmod:unmarked, discourse, compound:prt, iobj, list, expl, fixed, nmod:desc, obl:agent, csubj, nsubj:outer, det:predet, vocative, goeswith, advcl:relcl, cc:preconj, reparandum, orphan, csubj:pass, dislocated, dep, csubj:outer~~
Drop feature: not word level

### Feature: `Number`
|       |   Sing |   Plur |   Ptan |
|:------|-------:|-------:|-------:|
| count |  60824 |  16383 |    206 |

Drop `Ptan`

### ~~Feature: `Degree`~~

|       |   Pos |   Cmp |   Sup |
|:------|------:|------:|------:|
| count | 12571 |   829 |   548 |

Drop the feature

### Feature: `Mood`
|       |   Ind |   Imp |   Sub |
|:------|------:|------:|------:|
| count | 15316 |  1273 |    48 |

Drop `Sub`

### Feature: `Person`

|       |     3 |     1 |    2 |
|:------|------:|------:|-----:|
| count | 16533 | 10107 | 3987 |

### Feature: `Tense`

|       |   Pres |   Past |
|:------|-------:|-------:|
| count |  12288 |   9365 |

### Feature: `VerbForm`

|       |   Fin |   Inf |   Part |   Ger |
|:------|------:|------:|-------:|------:|
| count | 19929 |  8167 |   6289 |  1006 |

### Feature: `Definite`

|       |   Def |   Ind |
|:------|------:|------:|
| count |  9071 |  4241 |

### Feature: `PronType`

|       |   Prs |   Art |   Dem |   Rel |   Ind |   Int |   Tot |   Neg |   Emp |   Rcp |
|:------|------:|------:|------:|------:|------:|------:|------:|------:|------:|------:|
| count | 15220 | 13312 |  2789 |  1484 |  1368 |  1111 |   887 |   523 |    43 |    18 |

Drop < 1000: Tot, Neg, Emp, Rcp

### Feature: `depth`

|       |     2 |     1 |     3 |     4 |     0 |     5 |    6 |    7 |    8 |   9 |   10 |   11 |   12 |   13 |   14 |   15 |   16 |
|:------|------:|------:|------:|------:|------:|------:|-----:|-----:|-----:|----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|
| count | 55885 | 51689 | 39350 | 23374 | 12544 | 11966 | 5472 | 2492 | 1075 | 410 |  155 |   73 |   36 |   26 |   24 |    5 |    1 |

Drop < 1000: > 8

### Feature: `Case`

|       |   Nom |   Gen |   Acc |
|:------|------:|------:|------:|
| count |  9471 |  3043 |  2692 |