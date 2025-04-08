---
createdDate: 2025-04-04
publish: false
tags: 
project:
  - Decoding
type:
  - answer
originalReviewer: 
cycle: CCN2025
deadline: 2025-04-14
reviewStatus: to do
---
[[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf]]


# Reviewer FNFW

> [!PDF|important] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=52,0,56,32&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > it is not clear what they think the largest impact of the paper is. Is it the performance of their decoder? If so, it would be helpful to compare their performance to previously published decoders. Is the implication that more data per subject is more important for decodability than more subjects? If so, the authors should more clearly state the implications in experimental design for experimentalists. This is already done in the discussion to some extent but could be emphasized more clearly

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=58,0,63,91&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > The authors note that combining data across subjects does not improve the performance of the decoder. Do they think that this could be related to their voxel selection procedure that is agnostic to anatomical or functional regions within subject? What steps do the authors think would be required to better model intersubject variability?

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=65,0,67,32&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > The authors report differences in content and style between stories that are well and poorly decoded. It could potentially increase the impact if the authors made connections between this and the kind of data that would be helpful to collect in the future

Our results suggest that simpler sentences with direct speech are easier to decode than narration with complex syntax. However this does not tell us which kind of sentences are the most useful to train on to reach good performance. We leave analyzing such an impact as future work, the data we have is not labeled to do training split of simple/complex sentences.****

> [!PDF|note] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=71,0,72,30&color=note|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > Supplemental Figure 7 is not referenced in the main text, and I don’t completely follow what is shown. Some additional context here would be helpful.
> 
> 
# Reviewer DGVM

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=126,0,129,108&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > In the Introduction, the authors state that "one major challenge is that such decoders **do not generalize well to left-out participants**," presenting this as a key issue in the research context. However, it seems that the results of this study do not actually address or resolve this issue. The representations learned through contrastive learning still appear to be strongly influenced by individual differences, with only limited shared components across participants. **Although this point is discussed in the Discussion section, the Introduction gives readers the impression that the proposed method will offer a solution to this problem.** For this reason, I think the clarity of the manuscript could be improved.

> [!PDF|important] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=4,0,6,36&color=important|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> > While the authors conduct various ablation studies within their contrastive learning framework, there is no comparison with other machine learning methods. As such, it remains unclear whether the proposed contrastive learning approach is indeed optimal.
> 
> 

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=8,0,11,60&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> > Regarding the impact of syntax and semantics, I found the results of the qualitative analysis intriguing. However, I am not fully convinced by the authors’ claim that these findings reflect only the superficial aspects of language processing. It seems possible that, beyond syntactic or semantic complexity, there may also be differences in contextual information contributing to the observed effects.
> 
> 


> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=13,0,15,29&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> > Recently, many pre-trained LLMs have been proposed, and their performance varies largely across models. It would be better if the authors used more LLMs for the contrastive learning with embedding vectors to provide a more comprehensive assessment

Indeed the choice of the pretrained LLM is critical to get the richest text representations, or at least the ones that can be best differentiated between using brain data. Because of the requirement of fixed sized representations of our approach, we need to apply pooling (average in our case) on the token dimension. For this task we observed that causal LLM (like GPTs) yield poorer representations compared to masked ones (like BERTs). Taking into consideration this pooling constraint, we explored models from the (volatile) [Massive Text Embedding Benchmark leaderboard](https://huggingface.co/spaces/mteb/leaderboard) which comprises multiple sentence/text level tasks. Therefore the best models on this leaderboard are trained to compute pooled representations. We hoped that with such objective the representations would be more interesting for our task and the best we found were the [LLM2Vec](https://arxiv.org/abs/2404.05961) models.

# Reviewer 8RE5

# Reviewer MfAX