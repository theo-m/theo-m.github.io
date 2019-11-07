#!/bin/bash

rm -rf ./Dockerfile

cleanup () {
  rm -rf ./Dockerfile
}
trap cleanup EXIT INT TERM

cat << EOF >> ./Dockerfile
FROM jekyll-blog-dependencies
CMD jekyll serve
EOF

docker build -t localrun -f Dockerfile .
docker run -d --publish 4000:4000 --volume "$PWD:/srv/jekyll" -it localrun:latest 
rm -rf ./Dockerfile
