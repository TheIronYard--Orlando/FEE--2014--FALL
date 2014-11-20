'use strict';

angular.module('github-comments')
  .controller('MainCtrl', function(GistComments, Auth){
      var self = this;

      /* // Instead of all this...
      this.comments = [ ];

      Comments.getList({
        access_token: Auth.access_token
      }).then(function(comments){
        self.comments = comments;
      });
      // Do this... */
      this.comments = GistComments.getList({
        access_token: Auth.access_token
      }).$object;

      this.addComment = function(text, form){
        form.$valid && GistComments.post({ body: text })
          .then(function(comment){
            self.comments.push(comment);
          });
      };
  });
