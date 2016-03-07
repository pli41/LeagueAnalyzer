define([
	"angular",
	"angular-route",
], function(angular) {
	return angular
		.module("AntiAddicter", ['ngRoute'])
		.config(function($routeProvider) {
			$routeProvider
				.when('/login', {
					templateUrl: '../login.html',
					controller: 'loginCtr'
				})
				.when('/stats', {
					templateUrl: '../stats.html',
					controller: 'playerData',
				})
				.otherwise({
					redirectTo: '/login'
				});
		}).service("userInfo", function() {
			var username = "";

		}).controller("loginCtr", ['$scope', '$location', 'userInfo',
			function($scope, $location, userInfo) {
				$scope.username = "";
				$scope.getLOLInfo = function() {
					$location.path("stats");
					userInfo.username = $scope.username;
					console.log($location.path());
				}
			}
		]).controller("playerData", ['$scope', "userInfo",
			function($scope, userInfo) {}
		])

})