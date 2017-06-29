---
layout: post
title: "word embeddings (i)"
date: 2017-06-29
---

Word embeddings, _a.k.a._ vector space models for words, are a convenient way to represent words as vectors.

```
dog = [1, 2, 0, ..., -4, 0]
```

They've been around since the 80s, but they've always been seen just a cool but computationally expensive trick. 

The big idea is to learn from a corpus a certain idea of how words cooccur with other words on the basis of a certain relationship. This relationship is commonly distance, _i.e._ we're going to count a cooccurence when the two words appear at distance less than a parameter \\( k \\). Some people have tried to count based on more sophisticated relationships, like syntaxical dependencies.

Once we have counted all these cooccurences, we put them in a big square matrix:

$$ M \in \mathbb{R}^{v\times v} $$

With \\( v \\) denoting the size of the vocabulary. The vocabulary is often the words occuring more than \\( m \\) times in the corpus, plus an `UNK` token serving as a catch-all for rare words.

Now we procede in a somewhat unoriginal manner for machine learning; we're going to do a dimensionality reduction on this matrix, via a [singular value decomposition](https://en.wikipedia.org/wiki/Singular_value_decomposition?oldformat=true). This process gives us a new basis to describe our matrix, and we're going to stick with the \\( d \\) vectors of the basis with the biggest associated singular values. Usually we take \\( 20 \lt d \lt 500 \\).

This process, with all its possible modificationd, is qualified as **count-based**. It is computationally prohibitive because our vocabulary size is often larger than 50k, making \\(M\\) a beast for SVD algorithms.

---

In 2013 Tomas Mikolov published two papers which offered a new way to compute these word vectors. He named his technique Word2Vec and released his [code](https://github.com/tmikolov/word2vec). While count-based methods would mean days or weeks of computation, Mikolov's ran in a few hours, with word embeddings of great **quality** (a vague notion that I will talk about in a post to come).

His method and those that followed are called **predictive**. Some affiliate them with Deep Learning, which it is not since there's barely one hidden layer in the network.