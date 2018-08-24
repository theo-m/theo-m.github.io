---
layout: main
title: Blog
---

<p>
{% for post in site.blog reversed %}
<span style="font-family: monospace;">{{ post.date | date: "%d %b %Y"}}:  </span>
<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
<br>
{% endfor %}
</p>
