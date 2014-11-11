### Review

Today we refactored our Github Profile to utilize `_.template()` from the Lodash library and explored the `clone()` and `append()` methods from jQuery to make our "Repositories" panel pretty. We added a form field to the `.navbar` element so that we could update the data on the page directly from the API. Unfortunately, that left our Profile a little broken... I'm sure you'll resist the temptation to figure out why.

### [Responsive Multi-Column Form](http://tympanus.net/Blueprints/ResponsiveMultiColumnForm/)

Use the Bootstrap CSS grid system to make this task _much_ easier. You should ensure that the form validates appropriate fields using [the browser built-in HTML5 validation methods](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) and make some of the fields _required_, i.e. the form will refuse to submit if those fields are omitted. Finally, register an `onsubmit` event handler with jQuery that will print the values of the form as a JavaScript dictionary via `console.log()`.

### [Full Width Image Slider](http://tympanus.net/Blueprints/FullWidthImageSlider/)

This will really exercise your jQuery FU...! Use whatever placeholder images you want -- Charlie Sheen, Bill Murray, kittens -- and whatever iconography you like -- pointing fingers, fancy arrows, chevrons -- but keep the functionality the same:

* Given a set of images inside a containing element.
* Include navigation links for "next image" and "previous image"
* Dynamically generate links to each image in the set to go (the "bullets")
* Clicking on the "next image" link should _always display the next image_ in the slide show.
* Clicking on the "previous image" link should _always display the previous image_ in the slide show.
* Clicking on the image should open a larger version of the image.
* Clicking on a "bullet" should activate the corresponding image in the slideshow.

Don't use the Bootstrap slider component directly, but you can read the JavaScript code for reference (if it helps). Don't worry about matching the example transition exactly, either: fade in and out, slide or swipe, whatever you prefer. The slides and navigation should be fully responsive, using the Bootstrap breakpoints.
