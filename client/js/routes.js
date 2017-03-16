angular.module('app').config(function($stateProvider,$urlRouterProvider){

  $stateProvider.state('/',{
    url:'/',
    templateUrl: 'todo/todo.template.html',
    controller: 'TodoCtrl'
  });
});
