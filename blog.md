---
layout: main
title: Blog
---

{% for post in site.blog reversed %}
- {{ post.date | date: "%d %b %Y" }}: [{{ post.title }}]({{ post.url }})
{% endfor %}
