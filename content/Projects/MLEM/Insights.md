---
createdDate: 2025-05-14
publish: true
tags:
  - Data
project:
  - MLEM
type:
---
# Datasets
## Short sentence
- 75k/136k samples enough for reasonable variability

> [!example]- Number of samples per combination of features 
> Ignoring ZIPF and LEMMA
> 
> | n_samples | sentence_GROUP | subj_TYPE | subj_ANIM | subj_GEN | subj_NUM | subj_PERS | sentence_TENSE |
> | --------- | -------------- | --------- | --------- | -------- | -------- | --------- | -------------- |
> | 3         | sv             | PRO       | False     |          | sg       | 3         | past           |
> | 3         | sv             | PRO       | False     |          | sg       | 3         | pres           |
> | 6         | sv             | PRO       | True      |          | sg       | 1         | pres           |
> | 6         | sv             | PRO       | True      |          |          | 2         | past           |
> | 6         | sv             | PRO       | True      | m        | sg       | 3         | pres           |
> | 6         | sv             | PRO       | True      | f        | sg       | 3         | pres           |
> | 6         | sv             | PRO       | True      | f        | sg       | 3         | past           |
> | 6         | sv             | PRO       | True      |          | sg       | 1         | past           |
> | 6         | sv             | PRO       | True      | m        | sg       | 3         | past           |
> | 6         | sv             | PRO       | True      |          | pl       | 1         | past           |
> | 6         | sv             | PRO       | True      |          | pl       | 3         | pres           |
> | 6         | sv             | PRO       | True      |          | pl       | 3         | past           |
> | 6         | question       | PRO       | True      |          |          | 3         | pres           |
> | 6         | question       | PRO       | True      |          |          | 3         | past           |
> | 6         | sv             | PRO       | True      |          | pl       | 1         | pres           |
> | 6         | sv             | PRO       | True      |          |          | 2         | pres           |
> | 9         | question       | N         | False     |          | pl       | 3         | pres           |
> | 9         | question       | N         | False     |          | sg       | 3         | pres           |
> | 9         | question       | N         | False     |          | sg       | 3         | past           |
> | 9         | question       | N         | False     |          | pl       | 3         | past           |
> | 9         | sv             | N         | False     |          | pl       | 3         | pres           |
> | 9         | sv             | N         | False     |          | sg       | 3         | past           |
> | 9         | sv             | N         | False     |          | sg       | 3         | pres           |
> | 9         | sv             | N         | False     |          | pl       | 3         | past           |
> | 18        | sv             | PropN     | True      | f        | sg       | 3         | past           |
> | 18        | sv             | PropN     | True      | m        | sg       | 3         | pres           |
> | 18        | question       | N         | True      | m        | pl       | 3         | past           |
> | 18        | question       | N         | True      | m        | pl       | 3         | pres           |
> | 18        | question       | N         | True      | f        | pl       | 3         | past           |
> | 18        | question       | N         | True      | f        | pl       | 3         | pres           |
> | 18        | question       | N         | True      | m        | sg       | 3         | past           |
> | 18        | question       | N         | True      | m        | sg       | 3         | pres           |
> | 18        | question       | N         | True      | f        | sg       | 3         | past           |
> | 18        | sv             | PropN     | True      | m        | sg       | 3         | past           |
> | 18        | sv             | N         | True      | f        | sg       | 3         | pres           |
> | 18        | sv             | N         | True      | f        | sg       | 3         | past           |
> | 18        | sv             | N         | True      | m        | sg       | 3         | pres           |
> | 18        | sv             | N         | True      | m        | sg       | 3         | past           |
> | 18        | sv             | N         | True      | f        | pl       | 3         | pres           |
> | 18        | sv             | N         | True      | f        | pl       | 3         | past           |
> | 18        | sv             | N         | True      | m        | pl       | 3         | pres           |
> | 18        | sv             | N         | True      | m        | pl       | 3         | past           |
> | 18        | question       | N         | True      | f        | sg       | 3         | pres           |
> | 18        | sv             | PropN     | True      | f        | sg       | 3         | pres           |

