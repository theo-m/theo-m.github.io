---
title: Word Vectors 101
layout: main
date: 2017-10-18
---

The following is yet another attempt at describing what word vectors are. Numerous blog posts have done it before, among which [sruder](hisblog), [acolyer](hisblog) or [colah](hisblog), all of them being _very_ good articles. I wrote the following since I believe what I have learnt during my internship at the _Université de Montréal_ is valuable as it differs from the cited blog posts.

Word vectors were first thought of in the late 80s by Geoff Hinton {% cite hinton1984distributed %} and they have been a topic of research ever since. What motivates them is simply the bold idea to translate words of our common vocabulary into mathematical vectors. This "translation" is hard to define as it is unclear what we actually want it to be; i.e. how we want the vectors to carry *meaning*, a notion sufficiently hard to properly define that it requires its own philosophic discipline.

The first and main idea would be that this translation --- a mapping in mathematical terms and defined as such: 

$$
	\begin{align} 
	\phi :\quad & \mathcal V \longrightarrow \mathbb R^d \\ & w \mapsto \phi(w) 
	\end{align}
$$

be *continuous*, a mathematical term denoting the fact that we want two words close in meaning to be close in the vector space. Strictly put, this means that we expect the following:

$$
	\begin{gathered}
	\forall \epsilon > 0 \exists \delta > 0 \quad s.t.\\
	d(w_1,w_2)<\delta \implies \Vert \phi(w_1) - \phi(w_2) \Vert_2^2 < \epsilon
	\end{gathered}
$$

Putting this clearly on paper makes us wonder about what exactly we expect $d$, the distance on our vocabulary, to be. While $\Vert\cdot\Vert_2^2$ is well defined as the euclidean norm for $\mathbb R^d$, it is unclear how to put a good metric on the vocabulary space.

But such questions will be left for later inquiries; let us now see how to actually generate such vectors. In 2014, following great movements in the discipline, Baroni {% cite baroni2014don %} divided generation methods between count-based and predictive methods. This classification is based on the heuristic used to determine the _cooccurence information_ of a pair of words.

## Count-based generation methods




---

Cited references

{% bibliography --cited %}