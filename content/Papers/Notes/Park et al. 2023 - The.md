---
title: Park et al. 2023 - The
paperTitle: The Linear Representation Hypothesis and the Geometry of Large Language Models
authors:
  - Park, Kiho,Choe, Yo Joong,Veitch, Victor
publish: true
cssclasses:
  - list-cards
type:
  - annotation
project: 
tags:
  - Representations/Linear
  - LLM/Llama
status: read
progress: annotated
---
# Annotation for [Park et al. 2023 - The](Papers/References/Park%20et%20al.%202023%20-%20The)

> [!abstract] The Linear Representation Hypothesis and the Geometry of Large Language Models

> [!example]- Authors
> - [Park, Kiho](Park%2C%20Kiho)
> - [Choe, Yo Joong](Choe%2C%20Yo%20Joong)
> - [Veitch, Victor](Veitch%2C%20Victor)

**Year:** 2023
**DOI:** 10.48550/ARXIV.2311.03658
**URL:** https://arxiv.org/abs/2311.03658
**PDF:** [Park et al. 2023 - The](Papers/PDFs/Park%20et%20al.%202023%20-%20The%20Linear%20Representation%20Hypothesis%20and%20the%20Geometry%20of%20Large%20Language%20Models.pdf)

# Highlights

Big problem is that if each concept is represented as a direction, this means that only 4096 concepts (e.g. for Llama2) can be represented at the last layer to feed in the MLP to predict the next word. This is in contradiction with the fact that LLMs can manipulate much more concepts than that.
To alleviate that, it might be necessary to have *soft* constraints. E.g. $|<W,Y>_C|<10^{-6}$ to align with the fact that the number of *almost* orthogonal vectors you can fit in a vectorial space grows exponentially with the dimension (c.f. [[Concentration of Measure]]) and that LLM likely leverage that.
Also in contradiction with onion representations in small LLMs from [[Papers/Notes/Csordás et al. 2024 - Recurrent|Csordás et al. 2024 - Recurrent]]

# Goal (yellow)

> [!PDF|yellow] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=1&selection=25,17,30,36&color=yellow|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.1]]
> > we use the language of counterfactuals to give two formalizations of linear representation, one in the output (word) representation space, and one in the input (context) space. We then prove that these connect to linear probing and model steering, respectively
> 
> 

> [!PDF|yellow] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=1&selection=31,38,33,46&color=yellow|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.1]]
> >  formalization to identify a particular (non-Euclidean) inner product that respects language structure

> [!PDF|yellow] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=1&selection=38,16,39,17&color=yellow|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.1]]
> >  unify all notions of linear representatio

> [!PDF|yellow] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=1&selection=41,38,43,19&color=yellow|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.1]]
> >  LLaMA- 2 demonstrate the existence of linear representations of concepts


# Method (purple)

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=2&selection=156,0,157,43&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.2]]
> > First, we formalize the subspace notion of linear representation in terms of counterfactual pair

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=2&selection=164,0,174,40&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.2]]
> > Next, we introduce the notion of a causal inner product: an inner product with the property that concepts that can vary freely of each other are represented as orthogonal vectors. We show that such an inner product has the special property that it unifies the embedding and unembedding representations, as illustrated in Figure 1. Additionally, we show how to estimate the inner product using the LLM unembedding matrix
> 
> 

# Data (purple)


# Results (red)

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=2&selection=159,43,161,41&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.2]]
> >  we prove that the unembedding notion connects to measurement, and the embedding notion to intervention.

# Discussion (blue)

> [!PDF|note] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=1&selection=79,0,153,50&color=note|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.1]]
> > The first challenge is that it is not clear what “linear representation” means. There are (at least) three interpretations: 1. Subspace: (e.g., Mikolov et al., 2013c; Pennington et al., 2014) The first idea is that each concept is represented as a (1-dimensional) subspace. For example, in the context of word embeddings, it has been argued empirically that Rep(“woman”) − Rep(“man”), Rep(“queen”) − Rep(“king”), and all similar pairs belong to a common subspace (Mikolov et al., 2013c). Then, it is natural to take this subspace to be a representation of the concept of Male/Female. 2. Measurement: (e.g., Nanda et al., 2023; Gurnee & Tegmark, 2023) Next is the idea that the probability of a concept value can be measured with a linear probe. For example, the probability that the output language is French is logit-linear in the representation of the input. In this case, we can take the linear map to be a representation of the concept of English/French. 3. Intervention: (e.g., Wang et al., 2023; Turner et al., 2023) The final idea is that the value a concept takes on can be changed, without changing other concepts, by adding a suitable steering vector—e.g., we change the output from English to French by adding an English/French vector. In this case, we take this added vector to be a representation of the concept


# Questions