## SVO word level
- 400k/705k samples for reasonable variability

> [!example]- Number of samples per feature combination
> Ignoring lexical_n_letters, sequential_posit_from_start, structural_depth_in_tree
> 
> |n_samples|grammatical_gender|grammatical_number|grammatical_pos|grammatical_tense|grammatical_person|sentential_question|
> |---------|------------------|------------------|---------------|-----------------|------------------|-------------------|
> |1        |                  |sg                |V              |pres             |2.0               |False              |
> |1        |                  |sg                |V              |pres             |1.0               |False              |
> |5        |                  |sg                |N              |pres             |2.0               |False              |
> |5        |                  |sg                |N              |pres             |1.0               |False              |
> |6        |                  |sg                |Aux            |pres             |1.0               |True               |
> |6        |                  |sg                |Aux            |pres             |2.0               |True               |
> |6        |                  |sg                |N              |                 |3.0               |True               |
> |6        |                  |sg                |PRP            |                 |3.0               |False              |
> |6        |                  |pl                |N              |                 |3.0               |True               |
> |7        |                  |pl                |V              |pres             |                  |False              |
> |8        |                  |sg                |V              |pres             |1.0               |True               |
> |8        |                  |pl                |V              |pres             |                  |True               |
> |12       |                  |sg                |PRP            |                 |1.0               |False              |
> |12       |                  |pl                |PRP            |                 |3.0               |True               |
> |12       |                  |sg                |N              |                 |3.0               |False              |
> |12       |                  |sg                |Aux            |pres             |3.0               |True               |
> |12       |m                 |sg                |PRP            |                 |3.0               |True               |
> |12       |                  |sg                |PRP            |                 |1.0               |True               |
> |12       |f                 |sg                |PRP            |                 |3.0               |True               |
> |12       |                  |pl                |N              |                 |3.0               |False              |
> |12       |                  |pl                |PRP            |                 |1.0               |True               |
> |12       |                  |pl                |PRP            |                 |3.0               |False              |
> |12       |f                 |sg                |PRP            |                 |3.0               |False              |
> |12       |m                 |sg                |PRP            |                 |3.0               |False              |
> |12       |f                 |sg                |N              |                 |3.0               |True               |
> |12       |m                 |sg                |N              |                 |3.0               |True               |
> |12       |f                 |pl                |N              |                 |3.0               |True               |
> |12       |m                 |pl                |N              |                 |3.0               |True               |
> |12       |                  |pl                |PRP            |                 |1.0               |False              |
> |17       |                  |                  |N              |past             |                  |True               |
> |18       |                  |                  |PRP            |                 |2.0               |False              |
> |18       |                  |pl                |Aux            |pres             |                  |True               |
> |19       |                  |                  |V              |past             |                  |True               |
> |21       |                  |sg                |N              |pres             |3.0               |True               |
> |24       |m                 |pl                |N              |                 |3.0               |False              |
> |24       |                  |                  |PRP            |                 |2.0               |True               |
> |24       |f                 |pl                |N              |                 |3.0               |False              |
> |30       |                  |pl                |DT             |                 |                  |False              |
> |30       |                  |sg                |DT             |                 |                  |False              |
> |36       |m                 |sg                |N              |                 |3.0               |False              |
> |36       |f                 |sg                |N              |                 |3.0               |False              |
> |40       |                  |sg                |N              |pres             |1.0               |True               |
> |41       |                  |pl                |N              |pres             |                  |False              |
> |42       |                  |                  |Aux            |past             |                  |True               |
> |43       |                  |pl                |N              |pres             |                  |True               |
> |53       |                  |                  |N              |past             |                  |False              |
> |57       |                  |sg                |N              |pres             |3.0               |False              |
> |58       |                  |                  |V              |past             |                  |False              |
> |60       |                  |                  |DT             |                 |                  |False              |
> |72       |                  |                  |W              |                 |3.0               |True               |
> |156      |                  |                  |.              |                 |                  |True               |
> 

## Relative clause
- 30k/30m samples for reasonable variability

