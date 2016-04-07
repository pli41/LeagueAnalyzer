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

                $scope.isWaiting = false;
                var d = new Date();
                var content = "$ System Initializing...\n" +
					"...\n" +
					"...\n" +
					"DONE\n" +
                    "$ " + d.toString() + "\n" +
                    "$ Launching info hack \n" +
					"\n" +
                    "$ Enter a valid summoner name: \n";


                $scope.typein = "";
                var i = 0;

                var timer = $interval(function() {
                    if (i < content.length) {
                        $scope.typein += content[i];
                    } else
                        $interval.cancel(timer);

                    i++;
                }, 50);

                $scope.username = "";
                $scope.getLOLInfo = function() {
                    $scope.isWaiting = true;

                    userInfo.username = $scope.username;
                    console.log($location.path());
                    $http({
                        method: 'POST',
                        url: '/',
                        contentType: "application/json",
                        data: [userInfo.username]
                    }).then(function(response) {

                        console.log("success pp hai shi chou sha bi");
                        //console.log(response.data[0]);
                        userInfo.data = response.data[0];

                        //console.log(userInfo);
                        $location.path("stats");
                    }, function(response) {
                        $scope.isWaiting = false;
                        console.log("error!! pp is chou sha bi");

                    });

                }
            }
        ]).controller("graphCtr", ['$scope', 'userInfo',
            function($scope, userInfo) {
                console.log(userInfo.data);
                $scope.username = `Analysis of ${userInfo.data.name}`;

                $scope.data = {
                    labels: ['KDA', 'WinRate', 'VisionControl', 'KillContribution', 'TargetControl'],
                    datasets: [{
                        label: 'Player\'s Data',
                        fillColor: 'rgba(255,204,0,0.5)',
                        strokeColor: 'rgba(255,204,0,1)',
                        pointColor: 'rgba(255,204,0,1)',

                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [userInfo.data.KDA, userInfo.data.WinRate, userInfo.data.VisionControl, userInfo.data.KillContribution, userInfo.data.TargetControl]

                    }, {
                        label: 'Division Average',
                        fillColor: 'rgba(151,187,205,0.5)',
                        strokeColor: 'rgba(151,187,205,1)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(255,204,0,1)',
                        data: [userInfo.data.KDA_avg, userInfo.data.WinRate_avg, userInfo.data.VisionControl_avg, userInfo.data.KillContribution_avg, userInfo.data.TargetControl_avg]
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
                    angleLineColor: 'rgba(0,0,0,.1)',

                    //Number - Pixel width of the angle line
                    angleLineWidth: 1,

                    //String - Point label font declaration
                    pointLabelFontFamily: '"Arial"',

                    //String - Point label font weight
                    pointLabelFontStyle: 'normal',

                    //Number - Point label font size in pixels
                    pointLabelFontSize: 10,

                    //String - Point label font colour
                    pointLabelFontColor: '#666',

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
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%> \"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

                };


            }
        ])

})