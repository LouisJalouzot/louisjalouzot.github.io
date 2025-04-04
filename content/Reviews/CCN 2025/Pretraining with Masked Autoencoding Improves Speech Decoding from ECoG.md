---
createdDate: 2025-03-16
publish: false
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
reviewStatus: done
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
## Summary & Strengths
- The authors successfully use masked autoencoding pretraining and data augmentation to improve single-word decoding performance for 3 out of the 4 subjects of the ECoG dataset considered, compared to supervised-only training.
- The proposed transformer architecture outperforms the previous RNN baseline on the same ECoG dataset.
- The paper demonstrates that self-supervised pretraining followed by supervised fine-tuning yields better results than supervised-only training.

## Major Concerns
- A key concern is the finding that freezing the pretrained model yields performance equivalent to supervised-only training. This potentially questions the utility of the specific features learned during pretraining for the downstream task when not fine-tuned. It might require orders of magnitude more pretraining data to learn features useful enough for classification to outperform supervised-only learning.
- Model size might be a confounding variable. Please report the number of parameters for the proposed model (split by component: convolutions, transformer, classification head) and the baseline RNN.

## Minor Concerns & Suggestions
- Please clarify earlier (e.g., in the Supervised Training section) that fine-tuning the entire model (non-freezing) is the primary approach, and that freezing the pretrained weights is considered only later.
- It is not clear how the data from the convolutional feature extraction (resulting in a ~67Hz signal) is then passed on to the transformer layers. Are the ~67 points per second treated as individual tokens? Is temporal pooling or windowing applied?
- Consider discussing or justifying the choice of using features from the first and last transformer layers for the classification head. We know from the literature that middle layers often contain richer representations, while later layers might be overly adapted to the pretraining objective.
- The motivation and utility of adding a `[CLS]` token could be elaborated upon, especially given its limited adaptability in the frozen pretraining scenario.

## Presentation Issues
- Typo in the Related Work section: "the all the".
- Figure 4: Please add a color legend. Consider replacing standard error bars with 95% confidence intervals or standard deviations, as SEM can be misleadingly small with large sample sizes (n=30) and therefore uninformative.
- Some citations should use parentheses (e.g., via `\citep`): Hestness et al. (2017) in *Data*, Oord et al. (2017) in *Statistical Testing*.
- Typos in Figure 3 caption: "Asterisks show indicate", "doecding".

# Comments (unformatted)
- Thanks to pretraining with masked autoencoding and data augmentation the authors successfully improved single word decoding performance for 3 out of the 4 subjects in the ECoG dataset of interest.
- They used a transformer architecture and beat an RNN baseline from previous work on the same dataset.
- They achieve better results by self-supervised/masked pretraining then supervised/classification fine-tuning than without the pretraining phase.
- I find concerning that the authors observe that freezing the pretrained part of the model during supervised training (of only the classification head then) yields the same performance as only supervised training (without pretraining). Therefore the features learned during pretraining would not be useful for the classification task. It would probably require pretraining on orders of magnitude more data.
- It should be made clear as early as the *Supervised Training* section that the primary approach taken is the non-freezing one.
- I fear that model size could be a confounding variable in this work. It would be useful to show the number of parameters in the different models, including the baseline, and in the different parts (convolutions, transformer layers, linear classification head).
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