---
createdDate: 2025-03-16
publish: false
tags: 
project: 
type:
  - review
originalReviewer: Emmanuel Chemla
cycle: ACL2025
deadline: 2025-03-23
reviewStatus: done
filename: Reviews/ACL2025/Analyze the Neurons not the Embeddings.pdf
---
# Paper summary
> *Describe what this paper is about. This should help the program and area chairs to understand the topic of the work and highlight any possible misunderstandings.*
> *Maximum length 20000 characters.*

- The authors use a method from the literature to identify *expert neurons*, neurons that encode a specific concept. For a given concept, it consists in recording the activity of a neuron on sentences which are *positive* to the concept, i.e. related to or describing it, and *negative* ones. Then its activity is seen as a classifier for the positiveness of the sentences and the neuron is considered *expert* if it has performance above a chosen threshold $\tau$ as a classifier in terms of Area Under the Precision-Recall Curve. The sets of positive and negative sentences are LLM-generated. The prompts ask the sentences to be related to a given concept and to avoid another one. Diversity is ensured by having 2 types of prompts, one for factual sentences and another one for story-like ones.
- The first experiment aims at evaluating the stability of the method by measuring the overlap of identified expert neurons from GPT2 across different folds of generated sentences. They do so for different numbers of positive and negative sentences and identify the combination which yields the best overlap for different values of the threshold $\tau$. The other experiments are conducted on 3 sizes of Pythia models, in particular since several training checkpoints are available.
- They measure the Spearman correlation between similarity judgments for the expert neurons and humans for the MEN dataset. They obtain that the representations of expert neurons align with human ones early in the training.
- Then they obtain that there is clearly more overlap between expert neurons of concepts of the same category (cat and dog) than between concepts from different categories (cat and bus).
- Finally they study the number of expert neurons across training checkpoints, layers and model size. They obtain that the number of expert neurons increases and stabilizes early in training,  that later layers and bigger models have more of experts.


# Summary of strengths
> *What are the major reasons to publish this paper at a selective ACL venue? These could include novel and useful methodology, insightful empirical results or theoretical analysis, clear organization of related literature, or any other reason why interested readers of ACL papers may find the paper useful.*
> *Maximum length 20000 characters.*

- The paper is very well written, the explanations of the sentence generation and the different experiment setups are clear.
- The authors conducted an extensive number of experiments with carefully crafted datasets.
- The first experiment is a valuable test of stability of the method to identify expert neurons. 
- The results are very insightful about the evolution of expert neurons through training, through the layers of Pythia and in particular with respect to human similarity judgment.


# Summary of weaknesses
> *What are the concerns that you have about the paper that would cause you to favor prioritizing other high-quality papers that are also under consideration for publication? These could include concerns about correctness of the results or argumentation, limited perceived impact of the methods or findings (note that impact can be significant both in broad or in narrow subfields), lack of clarity in exposition, or any other reason why interested readers of ACL papers may gain less from this paper than they would from other papers under consideration. Where possible, please number your concerns so authors may respond to them individually.*
> *Maximum length 20000 characters.*

1. The contributions of this paper are unclear. The abstract suggests that a novel approach is introduced even though all the methods used seem to be introduced in previous work, in particular Suau et al. (2023). The related work section should include a short paragraph clearly stating the contributions in this case.
2. I don't see how the experiment of section 6 suggests hierarchical organization of concepts. On figure 4 we see high overlap of experts neurons between concepts of the same category. This suggests only categorization of the concepts in the representations.
3. In this work, neurons are studied individually. This assumes that the representation of concepts are local and aligned with the canonical basis induced by the neurons. Representations which are distributed or rotated compared to the canonical basis are harder to detect for this method. This would explain the non-negligible overlap of expert neurons between different concepts. There should be a paragraph in the limitation section about this point.
4. The method used to identify expert neurons does not ensure a causal role of those neurons in the processing of their concept. This seems to be what is addressed in the second paragraph of the limitation section but the sentence at lines 72-73 should be downplayed in this regard.
5. The paper should include a few sentences in the method section to explain how are the token embeddings aggregated at the level of sentences and how is the activity of a neuron scaled for using as a classifier, since it takes arbitrary values a priori.


