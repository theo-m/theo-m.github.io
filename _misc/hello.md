---
layout: post
title: "Running this blog"
date: 2017-06-28
---

I use Github Pages with Jekyll. I followed this fine [blog post](http://jmcglone.com/guides/github-pages/) to get everything running. You can find the source code [here](https://github.com/theo-m/theo-m.github.io/tree/source).

#### Update (2017-07-17)

I use this script to publish using Github Pages while using Jekyll plugins they don't allow ([Jekyll scholar](https://github.com/inukshuk/jekyll-scholar)). Download [here](/publish).

What I did was to get all my work in a `source` branch, which is where I'll develop locally, and the script publishes to the `master branch` the html code built by Jekyll.


```bash
hashdate=$(date +'%H%M%S')
giturl=$(git config --get remote.origin.url)

bundle exec jekyll build --destination /tmp/blog$hashdate

cd /tmp/blog$hashdate

git init
git add . && git commit -m 'Local build update'
git remote add origin $giturl
git push origin master --force
```
