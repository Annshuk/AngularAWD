
/* Services */
// 
var personListService = angular.module('personListService', [])
	.factory('custmFac', ["$http", function($http){		
		 var dataFactory = {};
          dataFactory.getCustomers = function () {			
               return $http.get("http://json-generator.appspot.com/api/json/get/bOVerjVGYy").then(function(response){
			  	this.fetch = response.data;
				return fetch;
			  })

    };
	return dataFactory;
	
}]);

personListService.factory('productFac', ["$http", function($http){ 
  var productList = {};
  		productList.getList = function(){
			return $http.get("mans.json").then(function(res){
				console.log(res)
				this.data = res.data;
				return this.data;
			})	
		}
	
}])