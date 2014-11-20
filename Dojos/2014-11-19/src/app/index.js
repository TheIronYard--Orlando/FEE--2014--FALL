'use strict';

angular.module('github-comments', [
    'ngCookies', 'restangular'
])
  .constant('API', {
    base: 'https://api.github.com',
    gist: 'c1076be081565dfe0a15',
  })
  .config(function(RestangularProvider, API){
    RestangularProvider
      .setBaseUrl(API.base)
  })
; // END module(github-comments)

// In order to override where the API data is coming from...
angular.module('github-comments-testing', [
    'github-comments'
])
  .constant('API', {
    base: '/test/fixtures/',
    gist: 'does-not-matter',
  })
