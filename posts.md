---
title: Posts
layout: default
---

{% for post in site.posts %}

## [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) <small class="postdate"> _ {{ post.date | date: '%B %d, %Y' }}</small>
{{ post.excerpt }} <a href="{{ site.baseurl }}{{ post.url }}">Read More</a>

{% endfor %}
