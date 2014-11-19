### Review

Today we looked at [Yeoman](http://yeoman.io), [generators](https://www.npmjs.org/search?q=generator), and kickstarters like [HTML5 Boilerplate](http://html5boilerplate.com/) and [Angular Kickstart](https://github.com/vesparny/angular-kickstart). The generators attempt to follow and enforce [the Angular Best Practice for App Structure](http://j.mp/1qtH9Ol): breaking down applications into discrete feature modules.

In class, we used [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) to start a new Angular JS project -- a Twitter clone that uses [the Github API](http://developer.github.com/v3) to store our comments -- using Gulp, Bower, and Bootstrap. We talked about the problems with [authentication and authorization](http://stackoverflow.com/questions/6556522/authentication-versus-authorization) and used [OAuth](http://oauth.net/) to [get a token from Github](https://github.com/settings/applications) for use with our application.

### Shaping Up with Angular JS, Take 3!

Work through Level 2, 3, and 4 tonight, same rules as yesterday. You should be able to breeze through level 2 on your own, but the concepts in 4 will be fuzzy. Plow through by buying answers and _typing them_ to proceed! Don't get bogged down!

### Look at all the Comments!

Using our in-class project as a reference, build your own Github-powered Twitter site. It should satisfy all the following User Stories, have a PR to your `TIY-Assignments:master` branch, and be deployed to your `TIY-Assignments` Github Pages. Include a link to the page in your WIP issue and link the PR to your WIP issue as usual. **MAKE TODOS FOR YOURSELF!!**

----

#### I can post a comment so that I can express my opinion on the internet.

* Comment text is restricted to 140 characters in length.
* You must supply a OAuth token to identify yourself.
* The new comment should be added to the page _and_ your WIP issue in the class repository.

#### I can see the list of all previous comments so that I can read the opinions of others.

* Show the name of the user who wrote the comment, their avatar (appropriately sized), and link to their Github profile.
* Include the date _and time_ that the comment was last updated.
* The body of the comment should render any included Markdown syntax.
* All comments added to your issue via Github should also appear on your page.

#### I can _edit_ a comment that I have previously made so that I can correct typos or adjust formatting.

* There should be a UI element on a comment that makes it "editable".
* The UI element should be _disabled_ for comments that I didn't create (need [a hint](https://developer.github.com/v3/users/#get-the-authenticated-user)?)
* If the comment is more than 2 minutes old, I cannot edit it (on your page).


