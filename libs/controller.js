'use strict';
/* Controllers */
var personCntrl = angular.module('personCntrl',[])
  //nav menu controll for handling active class and login section
  .controller('NavCtrl', function($scope, $location, $routeParams) {
	   $scope.dashboard = false; 
	   $scope.isLogin = false
	   	
	   $scope.isActive = function(path) {	   							
			if ($location.path().substr(0, path.length) === path) return 'active'; 
			else return '';
		};

		
		$scope.$on('postlogin', function(){			
			$scope.dashboard = true;
			$scope.isLogin = true
		});	
		
		$scope.$on('prelogin', function(){			
			$scope.dashboard = false; 	
			$scope.isLogin = false
		});
	})	
	
	.controller('loginOutControl', function($rootScope, $scope, $location){
			$rootScope.$broadcast('prelogin');	
			$location.path("/login");
	})	 
	.controller('loginControl', function($scope, $location){
			$scope.login = function(){	
			$location.path("/home");				 			
	}
})
//showing data after login 
.controller('CustomerListCntrl', ['$scope', '$rootScope', 'custmFac',  function($scope, $rootScope, custmFac) {	
	  $rootScope.$broadcast('postlogin');
	  $scope.title = 'Angular Dashboard';	  
	   custmFac.getCustomers({cache:false}).then(function(response){
			$scope.getData = angular.forEach(response, function(data){
				return data;
			});
			
	   });
  }])
  //showing customer listing for related customer. 
 .controller('CustomerDetailCntrl', function ($scope, $rootScope, $routeParams, custmFac){
	  $rootScope.$broadcast('postlogin');
         $scope.name = $routeParams.customer;			 
         custmFac.getCustomers().then(function(data) {			  
		    $scope.customers = data.filter(function(entry){				
               return entry.name === $scope.name;
            })[0];
        });
    })




