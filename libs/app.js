//Start Angular 
define(['jquery', 'bs', 'angular', 'ngRoute', 'controller', 'services'], function($, bs, angular, ngRoute, controller, services) {
		var app = angular.module('myApp', ['ngRoute', 'personCntrl', 'personListService']
		 )			 
		  .config(function($routeProvider){
			$routeProvider
			.when('/home', { templateUrl: 'templates/home.htm', controller: 'CustomerListCntrl'})
			.when('/about/:customer', { templateUrl: 'templates/about.htm', controller: 'CustomerDetailCntrl'})
			.when('/login', { templateUrl: 'templates/login.htm', controller: 'loginControl'})		
			.when('/logout', { templateUrl: 'templates/home.htm', controller: 'loginOutControl'})
			.otherwise({redirectTo: '/login'});	
		});
		//ng-class active for nav menu		
angular.bootstrap(document, ['myApp']);
});









