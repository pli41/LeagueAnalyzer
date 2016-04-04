define([
"angular",
], function(angular) {
	angular.module("antiController")
	.service("userInfo", function() {
			var username = "";
			var data = "aaa";
			

	})
	.controller("loginCtr", ['$scope', '$location','$http', 'userInfo',
			function($scope, $location,$http, userInfo) {
				$scope.username = "";
				console.log(userInfo);
				$scope.getLOLInfo = function() {
					
					userInfo.username = $scope.username;
					console.log($location.path());
					$http({
        method: 'POST',
        url: '/',
        contentType: "application/json",
        data:[userInfo.username]
    }).then(function(response){
		console.log("success pp hai shi chou sha bi");
		console.log(response.data[0]);
		userInfo.data = response.data[0];
		console.log(userInfo);
		$location.path("stats");
		}, function(response){
			console.log("error!! pp is chou sha bi");
		
		}
			); 
				}
			}
		]).controller("graphCtr", ['$scope','userInfo',
		function($scope, userInfo){
			console.log(userInfo.data);
			$scope.data =  {
				labels: ['KDA', 'WinRate', 'VisionControl', 'KillContribution', 'TargetControl'],
				datasets: [
					{
					  label: 'Player's Data',
					  fillColor: 'rgba(220,220,220,0.2)',
					  strokeColor: 'rgba(220,220,220,1)',
					  pointColor: 'rgba(220,220,220,1)',
					  pointStrokeColor: '#fff',
					  pointHighlightFill: '#fff',
					  pointHighlightStroke: 'rgba(220,220,220,1)',
					  data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
					  label: 'Division Average',
					  fillColor: 'rgba(151,187,205,0.2)',
					  strokeColor: 'rgba(151,187,205,1)',
					  pointColor: 'rgba(151,187,205,1)',
					  pointStrokeColor: '#fff',
					  pointHighlightFill: '#fff',
					  pointHighlightStroke: 'rgba(151,187,205,1)',
					  data: [2.766992, 50.11637, 12.6087, 51.579, 53.069]
					}
				]
			};
// userInfo.data;
			
			
			
		}])
	
})