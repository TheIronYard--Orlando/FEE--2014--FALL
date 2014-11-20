'use strict';

angular.module('github-profile', [
    'ngCookies', 'restangular', 'ui.router'
])
  /** // Don't need this... yet!
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  */
;
