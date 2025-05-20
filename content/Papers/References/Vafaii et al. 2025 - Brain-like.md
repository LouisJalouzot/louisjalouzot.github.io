---
zoteroTags:
  - Computer Science - Artificial Intelligence
  - Computer Science - Machine Learning
  - Quantitative Biology - Neurons and Cognition
year: 2025
month: 4
day: 16
date: 2025-05-16
authors:
  - "Vafaii, Hadi"
  - "Galor, Dekel"
  - "Yates, Jacob L."
generated: true
key: TSDDMG8W
version: 2616
itemType: preprint
paperTitle: Brain-like variational inference
repository: arXiv
archiveID: "arXiv:2410.19315"
DOI: 10.48550/arXiv.2410.19315
url: "http://arxiv.org/abs/2410.19315"
accessDate: "2025-05-19T12:24:23Z"
libraryCatalog: arXiv.org
extra: "arXiv:2410.19315 [cs]"
dateAdded: "2025-05-19T12:24:23Z"
dateModified: "2025-05-19T12:24:23Z"
filename: Vafaii et al. 2025 - Brain-like variational inference.pdf
marker: "[🇿](zotero://select/library/items/TSDDMG8W)"
publish: true
type: reference
---
# Brain-like variational inference

[PDF file](/Papers/PDFs/Vafaii%20et%20al.%202025%20-%20Brain-like%20variational%20inference.pdf)

> [!abstract] Abstract
> Inference in both brains and machines can be formalized by optimizing a shared objective: maximizing the evidence lower bound (ELBO) in machine learning, or minimizing variational free energy (F) in neuroscience (ELBO = -F). While this equivalence suggests a unifying framework, it leaves open how inference is implemented in neural systems. Here, we show that online natural gradient descent on F, under Poisson assumptions, leads to a recurrent spiking neural network that performs variational inference via membrane potential dynamics. The resulting model -- the iterative Poisson variational autoencoder (iP-VAE) -- replaces the encoder network with local updates derived from natural gradient descent on F. Theoretically, iP-VAE yields a number of desirable features such as emergent normalization via lateral competition, and hardware-efficient integer spike count representations. Empirically, iP-VAE outperforms both standard VAEs and Gaussian-based predictive coding models in sparsity, reconstruction, and biological plausibility. iP-VAE also exhibits strong generalization to out-of-distribution inputs, exceeding hybrid iterative-amortized VAEs. These results demonstrate how deriving inference algorithms from first principles can yield concrete architectures that are simultaneously biologically plausible and empirically effective.

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it.