> [!example]- Number of samples per feature combination
> Ignoring ZIPF and LEMMA
> 
> | n_samples | sentence_CLAUSE | sentence_RC_attached | subj_NUM | subj_GEN | obj_NUM | obj_GEN | embed_NUM | embed_GEN | intervener_NUM | intervener_GEN |
> | --------- | --------------- | -------------------- | -------- | -------- | ------- | ------- | --------- | --------- | -------------- | -------------- |
> | 12        | subjwho         | peripheral           | sg       | f        | sg      | f       | sg        | f         | False          | False          |
> | 12        | objwho          | center_embedding     | sg       | f        | sg      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | center_embedding     | sg       | f        | pl      | f       | pl        | f         | True           | False          |
> | 12        | subjwho         | center_embedding     | sg       | f        | sg      | f       | pl        | f         | True           | False          |
> | 12        | subjwho         | center_embedding     | sg       | f        | pl      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | center_embedding     | sg       | f        | sg      | f       | sg        | f         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | m        | pl      | m       | sg        | m         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | m        | pl      | m       | pl        | m         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | m        | pl      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | m        | sg      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | m        | sg      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | center_embedding     | sg       | f        | pl      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | m        | sg      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | f        | pl      | f       | pl        | f         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | f        | pl      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | f        | pl      | f       | pl        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | f        | pl      | f       | sg        | f         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | f        | sg      | f       | pl        | f         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | f        | sg      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | f        | sg      | f       | pl        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | f        | sg      | f       | sg        | f         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | m        | pl      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | m        | pl      | m       | sg        | m         | False          | False          |
> | 12        | subjwho         | peripheral           | pl       | m        | sg      | m       | sg        | m         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | m        | pl      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | center_embedding     | sg       | f        | sg      | f       | pl        | f         | True           | False          |
> | 12        | subjwho         | center_embedding     | sg       | m        | sg      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | center_embedding     | pl       | m        | sg      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | center_embedding     | pl       | m        | pl      | m       | sg        | m         | True           | False          |
> | 12        | objwho          | center_embedding     | pl       | m        | sg      | m       | sg        | m         | True           | False          |
> | 12        | subjwho         | center_embedding     | pl       | m        | pl      | m       | pl        | m         | False          | False          |
> | 12        | subjwho         | center_embedding     | pl       | m        | sg      | m       | pl        | m         | False          | False          |
> | 12        | subjwho         | center_embedding     | pl       | m        | pl      | m       | sg        | m         | True           | False          |
> | 12        | subjwho         | center_embedding     | pl       | m        | sg      | m       | sg        | m         | True           | False          |
> | 12        | objwho          | center_embedding     | pl       | f        | pl      | f       | pl        | f         | False          | False          |
> | 12        | objwho          | center_embedding     | pl       | f        | sg      | f       | pl        | f         | False          | False          |
> | 12        | objwho          | center_embedding     | pl       | f        | pl      | f       | sg        | f         | True           | False          |
> | 12        | objwho          | center_embedding     | sg       | f        | pl      | f       | pl        | f         | True           | False          |
> | 12        | objwho          | center_embedding     | pl       | f        | sg      | f       | sg        | f         | True           | False          |
> | 12        | subjwho         | center_embedding     | pl       | f        | sg      | f       | pl        | f         | False          | False          |
> | 12        | subjwho         | center_embedding     | pl       | f        | pl      | f       | sg        | f         | True           | False          |
> | 12        | subjwho         | center_embedding     | pl       | f        | sg      | f       | sg        | f         | True           | False          |
> | 12        | objwho          | center_embedding     | sg       | m        | pl      | m       | pl        | m         | True           | False          |
> | 12        | objwho          | center_embedding     | sg       | m        | sg      | m       | pl        | m         | True           | False          |
> | 12        | objwho          | center_embedding     | sg       | m        | pl      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | center_embedding     | sg       | m        | sg      | m       | sg        | m         | False          | False          |
> | 12        | subjwho         | center_embedding     | sg       | m        | pl      | m       | pl        | m         | True           | False          |
> | 12        | subjwho         | center_embedding     | sg       | m        | sg      | m       | pl        | m         | True           | False          |
> | 12        | subjwho         | center_embedding     | sg       | m        | pl      | m       | sg        | m         | False          | False          |
> | 12        | subjwho         | center_embedding     | pl       | f        | pl      | f       | pl        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | m        | pl      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | peripheral           | pl       | m        | pl      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | center_embedding     | pl       | m        | pl      | m       | pl        | m         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | f        | pl      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | f        | pl      | f       | pl        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | m        | sg      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | f        | pl      | f       | sg        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | m        | sg      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | f        | sg      | f       | sg        | f         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | m        | sg      | m       | sg        | m         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | f        | pl      | f       | pl        | f         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | m        | sg      | m       | pl        | m         | False          | False          |
> | 12        | objwho          | peripheral           | sg       | f        | sg      | f       | pl        | f         | False          | False          |
> | 12        | subjwho         | peripheral           | sg       | f        | sg      | f       | pl        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | f        | pl      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | m        | sg      | m       | pl        | f         | True           | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | pl      | f       | pl        | f         | True           | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | pl      | m       | pl        | f         | True           | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | sg      | f       | pl        | m         | True           | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | pl      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | m        | pl      | f       | pl        | m         | True           | False          |
> | 36        | objwho          | center_embedding     | sg       | f        | pl      | f       | pl        | m         | True           | True           |
> | 36        | objwho          | peripheral           | sg       | f        | sg      | m       | pl        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | pl       | f        | sg      | m       | sg        | f         | True           | False          |
> | 36        | objwho          | peripheral           | sg       | f        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | center_embedding     | pl       | f        | pl      | m       | sg        | f         | True           | False          |
> | 36        | subjwho         | center_embedding     | pl       | f        | sg      | f       | sg        | m         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | f        | sg      | m       | sg        | m         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | f        | pl      | f       | sg        | m         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | f        | pl      | m       | sg        | m         | True           | True           |
> | 36        | objwho          | peripheral           | sg       | f        | sg      | m       | sg        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | pl       | f        | sg      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | m        | sg      | f       | pl        | f         | True           | True           |
> | 36        | objwho          | center_embedding     | sg       | f        | pl      | m       | pl        | m         | True           | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | pl      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | pl      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | m        | sg      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | m        | sg      | f       | pl        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | sg      | m       | pl        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | pl      | f       | pl        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | pl      | m       | sg        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | pl      | f       | sg        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | pl      | m       | pl        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | sg      | f       | pl        | m         | True           | False          |
> | 36        | subjwho         | center_embedding     | sg       | m        | pl      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | f        | pl      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | m        | sg      | m       | sg        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | sg      | f       | sg        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | sg      | m       | sg        | f         | False          | True           |
> | 36        | objwho          | peripheral           | sg       | f        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | m        | pl      | f       | sg        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | pl      | m       | sg        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | m        | sg      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | m        | sg      | f       | sg        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | sg       | m        | pl      | f       | pl        | m         | True           | False          |
> | 36        | subjwho         | center_embedding     | pl       | f        | pl      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | center_embedding     | pl       | f        | pl      | m       | pl        | m         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | f        | sg      | m       | pl        | m         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | sg      | f       | pl        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | sg      | m       | pl        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | pl      | f       | pl        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | pl      | m       | pl        | f         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | sg      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | f        | sg      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | pl       | m        | pl      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | m        | sg      | f       | sg        | f         | True           | True           |
> | 36        | objwho          | center_embedding     | pl       | m        | sg      | m       | sg        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | pl      | f       | sg        | m         | True           | False          |
> | 36        | objwho          | center_embedding     | pl       | m        | pl      | f       | sg        | f         | True           | True           |
> | 36        | objwho          | center_embedding     | pl       | m        | sg      | f       | sg        | m         | True           | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | sg      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | m        | pl      | f       | sg        | m         | True           | False          |
> | 36        | objwho          | center_embedding     | pl       | m        | sg      | f       | pl        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | m        | sg      | m       | pl        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | m        | pl      | f       | pl        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | m        | pl      | m       | pl        | f         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | m        | sg      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | sg      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | m        | pl      | m       | sg        | f         | True           | True           |
> | 36        | objwho          | peripheral           | sg       | f        | sg      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | pl       | m        | sg      | f       | sg        | m         | True           | False          |
> | 36        | subjwho         | center_embedding     | pl       | m        | pl      | m       | sg        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | f        | pl      | f       | pl        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | f        | sg      | m       | pl        | m         | True           | True           |
> | 36        | subjwho         | peripheral           | sg       | f        | sg      | m       | pl        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | f        | sg      | m       | sg        | f         | True           | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | sg      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | f        | pl      | m       | sg        | f         | True           | False          |
> | 36        | objwho          | center_embedding     | pl       | f        | sg      | f       | sg        | m         | True           | True           |
> | 36        | objwho          | center_embedding     | pl       | f        | sg      | m       | sg        | m         | True           | True           |
> | 36        | objwho          | center_embedding     | pl       | f        | pl      | f       | sg        | m         | True           | True           |
> | 36        | objwho          | center_embedding     | pl       | f        | pl      | m       | sg        | m         | True           | True           |
> | 36        | subjwho         | peripheral           | sg       | f        | sg      | m       | sg        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | f        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | f        | pl      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | f        | sg      | f       | pl        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | f        | sg      | m       | pl        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | f        | pl      | f       | pl        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | pl       | f        | pl      | m       | pl        | m         | False          | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | sg      | f       | sg        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | sg      | m       | sg        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | m        | pl      | f       | sg        | f         | True           | True           |
> | 36        | subjwho         | center_embedding     | pl       | f        | sg      | f       | pl        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | f        | sg      | f       | pl        | m         | True           | True           |
> | 36        | objwho          | peripheral           | sg       | m        | pl      | f       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | pl      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | pl      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | pl      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | sg      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | pl      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | pl      | m       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | pl      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | pl      | m       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | pl      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | pl      | m       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | pl      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | pl      | m       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | sg      | f       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | sg      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | sg      | f       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | sg      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | sg      | f       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | sg      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | sg      | f       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | sg      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | sg      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | sg      | m       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | sg      | m       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | pl      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | pl      | f       | pl        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | pl      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | pl      | f       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | pl      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | pl      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | pl      | f       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | pl      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | sg      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | sg      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | sg      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | sg      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | sg      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | sg      | m       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | f        | sg      | m       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | f        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | sg      | f       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | f        | sg      | m       | sg        | m         | False          | True           |
> | 36        | subjwho         | center_embedding     | sg       | f        | pl      | f       | sg        | m         | False          | True           |
> | 36        | subjwho         | center_embedding     | sg       | f        | pl      | m       | sg        | m         | False          | True           |
> | 36        | objwho          | peripheral           | sg       | f        | pl      | m       | sg        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | f        | sg      | m       | pl        | f         | True           | False          |
> | 36        | objwho          | peripheral           | sg       | f        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | f        | pl      | m       | pl        | f         | True           | False          |
> | 36        | subjwho         | center_embedding     | sg       | f        | sg      | f       | pl        | m         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | f        | sg      | m       | pl        | m         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | f        | pl      | f       | pl        | m         | True           | True           |
> | 36        | subjwho         | center_embedding     | sg       | f        | pl      | m       | pl        | m         | True           | True           |
> | 36        | subjwho         | peripheral           | sg       | f        | pl      | m       | pl        | m         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | f        | sg      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | f        | pl      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | f        | pl      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | f        | sg      | f       | sg        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | f        | sg      | m       | sg        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | f        | pl      | f       | sg        | m         | False          | True           |
> | 36        | objwho          | center_embedding     | sg       | f        | pl      | m       | sg        | m         | False          | True           |
> | 36        | subjwho         | peripheral           | sg       | f        | pl      | m       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | pl      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | f        | sg      | f       | sg        | m         | False          | True           |
> | 36        | subjwho         | center_embedding     | sg       | f        | pl      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | f        | pl      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | center_embedding     | sg       | f        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | sg      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | sg      | m       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | m        | sg      | f       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | sg      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | sg      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | pl      | f       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | pl      | f       | sg        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | pl      | f       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | pl      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | pl      | f       | sg        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | f        | pl      | m       | pl        | f         | True           | False          |
> | 36        | objwho          | peripheral           | pl       | m        | pl      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | pl      | f       | pl        | m         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | sg      | f       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | pl       | m        | pl      | m       | pl        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | sg      | f       | sg        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | pl      | m       | sg        | f         | False          | False          |
> | 36        | subjwho         | peripheral           | sg       | m        | sg      | f       | sg        | f         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | pl      | m       | pl        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | pl       | m        | pl      | f       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | sg       | f        | pl      | m       | pl        | m         | False          | False          |
> | 36        | objwho          | peripheral           | pl       | m        | pl      | f       | pl        | f         | False          | False          |
> | 36        | objwho          | center_embedding     | sg       | f        | sg      | m       | pl        | f         | True           | False          |

