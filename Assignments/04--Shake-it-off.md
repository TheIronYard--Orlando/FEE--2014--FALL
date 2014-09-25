* Resources...
  * One more time with [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)
  * Go back through [Git Real](https://www.codeschool.com/courses/git-real)
  * Try the first few levels of [Mastering Github](https://www.codeschool.com/courses/mastering-github)
  * Create a `sandbox` Workspace in C9 to play around in?
  * Review [the Jekyll docs](http://jekyllrb.com/docs/home/)
* End of Week Assignment: Una Vez Más!
  * [ ] Kill all your darlings...
    * Make sure that all your PRs in Github are merged and closed in your Github Pages repo
    * Make sure that you have _merged_ everything from Github into your local `master` branch
    * [ ] Delete all your "feature" branches in Github (from the PR interface)
    * [ ] Cleanup your local branches on C9 with `git fetch --prune` and `git branch -d`
  * [ ] Make a backup...
    * [ ] Checkout `master` on C9
    * [ ] Create a local branch called `old-master` based on `master`
    * [ ] Push `old-master` to Github
  * [ ] Rewind the world... ![Just like Superman](http://38.media.tumblr.com/tumblr_lr7uxutHzA1qhbarso1_400.gif)
    * [ ] Find the initial commit to your Github Pages repository.
    * [ ] Use `git reset --hard` to set local `master` to that commit.
    * [ ] Ensure that you _only_ have the following files in your working tree:
      * `.gitignore` containing `.c9/` and `_site/`
      * `LICENSE` containing at least the CC0 license verbiage (see [Choose a License](http://choosealicense.com/) for guidance)
      * *Optionally*: `README.md` explaining what this repository is.
    * [ ] _Immediately_ push to Github with: `git push --force origin master`
    * [ ] Create a new branch for your work: `feature/04--Shake-it-off`
    * Start building...
  * **For Monday** you should have:
    * A working, functional site at your `[username].github.io` domain, i.e. no Github Pages build errors, broken (404) links, or gross layout bugs.
    * A fully-functional Jekyll theme (not pretty) with valid HTML, i.e. there should be no `index.html` in your repository, just `index.md` and at least a `_layouts/default.html`
    * All of the posts that you've written to date linked on the front page in an unordered list with an appropriate heading.
    * Links to all of the repositories you currently own on the front page in an unordered list with an appropriate heading.
    * At least one Pull Request in your repository that has been peer-reviewed by the class with at least 2 :+1: (`:+1:`) or :thumbsup: (`:thumbsup`) comments
* Turn-in Instructions
  * Open an issue in the class repo to track your work with the title `03 -- Shake it off -- YOUR NAME`.
  * Copy and paste these instructions into that issue.
  * Whenever you open Pull Requests in your Github Pages repo, link to the Work In Progress (WIP) issue in the class repo.
* General Advice
  * You can make as many `feature/*` branches as you need to help organize your work.
  * If you get stuck on one piece of the assignment, commit, push, and start working on another piece... In another branch, maybe?
  * You are not expected to create a masterpiece or work of art for this assignment, just a functional site. The masterpiece comes later.
  * Ask your team for help! Use Hipchat, Github Issues, Stack Overflow, and everything else you know about...
  * Don't monopolize the instructors. This is your first big chance to wrestle with a big project. Do it.
