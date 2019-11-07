FROM jekyll-blog-dependencies
COPY . /srv/jekyll
RUN jekyll build --destination /home/jekyll/
CMD sleep 300
