(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!
  angular.module('todomvc', [ ])
    .factory('TaskList', [ '$filter', '$http', function($filter, $http){
      return self = {
        tasks: [ ],
        get: function(){
          return $http.get("tasks.json")
            .success(function(data){
              self.tasks = data;
            })
        },
        completed: function(){
          return $filter('filter')(self.tasks, function(task){
            return !task.completed;
          });
        },
        addTask: function(task){
          self.tasks.push({ text: task });
        },
        removeTask: function(task){
        },
        editTask: function(task, text){
          task.text = text;

          self.cancelEditing(task);
        },
        startEditing: function(task){
          task.editing = true;
        },
        cancelEditing: function(task){
          task.editing = false;
        },
      };
    } ]) // END factory(TaskList)
    .controller('Ctrl', [ 'TaskList', function(TaskList){
      console.log(TaskList);
      var self = this,
          tasks = this.tasks = [ ];

      TaskList.get().success(function(){
        tasks = self.tasks = TaskList.tasks;
      });

      this.completed = TaskList.completed;

      this.startEdit = TaskList.startEditing;

      this.editTask = TaskList.editTask;

      this.cancelEdit = function($event, task){
        if ( $event.keyCode === 27 ){
          task.editing = false;
        }
      }

      this.addTask = function($event, task){
        if ( $event.keyCode === 13 ){
          TaskList.addTask(task);
        }
      }

    } ]) // END controller(Ctrl)
  ; // END module(todomvc)

})( window );
