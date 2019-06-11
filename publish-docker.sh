#!/bin/bash

set -ex

rm -rf ./Dockerfile

cleanup () {
  rm -rf ./Dockerfile
}
trap cleanup INT TERM EXIT

HASHDATE=$(date +'%H%M%S')
GITURL=$(git config --get remote.origin.url)
BUILDIR="/tmp/blog-build-$HASHDATE"

cat << EOF >> ./Dockerfile
FROM jekyll-blog-dependencies
COPY . /srv/jekyll
RUN jekyll build --destination /home/jekyll/
CMD sleep 300
EOF

docker build -t blog-publisher -f Dockerfile .
CONTAINER_ID=$(docker run -d -it blog-publisher)
docker cp $CONTAINER_ID:/home/jekyll "/tmp/blog-build-$HASHDATE"
cd $BUILDIR && \
  git init && \
  git add -A && \
  git commit -m 'Local build update' && \
  git remote add origin "$GITURL" && \
  git push origin master --force
docker kill $CONTAINER_ID
rm -rf ./Dockerfile
