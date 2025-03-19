---
zoteroTags:
  - Computer Science - Artificial Intelligence
  - Computer Science - Computation and Language
  - Computer Science - Machine Learning
year: 2025
month: 1
day: 17
date: 2025-02-17
authors:
  - "Lee, Bruce W."
  - "Padhi, Inkit"
  - "Ramamurthy, Karthikeyan Natesan"
  - "Miehling, Erik"
  - "Dognin, Pierre"
  - "Nagireddy, Manish"
  - "Dhurandhar, Amit"
generated: true
key: PYPICR5X
version: 2405
itemType: preprint
paperTitle: Programming Refusal with Conditional Activation Steering
repository: arXiv
archiveID: "arXiv:2409.05907"
DOI: 10.48550/arXiv.2409.05907
url: "http://arxiv.org/abs/2409.05907"
accessDate: "2025-03-19T09:27:49Z"
libraryCatalog: arXiv.org
extra: "arXiv:2409.05907 [cs]"
dateAdded: "2025-03-19T09:27:49Z"
dateModified: "2025-03-19T09:27:49Z"
filename: Lee et al. 2025 - Programming Refusal with Conditional Activation Steering.pdf
marker: "[🇿](zotero://select/library/items/PYPICR5X)"
publish: true
type: reference
---
# Programming Refusal with Conditional Activation Steering

[PDF file](/Papers/PDFs/Lee%20et%20al.%202025%20-%20Programming%20Refusal%20with%20Conditional%20Activation%20Steering.pdf)

> [!abstract] Abstract
> LLMs have shown remarkable capabilities, but precisely controlling their response behavior remains challenging. Existing activation steering methods alter LLM behavior indiscriminately, limiting their practical applicability in settings where selective responses are essential, such as content moderation or domain-specific assistants. In this paper, we propose Conditional Activation Steering (CAST), which analyzes LLM activation patterns during inference to selectively apply or withhold activation steering based on the input context. Our method is based on the observation that different categories of prompts activate distinct patterns in the model's hidden states. Using CAST, one can systematically control LLM behavior with rules like "if input is about hate speech or adult content, then refuse" or "if input is not about legal advice, then refuse." This allows for selective modification of responses to specific content while maintaining normal responses to other content, all without requiring weight optimization. We release an open-source implementation of our framework at github.com/IBM/activation-steering .

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it.

