---
zoteroTags:
  - Computer Science - Artificial Intelligence
  - Computer Science - Computation and Language
  - Computer Science - Machine Learning
year: 2025
month: 4
day: 15
date: 2025-05-15
authors:
  - "liu, Yizhou"
  - "Liu, Ziming"
  - "Gore, Jeff"
generated: true
key: Z97DDGLZ
version: 2598
itemType: preprint
paperTitle: Superposition Yields Robust Neural Scaling
repository: arXiv
archiveID: "arXiv:2505.10465"
DOI: 10.48550/arXiv.2505.10465
url: "http://arxiv.org/abs/2505.10465"
accessDate: "2025-05-18T08:58:28Z"
libraryCatalog: arXiv.org
extra: "arXiv:2505.10465 [cs]"
dateAdded: "2025-05-18T08:58:28Z"
dateModified: "2025-05-18T08:58:28Z"
filename: liu et al. 2025 - Superposition Yields Robust Neural Scaling.pdf
marker: "[🇿](zotero://select/library/items/Z97DDGLZ)"
publish: true
type: reference
---
# Superposition Yields Robust Neural Scaling

[PDF file](/Papers/PDFs/liu%20et%20al.%202025%20-%20Superposition%20Yields%20Robust%20Neural%20Scaling.pdf)

> [!abstract] Abstract
> The success of today's large language models (LLMs) depends on the observation that larger models perform better. However, the origin of this neural scaling law -- the finding that loss decreases as a power law with model size -- remains unclear. Starting from two empirical principles -- that LLMs represent more things than the model dimensions (widths) they have (i.e., representations are superposed), and that words or concepts in language occur with varying frequencies -- we constructed a toy model to study the loss scaling with model size. We found that when superposition is weak, meaning only the most frequent features are represented without interference, the scaling of loss with model size depends on the underlying feature frequency; if feature frequencies follow a power law, so does the loss. In contrast, under strong superposition, where all features are represented but overlap with each other, the loss becomes inversely proportional to the model dimension across a wide range of feature frequency distributions. This robust scaling behavior is explained geometrically: when many more vectors are packed into a lower dimensional space, the interference (squared overlaps) between vectors scales inversely with that dimension. We then analyzed four families of open-sourced LLMs and found that they exhibit strong superposition and quantitatively match the predictions of our toy model. The Chinchilla scaling law turned out to also agree with our results. We conclude that representation superposition is an important mechanism underlying the observed neural scaling laws. We anticipate that these insights will inspire new training strategies and model architectures to achieve better performance with less computation and fewer parameters.

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it.

