---
layout: land
title: About me
---


## About me

My name is Théo Matussière. I've attended the _École polytechnique_ and recently graduated from the MVA, a research master at the _ENS Cachan_.

I'm interested in language emergence in societies of agents, representation learning, and in optimization, to a lesser extent. Although these interests are academic in nature I've also had some experience doing consulting in the industry and enjoy the challenge.  


---
{: #smallruler}

## News

|-------|--------------------|
|2018/10 -|Joined the [Skynet Today](https://www.skynettoday.com/) team, will translate articles to French.| 
|2018/09 -|Finished a 4 month research internship on dialog models at [FAIR](https://research.fb.com/category/facebook-ai-research/).  |
|2018/04 -|Finished the [MVA master](http://math.ens-paris-saclay.fr/version-francaise/formations/master-mva/). |
|2017/09 -|Finished a 5 month research internship on word embeddings at [UdeM](https://www.umontreal.ca/).|


---
{: #smallruler}

## Blog


<table>
{% for post in site.blog reversed %}
<tr> 
	<td> {{ post.date | date: "%Y"}} - </td>
	<td> <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a> </td>
</tr>
{% endfor %}
</table>


---
{: #smallruler}

[twitter](https://twitter.com/theo_mtsr) - [zotero](https://www.zotero.org/theo-m) - [github](https://github.com/theo-m) - [mail](mailto:tmatussiere+blog@gmail.com)
{: style="text-align: center"}
