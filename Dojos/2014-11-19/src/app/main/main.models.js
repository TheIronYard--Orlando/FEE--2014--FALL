'use strict';

angular.module('github-comments')
  /**
   * NOTE: Not the safest thing to keep your access token in $cookies...
   */
  .factory('Auth', function(User, $cookies){
      return {
        username: $cookies.username,
        access_token: $cookies.access_token,
        clear: function(){
          this.username = !delete $cookies.username;
          this.access_token = !delete $cookies.access_token;
        },
        login: function(token){
          return User.get({ access_token: token })
            .then((function(user){
              this.username = $cookies.username = user.login;
              this.access_token = $cookies.access_token = token;
            }).bind(this))
        }
      }; // END { }
  }) // END factory(Auth)
  // @see https://github.com/mgonto/restangular#decoupled-restangular-service
  .factory('User', function(Restangular){
    return Restangular.service('user');
  })
  .factory('Gist', function(Restangular, API){
      return Restangular.one('gists', API.gist);
  })
  .factory('GistComments', function(Restangular, Gist){
      return Restangular.service('comments', Gist);
  })
; // END module
