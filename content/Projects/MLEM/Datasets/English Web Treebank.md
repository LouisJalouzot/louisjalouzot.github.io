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
Features that could be interesting to incorporate:
- Reflex
# v1
Explore on [HuggingFace](https://huggingface.co/datasets/ljalouzot/EN-EWT-UD)
## Filtering
- Had to change the pairs "Do", "n't" to "Don", "'t" to align with tokenizers (649 affected).
- Had to change `’` for `'`
- ~~Furthermore they don't split "dont" and "didnt" and we can't merge so I drop them (150 dropped).~~
- ~~Got rid of sentences with at least one word labeled as Typo (860 words in 726 sentences) or abbreviations (399 words in 314 sentences) or CorrectSpaceAfter (e.g. "I'ma", 80 words in 70 sentences) because split not aligned with tokenizer.~~
- Deprel "goeswith" seems similarly problematic but dropped by following filtering.
- ~~Manually drop sentences with "gotta" in them which is not labeled as an abbreviation (3 sentences)~~
- Manually remove sentences with "gotta" or "cannot" since they are split in the annotated data and not by the tokenizers

- Fields indicating errors to keep at `None` sentence-wide:
```
Abbr, FlatType, Typo, CorrectForm, Foreign, Style, ModernForm, Mentioned, CorrectSpaceAfter, CorrectNumber, MissingWordAfter, CorrectVerbForm, SpecialEncoding, CorrectTense
```
12544 -> 10334 sentences

Features kept: Position, Number, Person, Tense, Gender, VerbForm, Definite, Case
Filter categories with < 400 words
```
Position: keeping [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
dropping [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 67, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 96, 98, 99, 100, 102, 101, 104, 103]

Number: keeping ['Sing', 'Plur']
dropping ['Ptan']

Person: keeping ['3', '1', '2']

Tense: keeping ['Pres', 'Past']

Gender: keeping ['Neut', 'Masc', 'Fem']

VerbForm: keeping ['Fin', 'Inf', 'Part', 'Ger']

Definite: keeping ['Def', 'Ind']

Case: keeping ['Nom', 'Gen', 'Acc']
```

## v1 small
- Drop words with Position < 5 (not interesting embeddings with causal LLMs)
- *All* combinations of features present in the data had between 13 and 74k samples, kept at most 100 for each combinations (170k -> 2.6k words)
- Correlations [[EWT_v1_small_correlations.html|between features]] and [[EWT_v1_small_feature_pairs_correlations.html|between feature pairs]]
## Old:
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
