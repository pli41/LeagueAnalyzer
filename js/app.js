define([
	"angular",
	"angular-route",
	"controller",
	"controller-require",
	
], function(angular) {
	return angular
		.module("antiAddicter", ['ngRoute','antiController'])
		.config(function($routeProvider) {
			$routeProvider
				.when('/login', {
					templateUrl: '../login.html',
					controller: 'loginCtr'
				})
				.when('/stats', {
					templateUrl: '../stats.html',
					controller: 'graphCtr',
				})
				.otherwise({
					redirectTo: '/login'
				});
		}).controller("playerData", ['$scope', "userInfo",
			function($scope, userInfo) {
				
				
				
				
				
				
				
				
			}
		])

})