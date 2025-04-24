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
project: []
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


![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=2&rect=48,66,295,125&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.2]]
![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 1.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=2&rect=299,423,548,497&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.2]]
![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 2.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=3&rect=47,351,297,402&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.3]]
![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 3.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=3&rect=299,136,547,301&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.3]]
![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 4.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=4&rect=46,387,298,731&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.4]]

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=4&selection=300,0,327,2&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.4]]
> > Preliminaries We define ¯Γ to be the space of differences between elements of Γ. Then, ¯Γ is a d-dimensional real vector space.1 We consider defining inner products on ¯Γ. 

![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 5.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=4&rect=300,255,549,331&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.4]]
![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 6.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=4&rect=299,103,548,225&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.4]]

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&selection=77,5,77,46&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]
> > An Explicit Form for Causal Inner Product

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&selection=87,26,98,10&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]
> > a more tractable approach based on the following insight: knowing the value of concept W expressed by a randomly chosen word tells us little about the value of a causally separable concept Z expressed by that word.

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&selection=105,0,160,14&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]
> > Assumption 3.3. Suppose W, Z are causally separable concepts and that γ is an unembedding vector sampled uniformly from the vocabulary. Then, ¯λ⊤ W γ and ¯λ⊤ Z γ are independent3 for any embedding representations ¯λW and ¯λZ for W and Z, respectively

![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 7.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&rect=299,593,548,733&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&selection=314,0,346,43&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]
> > Notice that causal orthogonality only imposes d(d − 1)/2 constraints on the inner product, but there are d(d−1)/2+d degrees of freedom in identifying the positive definite matrix M (hence, an inner product)—thus, we expect d degrees of freedom in choosing a causal inner product.

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&selection=370,12,390,1&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]
> >  we will work with the choice D = Id, which gives us M = Cov(γ)−1.

![[Attachments/Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models 8.webp]]

[[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=5&rect=322,418,506,446&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.5]]

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=6&selection=102,55,142,0&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.6]]
> >  for each concept W , we look at how the direction defined by each counterfactual pair, γ(yi(1)) − γ(yi(0)), is geometrically aligned with the unembedding representation ¯γW . We estimate ¯γW as the (normalized) mean5 among all counterfactual pairs:

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=587,0,599,61&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > Theorem 2.5 predicts that adding ¯λW to a context representation should increase the probability of W , while leaving the probability of all causally separable concepts unaltered.

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=813,35,827,47&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > see if the intervention in a concept direction (for W ) pushes the probability of Y (W = 1) being the next word to be the largest among all



# Data (purple)

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=6&selection=12,8,13,43&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.6]]
> > We consider 22 concepts defined in the Big Analogy Test Set (BATS 3.0) (Gladkova et al., 2016)
> 
> Potentially relevant dataset for [[MLEM]]

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=215,2,217,37&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > To construct a dataset of French and Spanish contexts, we sample contexts of random lengths from Wikipedia pages in each language

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=600,0,700,1&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > To test this for a given pair of causally separable concepts W and Z, we first choose a quadruple {Y (w, z)}w,z∈{0,1}, and then generate contexts {xj } such that the next word should be Y (0, 0). For example, if W = male⇒female and Z = lower⇒upper, then we choose the quadruple (“king”, “queen”, “King”, “Queen”), and generate contexts using ChatGPT-4 (e.g., “Long live the”). We then intervene on λ(xj ) using ¯λC via λC,α(xj ) = λ(xj ) + α¯λC , 

> [!PDF|important] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=8&selection=187,0,192,40&color=important|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.8]]
> > tokens. We expect to see that, as we increase the value of α, the target concept should eventually be reflected in the most likely output words according to the LM.



# Results (red)

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=2&selection=159,43,161,41&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.2]]
> >  we prove that the unembedding notion connects to measurement, and the embedding notion to intervention.

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=6&selection=5,0,7,0&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.6]]
> > Concepts are represented as directions in the unembedding space

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=6&selection=599,0,600,57&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.6]]
> > Causally separable concepts are represented approximately orthogonally under the estimated causal inner prod

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=6&selection=643,0,643,56&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.6]]
> > The estimated inner product respects causal separability

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=198,0,198,39&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > Concept directions act as linear probes

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=222,45,264,1&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > we expect ¯γ⊤ W λ(xfr j ) < 0 and ¯γ⊤ W λ(xes j ) > 0.

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=295,0,295,54&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > Concept directions map to intervention representations

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=7&selection=409,0,437,1&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.7]]
> > Adding α¯λC to λ changes the target concept C without changing off-target concepts. 

> [!PDF|red] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=8&selection=227,19,253,26&color=red|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.8]]
> > s we increase the scale α on the intervention, we see that the target word Y (W = 1) (“queen”) becomes the most likely next word, while the original word Y (W = 0) drops below the top-5 list
> 
> 

# Discussion (blue)

> [!PDF|note] [[Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models.pdf#page=1&selection=79,0,153,50&color=note|Park et al. 2023 - The Linear Representation Hypothesis and the Geometry of Large Language Models, p.1]]
> > The first challenge is that it is not clear what “linear representation” means. There are (at least) three interpretations: 1. Subspace: (e.g., Mikolov et al., 2013c; Pennington et al., 2014) The first idea is that each concept is represented as a (1-dimensional) subspace. For example, in the context of word embeddings, it has been argued empirically that Rep(“woman”) − Rep(“man”), Rep(“queen”) − Rep(“king”), and all similar pairs belong to a common subspace (Mikolov et al., 2013c). Then, it is natural to take this subspace to be a representation of the concept of Male/Female. 2. Measurement: (e.g., Nanda et al., 2023; Gurnee & Tegmark, 2023) Next is the idea that the probability of a concept value can be measured with a linear probe. For example, the probability that the output language is French is logit-linear in the representation of the input. In this case, we can take the linear map to be a representation of the concept of English/French. 3. Intervention: (e.g., Wang et al., 2023; Turner et al., 2023) The final idea is that the value a concept takes on can be changed, without changing other concepts, by adding a suitable steering vector—e.g., we change the output from English to French by adding an English/French vector. In this case, we take this added vector to be a representation of the concept


# Questions

