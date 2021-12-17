#!/usr/bin/env bash

# https://unix.stackexchange.com/a/155077
if [ -z "$(git status --porcelain)" ]; then
  echo "git state ok, proceeding.."
else
  echo "git state is dirty - won't do anything until clean.."
  git status
  exit 1
fi

BUIDL=$(date +%s)
DIR="/tmp/theo-m-blog-build-${BUIDL}"
CWD=$PWD
set -Eex

yarn build

mkdir $DIR
pushd $DIR

git clone git@github.com:theo-m/theo-m.github.io.git --branch matussie.re --single-branch .

cp -r "${CWD}"/out/* .
touch .nojekyll

git add -A && git commit -m "new build: $(git log -1 --pretty='%h: %B')"
git push

popd

rm -rf $DIR
