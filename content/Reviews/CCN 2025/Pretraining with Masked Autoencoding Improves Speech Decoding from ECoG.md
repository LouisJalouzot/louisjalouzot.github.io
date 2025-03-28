---
createdDate: 2025-03-16
publish: true
tags:
  - ECoG
  - Transformers
  - Pretraining
project:
  - Decoding
type:
  - review
originalReviewer: Alexis Thual
cycle: CCN2025
deadline: 2025-03-31
reviewStatus: to do
---
[[Pretraining with Masked Autoencoding Improves Speech Decoding from ECoG.pdf]]

# Interest
Specialized (primarily relevant to experts in a specific subfield)
# Soundness
Adequate (appropriate methodology; evidence consistent with claims)
# Expertise
Fair (I have a good understanding of this work)
# Clarity
Adequate (understandable to an expert audience)

# Comments
- Thanks to pretraining with masked autoencoding and data augmentation the authors successfully improved single word decoding performance for 3 out of the 4 subjects in the ECoG dataset of interest 
- They used a transformer architecture and beat an RNN baseline from previous work on the same dataset
- They achieve better results by self-supervised/masked pretraining then supervised/classification fine-tuning than without the pretraining phase
- I fear that those results could be confounded by model size, in particular since the authors observe that freezing the pretrained part of the model during supervised training (of only the classification head then) yields the same performance as only supervised training (without pretraining). Therefore the features learned during pretraining would not be useful for the classification task, and the 
- Could the authors show the number of parameters in their models and the baseline and in the different parts of their model (CNNs, transformer layers, linear classification head)
- Training the classification head from the first and last layers of the transformer part might not be the best choice. We know that transformers compute more semantically rich representations in middle layers. Representations from the later layers are tailored for the pretraining objective.
- Line numbers are missing from the PDF
- Typos in the legend 