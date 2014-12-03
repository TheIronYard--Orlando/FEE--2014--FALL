### Objectives

Demonstrate understanding of:

* Use of a Static Site Generator like [Jekyll](http://jekyllrb.com) or [Octopress](http://octopress.org)
* Basic templating concepts and content insertion
* URL structure: absolute, server-relative, page-relative
* Selectively merging history and checking out work in git

### Directions

Now that you have a responsive version of your site, it's time to break it up into a Jekyll theme so that Github can publish it for you automatically. You should create a new branch on your `[username].github.io` and `TIY-Assignments` repos called `return-of-jekyll`.

* Create a branch in _both_ repos called `rwd-strikes-back` and commit your work into those
* Create a folder in your `TIY-Assignments` repository called `02--Return-of-the-Jekyll` to put your work in
* Read [the documentation for Jekyll](http://jekyllrb.com/docs/)
* Create a (empty) `_layouts/` and `_includes/` directory and `_config.yml` file
* Copy your `index.html` file into `_layouts/default.html`
* Replace the contents of the main column `_layouts/default.html` with the `{{content}}` template tag
* Remove everything from `index.html` _except_ the contents of the main column.
* Add [YAML Front Matter](http://jekyllrb.com/docs/frontmatter/) to `index.html` so that Jekyll will build `_site/index.html` using `_layout/default.html`
* Run `jekyll build` and check the results! If your site builds, merge to `master` but keep your branch...!
* Use `git checkout` to selectively merge the content from the `_posts/` directory in your `old-master`; see me if you're lost
* The command `jekyll build` should create posts in `_site/` that are _also_ wrapped in `_layout/default.html`; if not, fix it
* Link all your posts in your `index.html` file, rebuild, and follow the 2:+1:'s process
* Deploy to Github!

