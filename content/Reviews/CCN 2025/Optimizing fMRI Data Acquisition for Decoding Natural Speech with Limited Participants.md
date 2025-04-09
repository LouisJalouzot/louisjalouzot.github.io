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


# General answer to comparison to models from the literature

Several reviewers have requested comparisons to other models in the literature. Our approach differs fundamentally from recent works in brain decoding in several important ways:

1. **Task framing**: Our work focuses on decoding text chunks directly from fMRI data. This differs from approaches like Tang et al., which use a generative process where they produce random sentences, feed them to a pre-trained encoder, select those whose encoding best fits the brain signal, and repeat this process for subsequent tokens.

2. **Time resolution constraints**: The limited temporal resolution of our fMRI data (2-second chunks) prevents us from attempting word-level decoding like recent work from Meta's Brain & AI team. This fundamental constraint makes direct comparisons methodologically problematic.

3. **Metric clarity**: We report metrics that directly assess our decoding model's performance rather than evaluating downstream applications (like feeding predicted embeddings to generative models). When evaluations are based on generated text, it becomes difficult to determine whether performance gains or losses stem from the decoding model or the subsequent generative process.

4. **Attempted extensions**: We explored using our predicted language embeddings with generative models, but the results were unsatisfactory. The 2-second chunk resolution creates an ill-posed problem for text generation tasks.

We believe our reported metrics on decoded embeddings provide more informative and interpretable results given these constraints. The primary contribution of our work is not claiming state-of-the-art performance compared to systems with different experimental designs, but rather identifying optimal data acquisition strategies for limited-participant studies.

# Reviewer FNFW

> [!PDF|important] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=52,0,56,32&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > it is not clear what they think the largest impact of the paper is. Is it the performance of their decoder? If so, it would be helpful to compare their performance to previously published decoders. Is the implication that more data per subject is more important for decodability than more subjects? If so, the authors should more clearly state the implications in experimental design for experimentalists. This is already done in the discussion to some extent but could be emphasized more clearly

c.f. general answer

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=58,0,63,91&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > The authors note that combining data across subjects does not improve the performance of the decoder. Do they think that this could be related to their voxel selection procedure that is agnostic to anatomical or functional regions within subject? What steps do the authors think would be required to better model intersubject variability?

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=65,0,67,32&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > The authors report differences in content and style between stories that are well and poorly decoded. It could potentially increase the impact if the authors made connections between this and the kind of data that would be helpful to collect in the future

Our results suggest that simpler sentences with direct speech are easier to decode than narration with complex syntax. However this does not tell us which kind of sentences are the most useful to train on to reach good performance. We leave analyzing such an impact as future work, the data we have is not labeled to do training split of simple/complex sentences

> [!PDF|note] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=71,0,72,30&color=note|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > Supplemental Figure 7 is not referenced in the main text, and I don’t completely follow what is shown. Some additional context here would be helpful.
> 
> 

**We will improve this Figure (see answer to reviewer MfAX) and reference it in the main text.**

# Reviewer DGVM

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=2&selection=126,0,129,108&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.2]]
> > In the Introduction, the authors state that "one major challenge is that such decoders **do not generalize well to left-out participants**," presenting this as a key issue in the research context. However, it seems that the results of this study do not actually address or resolve this issue. The representations learned through contrastive learning still appear to be strongly influenced by individual differences, with only limited shared components across participants. **Although this point is discussed in the Discussion section, the Introduction gives readers the impression that the proposed method will offer a solution to this problem.** For this reason, I think the clarity of the manuscript could be improved.

> [!PDF|important] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=4,0,6,36&color=important|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> > While the authors conduct various ablation studies within their contrastive learning framework, there is no comparison with other machine learning methods. As such, it remains unclear whether the proposed contrastive learning approach is indeed optimal.
> 
> 

c.f. general answer

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=8,0,11,60&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> > Regarding the impact of syntax and semantics, I found the results of the qualitative analysis intriguing. However, I am not fully convinced by the authors’ claim that these findings reflect only the superficial aspects of language processing. It seems possible that, beyond syntactic or semantic complexity, there may also be differences in contextual information contributing to the observed effects.
> 
> 


> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=13,0,15,29&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> > Recently, many pre-trained LLMs have been proposed, and their performance varies largely across models. It would be better if the authors used more LLMs for the contrastive learning with embedding vectors to provide a more comprehensive assessment

Indeed the choice of the pretrained LLM is critical to get the richest text representations, or at least the ones that can be best differentiated between using brain data. Because of the requirement of fixed sized representations of our approach, we need to apply pooling (average in our case) on the token dimension. For this task we observed that causal LLM (like GPTs) yield poorer representations compared to masked ones (like BERTs). Taking into consideration this pooling constraint, we explored models from the (volatile) [Massive Text Embedding Benchmark leaderboard](https://huggingface.co/spaces/mteb/leaderboard) which comprises multiple sentence/text level tasks. Therefore the best models on this leaderboard are trained to compute pooled representations. We hoped that with such objective the representations would be more interesting for our task and the best we found were the [LLM2Vec](https://arxiv.org/abs/2404.05961) models.

# Reviewer 8RE5


> [!PDF|red] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=76,79,77,12&color=red|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> >  from fMRI data acquired from 4 participants

4??

> [!PDF|important] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=3&selection=80,94,82,22&color=important|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.3]]
> >  it may be crucial to first evaluate the decoding performance by comparing the results with those of other models employing similar approaches or datasets

c.f. general answer

# Reviewer MfAX

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=4&selection=55,0,58,38&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.4]]
> > Despite normalization (and it might be useful to see this unnormalized results), this is still something of an apples-tooranges comparison, since it depends strongly on how cleanly GloVe and Levenshtein distance on PoS tagging, respectively, read out semantic and syntactic similarity. I would be reluctant to make any strong inferences from these plots, which anyway are quite similar.


> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=4&selection=62,0,63,113&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.4]]
> > Top-10 accuracy (the main metric in the paper) is arbitrary. It would be nice to see cross entropy (i.e., normalize the inner products to get probabilities; report -log p_model(correct chunk), averaged over all test data) in addition

Should we? We don't have other models to compare to and top 10 accuracy is more interpretable.

> [!PDF|note] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=4&selection=67,0,75,20&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.4]]
> > I also find Fig. 7 (Supplement) somewhat surprising---and potentially very important. Nearly all (38/40) of the top four candidates for the ten consecutive text chunks shown are from among those ten text chunks. Indeed, the top four candidates are almost always within one or two chunks of the correct chunk. On the one hand, this example can't be very representative of the data, because even for this subject (3), the top-10 accuracy is only ~35% (Fig. 2), whereas in Fig. 7 the top-10 accuracy is 100%. But on the other hand, at least in this segment of the data, the errors all appear to be caused by the temporal smoothing of the data. After all, the semantic and syntactic content of these chunks are not terribly similar; what these chunks have in common is mostly that they are near each other.
> 
> 

**I'll look for other segments with hopefully more interesting chunks (e.g. candidates with high semantic/syntax similarities to the ground-truth without 100% top-10).**
@Alexis: As previously discussed, should we add to the limitations section that a potential confound of our metrics is the autocorrelation both on the input (brain images) and output (text embeddings) induced by the temporal fMRI smoothing and the text contextualization. Note that I observed decent performance when pooling the embeddings only on the token of a chunk and not those of its prior context (while still being used for the computation of the embeddings). 

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=4&selection=77,0,84,25&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.4]]
> > Is this type of error typical?? If so, then the reported results are perhaps underestimating model accuracy. To determine this, one could look at (say) a different sort of (e.g.) top-10 accuracy, in which one asks how often the top-1 candidate is within (say) +/-5 chunks of the chunk under consideration. Because of autocorrelations in semantic and syntactic content, this measure is not perfect, but would anyway give some indication of how much of the error is due simply to poor temporal resolution.

I wonder what to say here. This would be even more arbitrary than top-10 and be very sensitive to the smoothing and context size used.

> [!PDF|yellow] [[Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants.pdf#page=5&selection=0,0,0,71&color=yellow|Optimizing fMRI Data Acquisition for Decoding Natural Speech with Limited Participants, p.5]]
> > How much time does this correspond to? Is it 4 x 2 seconds = 8 seconds?

Yes