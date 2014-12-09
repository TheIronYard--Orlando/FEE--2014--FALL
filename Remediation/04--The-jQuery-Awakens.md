### Objectives

Demonstrate understanding of:

* Using Bower to install front-end dependencies
* Using jump links to provide backwards-compatible default behavior
* Using jQuery to provide progressive enhancement
* Using CSS transitions to hide and reveal elements

### Instructions

* Name your branch `jquery-awakens`

#### Add a mobile-only menu

* Add a navigation menu to the bottom of your site containing the following links:
    * **Menu**: back to the top of the page
    * **About**: your personal information on the site
    * **Github**: your Github profile
    * **LinkedIn**: your LinkedIn profile
* Add a "hamburger" menu icon to the top of the page that only appears on mobile views
* Link the menu icon to the footer menu;
* Style the footer menu to take up the whole screen when active, only on mobile views
* Open a PR, review, and merge to master; _don't delete the branch_.

#### Use better tools...

* Convert your `layouts/_default.html` to match the `index.html` file in [the HTML5 Boilerplate project](http://html5boilerplate.com)
* Install [Bower](http://bower.io) if you haven't already.
* Use the `bower` command to install the following and _save them_ as dependencies:
    * [jQuery](http://jquery.com)
    * [Bootstrap](http://getbootstrap.com)
* Link both dependencies into your `default` layout file
* Use [the Bootstrap responsive grid](http://getbootstrap.com/css/#grid) _only_ to replace your hand-rolled media queries
* Use jQuery to progressively enhance your mobile menu:
    * When the page is loaded...
        * copy the contents of the footer menu
        * add it to the `<body>` tag _ahead of_ the main container `<div>`
        * ensure that it is not visible inside the viewport
    * When the menu icon is clicked...
        * reveal the hidden menu with a "push down" transition using CSS
        * the menu should "push" the page content down when revealed
    * When the "Menu" menu item is clicked...
        * hide the menu again with another CSS transition
    * Neither clicking the menu icon or the "Menu" menu item should trigger the regular jump link location.
* Make your external links open in a new window / tab:
    * Add the attribute `rel="external"` to your Github and LinkedIn links in the footer menu
    * Use jQuery to apply a `click` event handler to any link with that `rel` attribute
    * Instead of the default behavior make the link open a new window / tab with `window.open`
