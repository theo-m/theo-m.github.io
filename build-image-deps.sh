#!/bin/bash

rm -rf ./Dockerfile

cleanup () {
  rm -rf ./Dockerfile
}
trap cleanup EXIT INT TERM


cat << EOF >> ./Dockerfile
FROM jekyll/jekyll
COPY . /srv/jekyll/
RUN bundle install
EOF

docker build -t jekyll-blog-dependencies -f Dockerfile .
rm -rf ./Dockerfile
