---
createdDate: 2025-03-20
publish: true
tags: 
project: 
type:
---
Gradient Descent with PyTorch on GPU
[PyTorch parametrization](https://pytorch.org/tutorials/intermediate/parametrizations.html) to keep $W$ SPD

# Symmetric + Matrix Exponential parametrization

From official PyTorch parametrization tutorial

```python
class Symmetric(nn.Module):
	def forward(self, X):
		return X.triu() + X.triu(1).transpose(-1, -2)

class MatrixExponential(nn.Module):
	def forward(self, X):
		return torch.matrix_exp(X)
```

```python
self.W = nn.Linear(num_features, num_features, bias=False)
nn.init.eye_(self.W.weight)
parametrize.register_parametrization(self.W, "weight", Symmetric())
parametrize.register_parametrization(self.W, "weight", MatrixExponential())
```

> [!quote] Intuition (from what I understand)
> We have a set of initial parameters $W$ and we change the *view* we have of it: $W' = \exp(W + W^T)$
> With this transformation, $W'$ is SPD no matter $W$
> Then we use $W'$ to do our optimization and the gradient flows back to $W$ for updating the parameters

# Cholesky decomposition

```python
class CholeskyFactorization(nn.Module):
"""Parametrization that transforms a matrix to SPD via Cholesky decomposition"""
def __init__(self, dim):
	super().__init__()
	self.dim = dim
	self.indices = torch.tril_indices(dim, dim)
	self.param = MatrixSymPosDef(dim=dim)

def forward(self, W):
	return self.param.reals1d_to_params(W[*self.indices])
```

Here

# Results
Convergence rate very sensitive to initial parameters