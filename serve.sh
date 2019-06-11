#!/bin/bash

cat << EOF >> ./Dockerfile
FROM jekyll-blog-dependencies
RUN jekyll build
CMD jekyll serve
EOF

docker build -t localrun -f Dockerfile .
docker run -p 4000:4000 -it localrun:latest
rm -rf ./Dockerfile
