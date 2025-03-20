---
createdDate: 2025-03-20
publish: true
tags:
  - Optimization
  - SPD
project:
  - MLEM
type:
  - Outline
---
# Optimization over the manifold of Symmetric Positive Definite Matrices $\mathbb{S}^{++}_n$

## Reminder
We have a set of $n$ stimuli $s_i$ for $i$ in $[1,n]$.

> [!example] Feature distances
> We have $F$ *theoretical features* $(f_k)$ for $k$ in $[1,F]$
> Let $f_k(s_i)$ denote the value of feature $f_k$ for the stimuli $s_i$
> We define the <font color="#ff0000">pairwise feature distance</font> $D^k_{ij}$ between stimuli $s_i$ and $s_j$ for feature $f_k$ as
> - $D^k_{ij} := \mathbb{1}[f_k(s_i) = f_k(s_j)]$ if $f_k$ is nominal (unordered categories)
> - $D^k_{ij} := |f_k(s_i) - f_k(s_j)|$ if $f_k$ is continuous or ordinal (ordered categories)
> Then for each pair of stimuli $s_i, s_j$, we define a vector of differing features $\Delta_{ij} = [D^k_{ij}]_{k \in [1,F]} \in \mathbb{R}^F$

> [!example] Neural distances
> We have $h$-dimensional *neural representations* of each stimuli, $R_i \in \mathbb{R}^h$ is the neural representation of $s_i$
> We define the <font color="#ff0000">pairwise neural distance</font> $D^n_{ij}$ between stimuli $s_i$ and $s_j$ as $D^n_{ij} := d(R_i,R_j)$ for $d$ being for instance the euclidean or cosine distance

> [!important] Optimization problem
> We want to learn a weighted norm $||\bullet ||_W$ that brings 