# Comments Suggestions And Typos
> *If you have any comments to the authors about how they may improve their paper, other than addressing the concerns above, please list them here.*
> *Maximum length 20000 characters.*

1. On figure 1, it would be nice to have some panels for the **number** of identified expert neurons in addition to the overlap.
2. On figure 5 and 7.a, it is counter-intuitive to see more expert neurons for checkpoint 1 than later ones. Do you have an intuition on why it is like so? Could you add a baseline for comparison, e.g. a completely untrained/random model?
3. There seem to be a typo in the caption of figures 2 and 3: "statistically (p < 0.05)" -> "statistically **significant** (p < 0.05)".
4. The tick labels for the number of checkpoints on some figures would be easier to read with a more compact format, e.g. 143k instead of 143000 or even $10^5$.
5. To improve the readability of figure 4, dropping the upper or lower triangle of the heatmap including the diagonal would result in a more relevant color scale.
6. The text in figure 6 should be bigger.
7. In figure 7.b, it is hard to distinguish between early checkpoints with the current color scale.
8. On appendix A for the Mistral model, the example of answer to the *fact prompt* seems more like a story and vice-versa, the answer to the *story prompt* seems more factual. Can you check if they have been swapped?


# Confidence
4 = Quite sure. I tried to check the important points carefully. It's unlikely, though conceivable, that I missed something that should affect my ratings.
# Soundness
3 = Acceptable: This study provides sufficient support for its main claims. Some minor points may need extra support or details.
# Excitement
3 = Interesting: I might mention some points of this paper to others and/or attend its presentation in a conference if there's time.
# Overall Assessment
2 = Resubmit next cycle: I think this paper needs substantial revisions that can be completed by the next ARR cycle.
# Ethical Concerns
There are no concerns with this submission.
# Needs Ethics Review
No
# Reproducibility
3 = They could reproduce the results with some difficulty. The settings of parameters are underspecified or subjectively determined, and/or the training/evaluation data are not widely available.
# Datasets
1 = No usable datasets submitted.
# Software
1 = No usable software released.
# Knowledge Of Or Educated Guess At Author Identity
No
# Knowledge Of Paper
N/A, I do not know anything about the paper from outside sources
# Knowledge Of Paper Source
N/A, I do not know anything about the paper from outside sources
# Impact Of Knowledge Of Paper
N/A, I do not know anything about the paper from outside sources
# Reviewer Certification
I certify etc.

# My reply to *Author reply to Summary of Weaknesses (part 1)*
I appreciate the comprehensive answers of the authors to the questions and suggestions of the reviewers. If the authors manage to make all the modifications mentioned in their answers then I think this submission becomes strong.
 ```
The purpose of Fig 4 is to further explore the internal structure of the concept domains, looking at how pairs of concepts within each domain relate to each other. For instance, is the overlap between a super-ordinate concept and a sub-ordinate one larger than the overlap between pairs of sub-ordinate concepts? We agree that Fig 4 may be misleading within Section 6, and will revise the manuscript to discuss Table 2 in more detail in main text and potentially move Figure 4 to an Appendix. We will replace Fig. 4 with a new visualisation that shows the organization of super-ordinate and sub-ordinate concepts as a concept network to better illustrate concept organization. Does this explanation address the reviewer's concern?
 ```
Actually I like Figure 4 more than Table 2, I find it more straightforward to read and more informative. We can clearly see the diagonal blocks of high overlap. About the question `is the overlap between a super-ordinate concept and a sub-ordinate one larger than the overlap between pairs of sub-ordinate concepts?`, do you agree that the answer is no since the first rows and columns of each diagonal block in Figure 4 are not darker than the other cells in those blocks? This is even less evidence for hierarchical organization.