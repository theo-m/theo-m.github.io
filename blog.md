---
layout: main
title: Blog
---

## Language related articles

<ul class="nakedlist">
	{% for post in site.nlp reversed %}
		<li>
			<span style="font-family: monospace;">
				{{ post.date | date: "%d %b %Y"}}:  
			</span>
			<a href="{{ post.url }}" title="{{ post.title }}">
				{{ post.title }}
			</a>
		</li>
	{% endfor %}
</ul>

## Other articles

<ul class="nakedlist">
	{% for post in site.misc reversed %}
		<li>
			<span style="font-family: monospace;">
				{{ post.date | date: "%d %b %Y"}}:  
			</span>
			<a href="{{ post.url }}" title="{{ post.title }}">
				{{ post.title }}
			</a>
		</li>
	{% endfor %}
</ul>
