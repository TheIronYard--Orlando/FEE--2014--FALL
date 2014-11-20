'use strict';

angular.module('github-profile')
  .constant('API', {
    base: 'https://api.github.com'
  })
  .controller('MainCtrl', function(Restangular, API){
    Restangular
      .setBaseUrl(API.base);


    /* // Instead of this...
    var self = this;

    this.user = { };

    Restangular.one(
      'users', 'al-the-x'
    ).get()
      .then(function(data){
        self.user = data;
      });
    // Do this... */
    var User = Restangular.one(
      'users', 'al-the-x'
    )

    var userPromise = User.get()

    this.user = userPromise.$object;

    var UserRepos = User.all('repos');

    this.repos = UserRepos.getList().$object;

    /*
    Restangular.one('users', 'al-the-x')
      .all('repos').get();
    */
  });
