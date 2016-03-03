var app = angular.module("AntiAddicter",['ngRoute']);


app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'login.html',
                controller  : 'loginCtr'
            })
            .when('/stats', {
                templateUrl : 'stats.html',
                controller : 'playerData',
            })
            .otherwise({
                    redirectTo: '/'
                });
            
    });

app.service("userInfo",function(){

var username = "";


});

app.controller("loginCtr",['$scope', '$location', 'userInfo', function($scope,$location,userInfo) {
	$scope.username="";
	$scope.getLOLInfo = function() {
		$location.path("stats");
    userInfo.username = $scope.username;
		console.log ($location.path());
	}

}])