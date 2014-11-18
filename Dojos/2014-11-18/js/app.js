(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!
  angular.module('todomvc', [ ])
    .controller('Ctrl', function(){
      this.tasks = [
        { text: 'thing in controller 1' },
        { text: 'thing in controller 2' },
      ];

      this.startEdit = function($event, task){
        console.log($event);
        task.editing = true;
      }

      this.cancelEdit = function($event, task){
        if ( $event.keyCode === 27 ){
          task.editing = false;
        }
      }
    })
  ; // END module(todomvc)

})( window );
