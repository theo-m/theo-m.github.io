#!/bin/bash

cat << EOF >> ./Dockerfile-dependencies
FROM jekyll/jekyll
COPY . /srv/jekyll/
RUN bundle install
EOF

docker build -t jekyll-blog-dependencies .
rm -rf ./Dockerfile-dependencies
