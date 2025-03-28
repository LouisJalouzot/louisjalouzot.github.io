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
- Thanks to pretraining with masked autoencoding and data augmentation the authors successfully improved single word decoding performance for 3 out of the 4 subjects in the ECoG dataset of interest.
- They used a transformer architecture and beat an RNN baseline from previous work on the same dataset
- They achieve better results by self-supervised/masked pretraining then supervised/classification fine-tuning than without the pretraining phase.
- I find concerning that the authors observe that freezing the pretrained part of the model during supervised training (of only the classification head then) yields the same performance as only supervised training (without pretraining). Therefore the features learned during pretraining would not be useful for the classification task.
- I fear that model size could be a confounding variable in this work. It would be useful to show the number of parameters in the different models, including the baseline, and in the different parts (convolutions, transformer layers, linear classification head).
- It should be made clear as early as the *Supervised Training* section that the primary approach taken is the non-freezing one.
- After the CNNs, the frequency of the signal if ~67Hz. After that it is not clear how the data is fed to the transformers. Are all the 67 points per second considered as tokens? Is there some pooling or windowing on the time dimension?
- Training the classification head from the first and last layers of the transformer part might not be the best option. We know now that transformers compute more semantically rich representations in middle layers. Representations from the later layers are more tailored to the pretraining objective.
- I think the addition of the `[CLS]` token is not useful and not motivated. In particular in the case of pretraining then freezing, the transformer has nothing to learn for it.
- Line numbers are missing from the PDF
- Typo in the related work section: "the all the"
- On figure 4, there should be a legend for the colors in addition to the text. Also, it is not surprising to have such small standard errors of the mean with such a number of samples (30). 95% confidence intervals or standard deviations would be more informative.
- Some references should be in parenthesis thanks to `\citep`:
	- Hestness et al. (2017) in the *Data* section
	- Oord et al. (2017) in the *Statistical Testing* section
- Typos in the caption of figure 3:
	- "Asterisks show indicate"
	- "doecding"