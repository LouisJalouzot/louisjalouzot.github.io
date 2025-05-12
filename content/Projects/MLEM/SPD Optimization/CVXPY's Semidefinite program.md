---
createdDate: 2025-03-20
publish: true
tags:
  - Optimization
  - SPD
  - Python
project:
  - MLEM
type:
---
[CVXPY's Semidefinite program](https://www.cvxpy.org/examples/basic/sdp.html)

Similar to [[Pymanopt's SPD manifold]]

```python
# Create a symmetric matrix variable.
X = cp.Variable((n,n), symmetric=True)
# The operator >> denotes matrix inequality.
constraints = [X >> 1e-6] # X positive definite
prob = cp.Problem(cp.Minimize(cp.trace(C @ X)))
prob.solve()
```

> [!success] Pros
> - *Exact* solution

> [!failure] Cons
> - No GPU support
> - No batching
> - 1e-6 arbitrary
