---
createdDate: 2025-03-20
publish: true
tags:
  - Optimization
  - SPD
  - python
project:
  - MLEM
type:
---
[Pymanopt's SPD manifold](https://pymanopt.org/docs/latest/manifolds.html#module-pymanopt.manifolds.positive_definite)

Similar to [[CVXPY's Semidefinite program]]

```python
manifold = SymmetricPositiveDefinite(dim)
@pymanopt.function.pytorch(manifold)
def cost(point):
	return ((Y - (X @ point * X).sum(1)) ** 2).mean()
problem = Problem(manifold, cost)
optimizer = ConjugateGradient(verbosity=0)
result = optimizer.run(problem)
```

> [!success] Pros
> - *Exact* solution
> - Fast convergence with the ConjugateGradient optimizer

> [!failure] Cons
> - No GPU support
> - No batching

## Results
### Too slow on all the data
![[Pasted image 20250320121448.png|500]]
~4s per iteration, would probably require 100 iterations
-> 400s, not practical

### Dirty (?) solution
I figured that you don't need all the data to optimize so few parameters (14 * 15 / 2 = 105 for the relative clause dataset)
So I try to fit on more and more data (selected at random) until *convergence*
Convergence = rho train ~ rho test and $||W - W_{prev}|| < 0.05 ||W||$
![[Pasted image 20250320124247.png]]