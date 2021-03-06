#!/usr/bin/zsh

set -e  # stop on first error

hashdate=$(date +'%H%M%S')
giturl=$(git config --get remote.origin.url)

echo '----- bundle exec jekyll build --destination /tmp/blog$hashdate'
bundle exec jekyll build --destination /tmp/blog$hashdate

echo '----- cd /tmp/blog$hashdate'
cd /tmp/blog$hashdate

echo '----- git init'
git init

echo "----- git add . && git commit -m 'Local build update'"
git add . && git commit -m 'Local build update'

echo '----- git remote add origin $giturl'
git remote add origin $giturl

echo '----- git push origin master --force'
git push origin master --force
