---
createdDate: 2025-03-16
publish: true
tags: 
project: 
type:
  - review
originalReviewer: Emmanuel Chemla
cycle: ACL2025
deadline: 2025-03-23
reviewStatus: to do
---
[PDF](obsidian://open?vault=content&file=Reviews%2FACL2025%2F4657_Analyze_the_Neurons_not_t.pdf)

# Paper summary
> Describe what this paper is about. This should help the program and area chairs to understand the topic of the work and highlight any possible misunderstandings.
> Maximum length 20000 characters.

The authors use a method from the literature to identify *expert neurons*, neurons that encode a specific concept. For a given concept, it consists in recording the activity of a neuron on sentences which are *positive* to the concept, i.e. related to or describing it, and *negative* ones. Then its activity is seen as a classifier for the positiveness of the sentences and the neuron is considered *expert* if it has performance above a chosen threshold $\tau$ as a classifier in terms of Area Under the Precision-Recall Curve.
# Summary of strengths
> What are the major reasons to publish this paper at a selective ACL venue? These could include novel and useful methodology, insightful empirical results or theoretical analysis, clear organization of related literature, or any other reason why interested readers of ACL papers may find the paper useful.
> Maximum length 20000 characters.


# Summary of weaknesses
> What are the concerns that you have about the paper that would cause you to favor prioritizing other high-quality papers that are also under consideration for publication? These could include concerns about correctness of the results or argumentation, limited perceived impact of the methods or findings (note that impact can be significant both in broad or in narrow subfields), lack of clarity in exposition, or any other reason why interested readers of *ACL papers may gain less from this paper than they would from other papers under consideration. Where possible, please number your concerns so authors may respond to them individually.
> Maximum length 20000 characters.


# Comments Suggestions And Typos
> If you have any comments to the authors about how they may improve their paper, other than addressing the concerns above, please list them here.
> Maximum length 20000 characters.

- There seem a typo in the caption of figures 2 and 3: "statistically (p < 0.05)" -> "statistically **significant** (p < 0.05)"
- The tick labels for the number of checkpoints on some figures would be easier to read with a more compact format, e.g. 143k instead of 143000 or even $10^5$
- To improve the readability of figure 4, dropping the upper/lower triangle of the heatmap including the diagonal would result in a more relevant color scale
- The text in figure 6 should be bigger
- In figure 7, it is hard to distinguish between early checkpoints 