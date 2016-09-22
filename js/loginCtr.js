define([
    "angular",
], function(angular) {
    angular.module("antiController")
        .service("userInfo", function() {
            var username = "";
            var data = "aaa";
        })
        .controller("loginCtr", ['$scope', '$location', '$http', '$interval', 'userInfo',
            function($scope, $location, $http, $interval, userInfo) {

                $scope.message = "";
                var d = new Date();
                var content = "System Initializing...\n" +
					"...\n" +
					"...\n" +
					"DONE\n" +
					"" + 'Rank Analysis System Online' + "\n" +
                    "" + d.toString() + "\n" +
					"\n" +
                    "Enter your summoner name: \n";


                $scope.typein = "";
                var i = 0;

                var timer = $interval(function() {
                    if (i < content.length) {
                        $scope.typein += content[i];
                    } else
                        $interval.cancel(timer);

                    i++;
                }, 10);

                $scope.username = "";
                $scope.getLOLInfo = function() {
                    $scope.message = "\n\n" +
							"$ Waiting";
					
					var j = 0;
					var waiting = true;
					var periodNum = 0;
					var timer1 = $interval(function() {
                    if (waiting)
            
						if(periodNum > 5){
							$scope.message = "\n\n" +
							"$ Waiting";
							periodNum = 0;
						}
						else{
							$scope.message += '.';
							periodNum++;
						}
                    else
                        $interval.cancel(timer1);
                    j++;
					}, 100);
					
					
                    userInfo.username = $scope.username;
                    console.log(userInfo.username);
                    $http({
                        method: 'GET',
                        url: '/',
                        contentType: "application/json",
                        data: [userInfo.username]
                    }).then(function(response) {
						waiting = false;
                        //console.log(response.data[0]);
                        userInfo.data = response.data[0];
                        userInfo.username = response.data[0].name;
						
                        //console.log(userInfo);
                        $location.path("stats");
                    }, function(response) {
						waiting = false;
						console.log(response);
                        $scope.message = "\n$ Error! " +
						response.data +
						"!\n" +
						"$ Please retry in 10 seconds!";
						
						
						
                    });

                }
            }
        ]).controller("graphCtr", ['$scope', 'userInfo','$routeParams','$location',
            function($scope, userInfo,$routeParams,$location) {
		
				if (userInfo.username == undefined){
					$location.path("login");
				}else {
                console.log(userInfo);
				$curlocation = $location.path();
				//console.log(userInfo.data.ADC.ThisTier.CS_zeroToTenPerMatch_ADC);
                $scope.username = userInfo.username;
                $scope.playerData = userInfo.data;
                $scope.data = {
                    labels: ['KDA', 'BattleEfficiency', 'VisionControl', 'KillContribution', 'ObjectiveControl', 'Farming'],
                    datasets: [{
                        label: 'Player\'s Data',
                        fillColor: 'rgba(255,204,0,0.5)',
                        strokeColor: 'rgba(255,204,0,1)',
                        pointColor: 'rgba(255,204,0,1)',

                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [userInfo.data.KDA_graph, userInfo.data.BE_graph, userInfo.data.VisionControl_graph, userInfo.data.KillContribution_graph, userInfo.data.TargetControl_graph, userInfo.data.GPM_scaled]

                    }, {
                        label: 'Tier Average',
                        fillColor: 'rgba(151,187,205,0.5)',
                        strokeColor: 'rgba(151,187,205,1)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(255,204,0,1)',
                        data: [userInfo.data.KDA_avg_graph, userInfo.data.BE_avg_graph, userInfo.data.VisionControl_avg_graph, userInfo.data.KillContribution_avg_graph, userInfo.data.TargetControl_avg_graph, userInfo.data.GPM_avg_scaled]
                    }]
                };
                $scope.versatility = {
                    labels: ['Top', 'Support', 'Adc', 'Jungle', 'Mid'],
                    datasets: [{
                        label: 'Player\'s',
                        fillColor: 'rgba(255,204,0,0.5)',
                        strokeColor: 'rgba(255,204,0,1)',
                        pointColor: 'rgba(255,204,0,1)',

                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [userInfo.data.TopPlayed, userInfo.data.SupportPlayed, userInfo.data.AdcPlayed, userInfo.data.JunglePlayed, userInfo.data.MidPlayed],

                    }]
                };
                $scope.options = {

                    // Sets the chart to be responsive
                    responsive: true,

                    //Boolean - Whether to show lines for each scale point
                    scaleShowLine: true,

                    //Boolean - Whether we show the angle lines out of the radar
                    angleShowLineOut: true,

                    //Boolean - Whether to show labels on the scale
                    scaleShowLabels: false,

                    // Boolean - Whether the scale should begin at zero
                    scaleBeginAtZero: true,

                    //String - Colour of the angle line
                    angleLineColor: 'rgba(0,220,0,0.1)',

                    //Number - Pixel width of the angle line
                    angleLineWidth: 1.5,

                    //String - Point label font declaration
                    pointLabelFontFamily: '"Arial"',

                    //String - Point label font weight
                    pointLabelFontStyle: 'normal',

                    //Number - Point label font size in pixels
                    pointLabelFontSize: 12,

                    //String - Point label font colour
                    pointLabelFontColor: 'rgba(0,220,0,1)',

                    //Boolean - Whether to show a dot for each point
                    pointDot: true,

                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 3,

                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,

                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,

                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,

                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,

                    //Boolean - Whether to fill the dataset with a colour
                    datasetFill: true,

                    //String - A legend template
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0;i<datasets.length;i++){%><li><span><%if(datasets[i].label){%><%=datasets[i].label%><span>&nbsp&nbsp</span><span style=\"background-color:<%=datasets[i].fillColor%> \">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><%}%></span></li><%}%></ul>"

                };
				
				$scope.adcPlayed = userInfo.data.AdcPlayed;
				$scope.junglePlayed = userInfo.data.JunglePlayed;
				$scope.supportPlayed = userInfo.data.SupportPlayed;
				$scope.topPlayed = userInfo.data.TopPlayed;
				
				
				}
				
				
            }
        ])

})