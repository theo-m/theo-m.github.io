---
layout: main
title: Blog
---

## Language related articles

<ul class="posts">
	{% for post in site.posts %}
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

<ul class="posts">
	{% for post in site.misc %}
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
