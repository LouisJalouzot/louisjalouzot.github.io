---
createdDate: 2025-03-16
publish: true
tags: 
project:
  - Decoding
type: review
originalReviewer: Alexis Thual
cycle: CCN2025
deadline: 2025-03-31
reviewStatus: to do
---
[PDF](obsidian://open?vault=content&file=Reviews%2FCCN%202025%2F39_Neural_network_based_encodi.pdf)
# Interest
Specialized (primarily relevant to experts in a specific subfield)
# Soundness
Adequate (appropriate methodology; evidence consistent with claims)
# Expertise
Fair (I have a good understanding of this work)
# Clarity
Adequate (understandable to an expert audience)

# Comments (unformatted)
- On fMRI datasets with naturalistic vision stimuli, CNN representations align significantly better when participant are instructed to fixate. The later being unnatural and cognitively heavy the authors wanted to relax this constraint.
- They consider an encoding baseline trained to predict fMRI activity from CNN features computed from the stimuli. The resulting predictions do not achieve statistically significant correlation in any voxel of the visual cortex across the 13 participants considered in the *Study Forrest* dataset (no fixation constraint).
- Thanks to eye-tracking data, they reduce the dimension of the CNN features by keeping only the ones corresponding to the location on the movie the participant was fixating. They even refine this pixel selection by combining eye-tracking data with retinotopic maps. For each voxel they keep the CNN features in the receptive field of the voxel at the location of the gaze.
- As opposed to the baseline, the resulting *precision models* achieved statistically significant correlations for a large number of voxels in the visual cortex.
- The very different number of features for the baseline and the precision models could be a confound. Therefore they have a second baseline called *reverse gaze* which is the same as the precision model but with eye-tracking data played in reverse, essentially randomizing the dimension reduction.
- As opposed to the full-feature baseline, reverse gaze achieves statistically significant correlations in some voxels of the visual cortex but is still significantly outperformed by precision models.

- The authors should elaborate more on the scaling applied, if any, both on the encoding features and the fMRI activity. Then they should specify which are the 5 candidate regularization values considered. The space of values explored should be large enough to be relevant for the very different numbers of features in baseline and precision models.
- Figure 1.e is a triangle but what the 3 axes correspond to is unclear. I feel like a table would be easier to understand.
- Line 359: classical ridge regression does not optimize the Pearson correlation. Did the author optimize the Pearson correlation through Gradient Descent?
- The authors should elaborating on the choice of the CNN architecture. In particular CORnet (https://arxiv.org/pdf/1909.06161) is known to align better with the visual cortex, it could be used instead of VGG-19 to have slightly higher encoding correlations and maybe more important differences between the approaches.
- It would be nice to quantify the claim that 
- Line 496: typo "model ~~the~~ and"
