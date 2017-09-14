---
layout: bar
title: theo-m
---


Welcome to [my](/about) blog,

I am interested in linguistics and computer science, below are articles related to these interests. Most of them are the result of a research internship done in Montreal in the Summer of 2017 on the learning of word representation.

If you are already somewhat familiar with this topic you can skip the first articles.

<ul class="posts">
{% for post in site.posts %}
    <li>
        <span style="font-family: monospace;">
            <!-- {{ post.date | date: "%d %b %Y"}}:   -->
            -
        </span>
        <a href="{{ post.url }}" title="{{ post.title }}" style="font-family: monospace;">
            {{ post.title }}
        </a>
    </li>
{% endfor %}
</ul>
