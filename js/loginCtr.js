define([
"angular",
], function(angular) {
	angular.module("antiController")
	.controller("loginCtr", ['$scope', '$location','$http', 'userInfo',
			function($scope, $location,$http, userInfo) {
				$scope.username = "";
				$scope.getLOLInfo = function() {
					$location.path("stats");
					userInfo.username = $scope.username;
					console.log($location.path());
					$http({
        method: 'POST',
        url: '/',
        contentType: "application/json",
        data:[userInfo.username]
    }); 
				}
			}
		])
	
})