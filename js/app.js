define([
	"angular",
	"angular-route",
	"controller",
	"controller-require",
	
], function(angular) {
	return angular
		.module("AntiAddicter", ['ngRoute','antiController'])
		.config(function($routeProvider) {
			$routeProvider
				.when('/login', {
					templateUrl: '../login.html',
					controller: 'loginCtr'
				})
				.when('/stats', {
					templateUrl: '../stats.html',
					//controller: 'playerDataCtr',
				})
				.otherwise({
					redirectTo: '/login'
				});
		}).service("userInfo", function() {
			var username = "";

		}).controller("playerData", ['$scope', "userInfo",
			function($scope, userInfo) {
				
				
				
				
				
				
				
				
			}
		])

})