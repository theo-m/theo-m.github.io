---
layout: main
title: Blog
---

<p>
{% for post in site.blog reversed %}
<span>{{ post.date | date: "%d %b %Y"}}:  </span>
<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
<br>
{% endfor %}
</p>
