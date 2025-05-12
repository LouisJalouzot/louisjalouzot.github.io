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

`MatrixSymPosDef` comes from [parametrization-cookbook](https://gitlab.com/jbleger/parametrization-cookbook) (paper to cite)
Here the view is:
- $L = \text{tril}(W)$
- Apply positive function to diagonal coefficients of $L$
- $W' = LL^T$ -> SPD
The positive function is (lookup origin in paper)
```python
def log1pexp(x):
    return torch.log1p(torch.exp(-torch.abs(x))) + torch.relu(x)
```

# Results

Both parametrization work well but the convergence speed is very sensitive to initial parameters
Using batch computation is not feasible because there are too many points
![[Pasted image 20250320130100.png|800]]
1 min 30 epoch with batch size of 4096
*Luckily* all the data can easily fit on the GPU (no more batches, ~~S~~GD)
In this case, epoch = 0.24 s
Here 0.18 (need more epochs) test Spearman compared to 0.5 with Pymanopt
![[Pasted image 20250320130343.png]]

# Bonus: Spearman on GPU
Takes 3 min to compute Spearman for $1e7$ points with Scipy implementation (on CPU)
Instantaneous (0.05 s) with a simple implementation with PyTorch that runs on GPU (why not already implemented in PyTorch?)
```python
def spearman(x, y, dim=0):
	"""
	Calculates Spearman's rank correlation coefficient between two tensors.
	Args:
		x (torch.Tensor): First tensor.
		y (torch.Tensor): Second tensor.
		dim (int): Dimension along which to compute the correlation. Default: 0.
	Returns:
		float: Spearman's rank correlation coefficient.
	"""
	x_rank = x.argsort(dim=dim).argsort(dim=dim)
	y_rank = y.argsort(dim=dim).argsort(dim=dim)
	
	return torch.corrcoef(torch.stack([x_rank, y_rank], dim=dim))[0, 1].item()
```