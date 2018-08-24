---
title: Small experimentation on correlation indices
layout: main
date: 2018-08-24
---



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


![png](/files/output_1_0.png)



![png](/files/output_1_1.png)



```python
min(pears_p)
```




    0.011250438775604945


