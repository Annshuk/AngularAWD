require.config({
	baseUrl: "libs",
	paths:{
		"jquery"  : "jquery/1.10.2/jquery-min",
		"angular" : "angular/angular.min",
		"ngRoute" : "angular/angularRoute",
		"bs" : "bootstraps/js/bootstrap.min",
		"controller" : "controller",
		"services" : "services"		
	},
	shim: {
		'jquery' : {exports: '$'},
		'bs' : {deps: ['jquery']},
		'angular' : {exports: 'angular'},
		'ngRoute' : {deps: ['angular']}, 
		"controller":{deps: ['angular']},
		"services": {deps: ['angular']}		
	}
	
});
require(['app']);