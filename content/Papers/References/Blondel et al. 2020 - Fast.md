---
year: 2020
month: 1
day: 20
date: 2020-02-19
authors:
  - "Blondel, Mathieu"
  - "Teboul, O."
  - "Berthet, Quentin"
  - "Djolonga, Josip"
generated: true
key: 87B8PSHE
version: 2631
itemType: journalArticle
paperTitle: Fast Differentiable Sorting and Ranking
publicationTitle: ArXiv
url: "https://www.semanticscholar.org/paper/Fast-Differentiable-Sorting-and-Ranking-Blondel-Teboul/5eef6a00d9eab08f3071ef19ea3e4b545421e8cb"
accessDate: "2025-05-23T15:46:01Z"
libraryCatalog: Semantic Scholar
dateAdded: "2025-05-23T15:46:01Z"
dateModified: "2025-05-23T15:46:01Z"
filename: Blondel et al. 2020 - Fast Differentiable Sorting and Ranking.pdf
marker: "[🇿](zotero://select/library/items/87B8PSHE)"
publish: true
type: reference
---
# Fast Differentiable Sorting and Ranking

[PDF file](/Papers/PDFs/Blondel%20et%20al.%202020%20-%20Fast%20Differentiable%20Sorting%20and%20Ranking.pdf)

> [!abstract] Abstract
> The sorting operation is one of the most commonly used building blocks in computer programming. In machine learning, it is often used for robust statistics. However, seen as a function, it is piecewise linear and as a result includes many kinks where it is non-differentiable. More problematic is the related ranking operator, often used for order statistics and ranking metrics. It is a piecewise constant function, meaning that its derivatives are null or undefined. While numerous works have proposed differentiable proxies to sorting and ranking, they do not achieve the $O(n \log n)$ time complexity one would expect from sorting and ranking operations. In this paper, we propose the first differentiable sorting and ranking operators with $O(n \log n)$ time and $O(n)$ space complexity. Our proposal in addition enjoys exact computation and differentiation. We achieve this feat by constructing differentiable operators as projections onto the permutahedron, the convex hull of permutations, and using a reduction to isotonic optimization. Empirically, we confirm that our approach is an order of magnitude faster than existing approaches and showcase two novel applications: differentiable Spearman's rank correlation coefficient and least trimmed squares.

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it.