## Long range agreement
- 30k/30m samples for reasonable variability

> [!example]- Number of samples per feature combination
> Ignoring ZIPF and LEMMA
> 
> | n_samples | sentence_PP_attached | subj_NUM | subj_GEN | obj_NUM | obj_GEN | embedobj_NUM | embedobj_GEN | intervener_NUM | intervener_GEN |
> | --------- | -------------------- | -------- | -------- | ------- | ------- | ------------ | ------------ | -------------- | -------------- |
> | 24        | peripheral           | sg       | f        | sg      | f       | sg           | f            | False          | False          |
> | 24        | peripheral           | pl       | f        | sg      | f       | sg           | f            | False          | False          |
> | 24        | peripheral           | pl       | f        | sg      | f       | pl           | f            | False          | False          |
> | 24        | peripheral           | pl       | f        | pl      | f       | sg           | f            | False          | False          |
> | 24        | peripheral           | pl       | f        | pl      | f       | pl           | f            | False          | False          |
> | 24        | peripheral           | pl       | m        | sg      | m       | sg           | m            | False          | False          |
> | 24        | peripheral           | pl       | m        | sg      | m       | pl           | m            | False          | False          |
> | 24        | peripheral           | pl       | m        | pl      | m       | sg           | m            | False          | False          |
> | 24        | center_embedding     | sg       | f        | sg      | f       | sg           | f            | False          | False          |
> | 24        | center_embedding     | sg       | f        | pl      | f       | sg           | f            | False          | False          |
> | 24        | center_embedding     | sg       | f        | sg      | f       | pl           | f            | True           | False          |
> | 24        | peripheral           | sg       | m        | pl      | m       | pl           | m            | False          | False          |
> | 24        | center_embedding     | sg       | f        | pl      | f       | pl           | f            | True           | False          |
> | 24        | center_embedding     | sg       | m        | pl      | m       | sg           | m            | False          | False          |
> | 24        | center_embedding     | sg       | m        | sg      | m       | pl           | m            | True           | False          |
> | 24        | center_embedding     | sg       | m        | pl      | m       | pl           | m            | True           | False          |
> | 24        | center_embedding     | pl       | f        | sg      | f       | sg           | f            | True           | False          |
> | 24        | center_embedding     | pl       | f        | pl      | f       | sg           | f            | True           | False          |
> | 24        | center_embedding     | pl       | f        | sg      | f       | pl           | f            | False          | False          |
> | 24        | center_embedding     | pl       | f        | pl      | f       | pl           | f            | False          | False          |
> | 24        | center_embedding     | pl       | m        | sg      | m       | sg           | m            | True           | False          |
> | 24        | center_embedding     | pl       | m        | pl      | m       | sg           | m            | True           | False          |
> | 24        | center_embedding     | pl       | m        | sg      | m       | pl           | m            | False          | False          |
> | 24        | center_embedding     | sg       | m        | sg      | m       | sg           | m            | False          | False          |
> | 24        | peripheral           | sg       | m        | pl      | m       | sg           | m            | False          | False          |
> | 24        | peripheral           | pl       | m        | pl      | m       | pl           | m            | False          | False          |
> | 24        | center_embedding     | pl       | m        | pl      | m       | pl           | m            | False          | False          |
> | 24        | peripheral           | sg       | m        | sg      | m       | pl           | m            | False          | False          |
> | 24        | peripheral           | sg       | f        | pl      | f       | sg           | f            | False          | False          |
> | 24        | peripheral           | sg       | m        | sg      | m       | sg           | m            | False          | False          |
> | 24        | peripheral           | sg       | f        | sg      | f       | pl           | f            | False          | False          |
> | 24        | peripheral           | sg       | f        | pl      | f       | pl           | f            | False          | False          |
> | 72        | center_embedding     | pl       | f        | pl      | m       | sg           | f            | True           | False          |
> | 72        | peripheral           | sg       | f        | sg      | m       | pl           | f            | False          | False          |
> | 72        | center_embedding     | pl       | f        | sg      | m       | sg           | f            | True           | False          |
> | 72        | peripheral           | sg       | f        | sg      | m       | pl           | m            | False          | False          |
> | 72        | center_embedding     | sg       | m        | pl      | f       | pl           | m            | True           | False          |
> | 72        | peripheral           | sg       | f        | pl      | f       | sg           | m            | False          | False          |
> | 72        | center_embedding     | sg       | m        | sg      | f       | pl           | m            | True           | False          |
> | 72        | center_embedding     | sg       | m        | pl      | m       | pl           | f            | True           | True           |
> | 72        | center_embedding     | sg       | m        | sg      | f       | pl           | f            | True           | True           |
> | 72        | center_embedding     | sg       | m        | sg      | m       | pl           | f            | True           | True           |
> | 72        | center_embedding     | pl       | f        | sg      | f       | sg           | m            | True           | True           |
> | 72        | center_embedding     | sg       | m        | pl      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | sg       | f        | pl      | f       | pl           | m            | False          | False          |
> | 72        | center_embedding     | sg       | m        | sg      | f       | sg           | m            | False          | False          |
> | 72        | center_embedding     | sg       | m        | pl      | m       | sg           | f            | False          | True           |
> | 72        | center_embedding     | sg       | m        | pl      | f       | sg           | f            | False          | True           |
> | 72        | center_embedding     | sg       | m        | sg      | m       | sg           | f            | False          | True           |
> | 72        | center_embedding     | sg       | m        | sg      | f       | sg           | f            | False          | True           |
> | 72        | center_embedding     | sg       | m        | pl      | f       | pl           | f            | True           | True           |
> | 72        | center_embedding     | pl       | f        | sg      | m       | sg           | m            | True           | True           |
> | 72        | center_embedding     | pl       | f        | pl      | m       | sg           | m            | True           | True           |
> | 72        | center_embedding     | sg       | f        | pl      | m       | pl           | m            | True           | True           |
> | 72        | peripheral           | sg       | f        | sg      | f       | sg           | m            | False          | False          |
> | 72        | center_embedding     | pl       | m        | sg      | f       | pl           | m            | False          | False          |
> | 72        | center_embedding     | pl       | m        | pl      | m       | pl           | f            | False          | True           |
> | 72        | center_embedding     | pl       | m        | pl      | f       | pl           | f            | False          | True           |
> | 72        | center_embedding     | pl       | m        | sg      | m       | pl           | f            | False          | True           |
> | 72        | center_embedding     | pl       | m        | sg      | f       | pl           | f            | False          | True           |
> | 72        | center_embedding     | pl       | m        | pl      | f       | sg           | m            | True           | False          |
> | 72        | peripheral           | sg       | f        | sg      | f       | pl           | m            | False          | False          |
> | 72        | center_embedding     | pl       | m        | sg      | f       | sg           | m            | True           | False          |
> | 72        | center_embedding     | pl       | m        | pl      | m       | sg           | f            | True           | True           |
> | 72        | center_embedding     | pl       | m        | pl      | f       | sg           | f            | True           | True           |
> | 72        | center_embedding     | pl       | m        | sg      | m       | sg           | f            | True           | True           |
> | 72        | center_embedding     | pl       | m        | sg      | f       | sg           | f            | True           | True           |
> | 72        | center_embedding     | pl       | f        | pl      | m       | pl           | m            | False          | True           |
> | 72        | center_embedding     | pl       | f        | pl      | f       | pl           | m            | False          | True           |
> | 72        | center_embedding     | pl       | f        | sg      | m       | pl           | m            | False          | True           |
> | 72        | center_embedding     | pl       | f        | sg      | f       | pl           | m            | False          | True           |
> | 72        | center_embedding     | pl       | f        | pl      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | f        | sg      | m       | sg           | f            | False          | False          |
> | 72        | center_embedding     | pl       | f        | sg      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | f        | sg      | m       | sg           | m            | False          | False          |
> | 72        | center_embedding     | pl       | f        | pl      | f       | sg           | m            | True           | True           |
> | 72        | center_embedding     | sg       | f        | pl      | f       | pl           | m            | True           | True           |
> | 72        | peripheral           | sg       | m        | pl      | f       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | pl      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | sg      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | sg      | f       | sg           | f            | False          | False          |
> | 72        | peripheral           | pl       | f        | pl      | m       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | f        | pl      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | pl       | f        | pl      | m       | sg           | m            | False          | False          |
> | 72        | peripheral           | pl       | f        | pl      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | pl       | f        | pl      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | sg       | m        | sg      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | f        | pl      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | sg       | m        | sg      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | pl       | f        | sg      | m       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | f        | sg      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | pl       | f        | sg      | m       | sg           | m            | False          | False          |
> | 72        | peripheral           | pl       | f        | sg      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | pl       | f        | sg      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | f        | sg      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | sg       | m        | sg      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | pl      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | pl      | f       | sg           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | pl      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | pl      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | sg      | f       | pl           | f            | False          | False          |
> | 72        | peripheral           | pl       | m        | sg      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | sg      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | sg      | f       | pl           | f            | False          | False          |
> | 72        | center_embedding     | sg       | f        | pl      | m       | pl           | f            | True           | False          |
> | 72        | peripheral           | sg       | f        | pl      | m       | sg           | f            | False          | False          |
> | 72        | center_embedding     | sg       | f        | sg      | m       | pl           | f            | True           | False          |
> | 72        | peripheral           | sg       | f        | pl      | m       | sg           | m            | False          | False          |
> | 72        | center_embedding     | sg       | f        | pl      | m       | sg           | m            | False          | True           |
> | 72        | center_embedding     | sg       | f        | pl      | f       | sg           | m            | False          | True           |
> | 72        | center_embedding     | sg       | f        | sg      | m       | sg           | m            | False          | True           |
> | 72        | center_embedding     | sg       | f        | sg      | f       | sg           | m            | False          | True           |
> | 72        | center_embedding     | sg       | f        | pl      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | sg       | f        | pl      | m       | pl           | f            | False          | False          |
> | 72        | center_embedding     | sg       | f        | sg      | m       | pl           | m            | True           | True           |
> | 72        | center_embedding     | sg       | f        | sg      | m       | sg           | f            | False          | False          |
> | 72        | center_embedding     | pl       | m        | pl      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | pl      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | sg      | f       | sg           | f            | False          | False          |
> | 72        | peripheral           | pl       | m        | pl      | m       | sg           | f            | False          | False          |
> | 72        | peripheral           | pl       | m        | pl      | f       | pl           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | pl      | f       | pl           | f            | False          | False          |
> | 72        | peripheral           | pl       | m        | pl      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | pl      | f       | sg           | f            | False          | False          |
> | 72        | peripheral           | sg       | m        | sg      | f       | sg           | m            | False          | False          |
> | 72        | peripheral           | pl       | m        | sg      | m       | pl           | f            | False          | False          |
> | 72        | peripheral           | sg       | f        | pl      | m       | pl           | m            | False          | False          |
> | 72        | center_embedding     | sg       | f        | sg      | f       | pl           | m            | True           | True           |

## Large
- NaN/5m samples for reasonable variability
