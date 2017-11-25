var toDoApp=angular.module('toDoApp',['ui.router','ngSanitize']);

toDoApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('login',{
		
		url:'/login',
		templateUrl:'template/login.html',
		controller:'loginController'
	});
	
	$stateProvider.state('register',{
		url:'/register',
		templateUrl:'template/register.html',
		controller:'registerController'
	});
	
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'template/home.html',
		controller:'homeController'
	});
	
	$stateProvider.state('forgetPassword',{
		url:'/forgetPassword',
		templateUrl:'template/forgetPassword.html',
		controller:'passwordController'
	});
	
	$stateProvider.state('setPassword',{
		url:'/setPassword',
		templateUrl:'template/setPassword.html',
		controller:'setPasswordController'
	});
	
	$stateProvider.state('Trash',{
		url:'/Trash',
		templateUrl:'template/Trash.html',
		controller:'homeController'
	});
	
	$stateProvider.state('Archive',{
		url:'/Archive',
		templateUrl:'template/Archive.html',
		controller:'homeController'
	});
	
	
	$urlRouterProvider.otherwise('login');
	}
	]);