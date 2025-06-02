---
createdDate: 2025-06-02
publish: true
tags: 
project:
  - MLEM
type:
  - experiment
---
# Generation
## Setup
We want to start from a given/ground-truth matrix $W$
Then have 4 points with two 2-level features:

|Feat. 1|Feat. 2|
|-------|-------|
|A      |A      |
|A      |B      |
|B      |A      |
|B      |B      |
We compute ground-truth pairwise distances with $W$ and the features and generate 1/2 or 3D (the one giving lowest stress) representations for each point using MDS

## Results
- With a randomly generated $W$ with 
```python
while True:
        A = 2 * np.random.rand(2, 2) - 1
        W = A + A.T
        if np.all(np.linalg.eigvals(W) > 1e-2) and W[0, 1] < -0.2:
            break
```
I get best MDS in dim 2 with square
![[Pasted image 20250602152516.png|500]]
- With $W$ forced to $\begin{bmatrix} 1 & -.5 \\ -.5 & 1 \end{bmatrix}$
I got best MDS in dimensions 3
Dimension: 1, Stress: 0.9999999999999998
Dimension: 2, Stress: 0.17260975609478924
Dimension: 3, Stress: 0.0011906061055877368
![[Pasted image 20250602152629.png|500]]
