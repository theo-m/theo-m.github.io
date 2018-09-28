---
title: Small experimentation on correlation indices
layout: main
date: 2018-08-24
---

Simple experimentation to see how standard correlation indices (Spearman & Pearson) behave on the simplest possible dataset. I take three points in the $y=x$ line and play with the middle one's $y$-coordinate to see how the indices change with it. 

```python
import numpy as np
from scipy.stats import pearsonr, spearmanr
import matplotlib.pyplot as plt
```


```python
x = np.array([1, 2, 3])


def yfun(p):
    return np.array([1, p, 3])


mn, mx = .5, 3.5
ps = np.linspace(mn, mx, 50)

f, ax = plt.subplots()
ax.plot(x, yfun(mn))
ax.plot(x, yfun(mx))
ax.plot(x, yfun(1))
ax.plot(x, yfun(3))
ax.plot(x, yfun(2))
ax.plot(x, yfun(1.5))
ax.plot(x, yfun(2.5))
plt.show()

f, (ax1, ax2) = plt.subplots(ncols=2, figsize=(16, 6))


pears_v, pears_p = [], []
speas_v, speas_p = [], []
for p in ps:
    y = yfun(p)
    sv, sp = spearmanr(x, y)
    pv, pp = pearsonr(x, y)
    pears_v.append(pv)
    pears_p.append(pp)
    speas_v.append(sv)
    speas_p.append(sp)
    
ax1.plot(ps, pears_v, label='pearson')
ax1.plot(ps, speas_v, label='spearman')
ax2.plot(ps, pears_p, label='pearson')
ax2.plot(ps, speas_p, label='spearman')
ax1.legend()
ax2.legend()

plt.show()
```

Here we just show the different three-point sets we're considering.

<img src="/files/output_1_0.png" alt="drawing" style="width:60%"/>

And here the result of the experiment with the $x$ axis denoting the $y$-coordinate of the middle point. Naturally we see maximum correlation for $y=2$ since it makes the three points aligned. The right hand plot shows the behaviour of the p-values.

![png](/files/output_1_1.png)

This is cool because it shows nicely how the Spearman correlation behaves with monotonicity: if the middle point breaks it ( $y>3$ or $y<1$ ) we go straight back to non significant correlation or p-value.
From the above right-hand plot we see that the miminum p-value for the Pearson index we achieve is positive, so what is its value?

```python
min(pears_p)  # = 0.011250438775604945
```


$$ \rho = \frac{\text{cov}\left( X, Y \right)}{\sigma_X \sigma_Y} $$

Why is it non-zero? Because, going back to its definition, we have a non-zero covariance!


