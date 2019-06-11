---
title: Github pages with Docker
layout: main
date: 2019-06-11
---

I've always found Jekyll hard to install on Ubuntu, some weird stuff with the Nokogiri package as I recall it, plus managing Ruby/Gem versions is not straightforward.

Docker is a cool tool I've become used to at work, so I've been testing it at home.
For this blog this gives these two scripts:

- This one installs all dependencies just once (a bit long)

```bash
#!/bin/bash

cat << EOF >> ./Dockerfile-dependencies
FROM jekyll/jekyll
COPY . /srv/jekyll/
RUN bundle install
EOF

docker build -t jekyll-blog-dependencies .
rm -rf ./Dockerfile-dependencies
```

- This one serves the content, it's actually pretty cool to mount the thing like this because you still get the file watcher thing.

```bash
#!/bin/bash

cat << EOF >> ./Dockerfile
FROM jekyll-blog-dependencies
CMD jekyll serve
EOF

docker build -t localrun -f Dockerfile .
docker run -d --publish 4000:4000 --volume "$PWD:/srv/jekyll" -it localrun:latest 
rm -rf ./Dockerfile
```
