---
layout: post
title: "word embeddings 1: what"
date: 2017-06-29
---

![embeddings](/files/embeddings.png)

Word embeddings, _a.k.a._ vector space models for words, are a convenient way to represent words as vectors. Doing so has a lot of advantages, but the first and foremost motivation is to be able to apply all the theory on linear algebra to language.

Word vectors have been around since the 80s, but they've always been seen as a nice but computationally expensive trick. 

The big idea is to learn from a corpus a certain idea of how words cooccur with other words on the basis of a certain relationship. 

This relationship is commonly distance, _i.e._ we're going to count a cooccurence when the two words appear at distance less than \\( k \\), where usually \\(2 \lt k \lt 10\\). Some people have tried to count based on more sophisticated relationships, like syntaxical dependencies.

The underlying idea to counting cooccurences is that of distributional semantics, which can be described with a famous quote:

> _A word is characterized by the company it keeps._ -- J. Firth

Once we have counted all these cooccurences, we put them in a big square matrix:

$$ M \in \mathbb{R}^{v\times v} $$

With \\( v \\) denoting the size of the vocabulary. The vocabulary is often the words occuring more than \\( m \\) times in the corpus, plus an `UNK` token serving as a catch-all for rare words.

Now we procede in a somewhat unoriginal manner for machine learning; we're going to do a dimensionality reduction on this matrix, via a [singular value decomposition](https://en.wikipedia.org/wiki/Singular_value_decomposition?oldformat=true). This process gives us a new basis to describe our matrix, and we're going to stick with the \\( d \\) vectors of the basis with the biggest associated singular values. Usually we take \\( 20 \lt d \lt 500 \\).

This process, with all its possible modificationd, is qualified as **count-based**. It is computationally prohibitive because our vocabulary size is often larger than 50k, making \\(M\\) a beast for SVD algorithms.

---

In 2013 Tomas Mikolov published two papers which offered new ways to compute these word vectors. He named both of his techniques Word2Vec and released his [code](https://github.com/tmikolov/word2vec). While count-based methods would mean days or weeks of computation, Mikolov's ran in a few hours, with word embeddings of great _quality_ (a vague notion that I will talk about in a post to come).

His method and those that followed are called **predictive**. Some affiliate them with Deep Learning, which it is not since there's barely one hidden layer in the network.

Mikolov's two methods are called Continuous Bag Of Words (CBOW) and Skip-Gram (SG), they are called predictive because:

* CBOW tries to guess a word at the center of a window: `the cat .. the mat`,
* SG does the opposite, it tries to guess the window for a given word: `.. .. on .. ..`.

He built on two papers presenting new techniques for neural networks: __hierarchical softmax__, a complex method to compute softmaxs in \\(\mathcal{O}(\log n)\\) time, and __noise contrastive estimation__, _a.k.a._ negative sampling.

These two notions are well explained by S. Ruder on his [blog](http://sebastianruder.com/word-embeddings-softmax/index.html), so let's review the basics.

