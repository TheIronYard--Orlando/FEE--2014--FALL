'use strict';

describe('controllers', function(){
  beforeEach(module('github-profile'));

  describe('MainCtrl', function(){
    var MainCtrl;

    beforeEach(inject(function($controller){
        MainCtrl = $controller('MainCtrl');
    }));

    it('should define more than 5 awesome things', inject(function() {
      expect(MainCtrl.comments.length).to.eq(0);

      MainCtrl.addComment('some text');

      expect(MainCtrl.comments.length).to.eq(1);

      expect(MainCtrl.comments[0]).to.deep.eq({
        body: 'some text'
      });
    }));
  }); // END describe(MainCtrl)
});
