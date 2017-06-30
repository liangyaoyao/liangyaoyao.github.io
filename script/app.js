 angular.module('Myapp',['ngRoute','Controllers'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/basic',{
		templateUrl:'./views/basic.html',
		Controller:'basicController'
	})
	.when('/education',{
		templateUrl:'./views/education.html'
		
	})
	.when('/project',{
		templateUrl:'./views/project.html'
		
	})
	.when('/skill',{
		templateUrl:'./views/skill.html'
		
	})
	
}])