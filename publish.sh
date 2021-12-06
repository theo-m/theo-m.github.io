#!/usr/bin/env bash

# https://unix.stackexchange.com/a/155077
if [ -z "$(git status --porcelain)" ]; then
  # Working directory clean
  echo "git state ok, proceeding.."
else
  echo "git state is dirty - won't do anything until clean.."
  git status
  exit 1
  # Uncommitted changes
fi

BUIDL=$(date +%s)
set -Eex

yarn build
cp -r out/ "/tmp/${BUIDL}"
git checkout matussie.re
cp -r "/tmp/${BUIDL}/" .
touch .nojekyll
git add -A
git commit -m "update from nextjs"
git push
git checkout new

