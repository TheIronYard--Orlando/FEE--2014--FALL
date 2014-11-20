'use strict';

describe('controllers', function(){
  beforeEach(module('github-profile'));

  beforeEach(inject(function(API, $httpBackend){
    /* // Instead of...
    $httpBackend.when('GET',
      API.base + '/users/al-the-x'
    ).respond(
      { login: 'al-the-x' }
    );

    $httpBackend.when('GET',
      API.base + '/users/al-the-x/repos'
    ).respond([
      // This doesn't matter UNTIL I TEST IT.
    ]);
    // Do this... */

    [
      [ 'GET', '/users/al-the-x',
        { login: 'al-the-x' }
      ],
      [ 'GET', '/users/al-the-x/repos',
        [ /* TODO: Put stuff here... */ ]
      ]
    ].forEach(function(item){
      $httpBackend.when(item[0],
        API.base + item[1]
      ).respond(item[2]);
    });

  }));

  it('should get User data from the api',
    inject(function($controller, $httpBackend){
      $httpBackend.expectGET(
        'https://api.github.com/users/al-the-x'
      );
      $httpBackend.expectGET(
        'https://api.github.com/users/al-the-x/repos'
      );

      var MainCtrl = $controller('MainCtrl');

      assert.deepEqual(MainCtrl.user, { });

      $httpBackend.flush();

      assert.equal(MainCtrl.user.login,
        'al-the-x');
  }));

  describe('MainCtrl', function(){
    var MainCtrl;

    beforeEach(inject(function($controller){
        MainCtrl = $controller('MainCtrl');
    }));

    it('should do something else one day',
      inject(function(){
    }));

  }); // END describe(MainCtrl)
});
