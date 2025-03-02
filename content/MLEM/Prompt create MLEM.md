---
project: MLEM
tags:
  - prompt
  - python
  - MLEM
---
I have datasets as csv files in the directory `datasets`. They contain a column `sentence` and other *feature* columns which are discrete or continuous and characterize the sentence. We will consider datasets at the *sentence-level* but also at the *word-level* when we have one row per word and columns `word` and `index` (indicating the index of the word in the sentence). The latter datasets still have a `sentence` column which is therefore duplicated.
Please build a full python pipeline implementing *Metric Learning Encoding Models* (MLEMs). They work as follows:

> [!note] Pipeline description
> Given a dataset, an LLM and a target set of units in the LLM (e.g. an entire layer) it does the following:
> - Compute the *representation* of the LLM of each sentence
> 	- The representation of a sentence is the activation of the LLM for the target set of units
> 	- For sentence-level datasets, activations need to be aggregated on the token dimension and it should be possible to choose this aggregation (min, max, mean, first, last)
> - Then compute *neural* and *feature pairwise distances*
> 	- Compute the distance between the representations of each pair of sentences/words $D^N_{ij}$
> 		- It should be possible to choose the distance, defaulting to euclidean
> 	- Compute the *distances* between each pair of sentences/words with respect to each feature in the dataset
> 		- Beware that features can be discrete or continuous and for some sentences/words, features can be unspecified (NaN value)
> 		- Therefore for each pair we get a *feature distance vector*, vector of distances for each feature $D^F_{ij} = [D^f_{ij}]_f$
> - Then learn a symmetric positive definite matrix $W$ which will parameterize a norm on the feature distance vectors
> 	- It should be optimized so that $||D^F_{ij}||_{W} = D^F_{ij} W D^F_{ij}$ is as close as possible to $D^N_{ij}$ (for the MSE
> - Then compute *Permutation Feature Importance* on the Spearman correlation
> 	- Therefore data should be split into train/test using cross validation on the sentences stratified with respect to their features
> 	- Also output the average Feature Importances found and add significance testing
> - Also project the sentence representations in 2D using UMAP

Write simple, elegant and efficient code.
It should leverage caching.
It should be straightforward to launch the code on SLURM clusters.
If I want to launch multiple experiments, the code should compute the dependency tree of all the functions for those experiments and optimize scheduling and avoid redundancy.