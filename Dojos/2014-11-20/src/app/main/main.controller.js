'use strict';

angular.module('github-profile')
  .constant('API', {
    base: 'https://api.github.com'
  })
  .run(function(Restangular, API){
    Restangular
      .setBaseUrl(API.base);
  })
  .factory('Users', function(Restangular){
    return Restangular.service('users');
  })
  .controller('MainCtrl', function(Users){
    var User = Users.one('al-the-x');

    this.user = User.get().$object;

    this.user.repos = User.all('repos')
      .getList().$object;
  });
