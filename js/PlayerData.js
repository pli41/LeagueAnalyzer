var https = require('https');
var fs = require("fs");

var getSummonerIdByName = function(name, callback1, callback2){
	
	var options_ID = {
		host: "na.api.pvp.net",
		path: `/api/lol/na/v1.4/summoner/by-name/${name}?api_key=${apiKey[0]}`,
		method: "GET"
	};
	
	var request_ID_response ='';
	var request_ID = https.request(options_ID, function(response){
		response.on("data", function(data){
			//console.log(`Data Received: ${data}`);
			request_ID_response+= data;
		});
		
		response.on("end", function(){
			console.log("request ID ends");
			var jsonData = JSON.parse(request_ID_response);
			
			if(callback1){
				if(callback2){
					callback1(jsonData[summoner_name]['id'], callback2);
				}
				else{
					callback1(jsonData[summoner_name]['id']);
				}
				
			}
		});
	});
	
	request_ID.end();
	request_ID.on("error", function(err){
		console.log(`request ID error: ${err}`);
	});
	
};


var getSummonerMatchList = function(summonerId, callback){
	
	//https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/xplzzzx?api_key=79cfb0e6-89a2-4a0b-95c0-77238c9c6afe
	
	var rankedQueues = 'TEAM_BUILDER_DRAFT_RANKED_5x5';
	var seasons = 'SEASON2016';
	
	//var startEPOCH = (new Date).getTime()/1000 | 0; // Delete decimal
	//var endEPOCH = ((new Date).getTime()/1000 - days*24*3600) | 0;

	var options = {
		host: "na.api.pvp.net",
		path:`/api/lol/na/v2.2/matchlist/by-summoner/${summonerId}?rankedQueues=${rankedQueues}&seasons=${seasons}&api_key=${apiKey[0]}`,
		method: "GET"
	};
	
	
	var request_MatchList_response ='';
	var matchIDArray = new Array();
	var request_MatchList = https.request(options, function(response){
		
		response.on("data", function(data){
			request_MatchList_response+= data;
		});
		
		response.on("end", function(){
			console.log("request Match List ends");
			var jsonData = JSON.parse(request_MatchList_response);
			
			if(callback){
				console.log('get match list has call back');
				getMatchesID(jsonData, 10, matchIDArray, callback);
			}
			else{
				getMatchesID(jsonData, 10, matchIDArray);
			};
			
			console.log(`matchIDArray: ${matchIDArray}`);
			
			
		});
	});
	
	request_MatchList.end();
	request_MatchList.on('error', function(err){
		console.log('request matchlist error: ${err}');
	});
	
}

var getMatchesID = function(jsonData, number, IDarray, GetMatchData){
	var matchesNum = jsonData['endIndex'];
	if(number < matchesNum){
		for(var i = 0; i < number; i++){
			IDarray.push(jsonData['matches'][i]['matchId']);
		};
		
		if(GetMatchData){
			GetMatchData(IDarray);
		}
	}
	else{
		throw new Exception('number exceeds total number of matches');
	};
};

var GetMatchData = function(matchIDArray){
	
	console.log(`in getMatchData with ${matchIDArray}`);
	var matchJsonData = new Array();
	var matchNum = matchIDArray.length;
	
	while(matchIDArray.length > 0){
		console.log(`${matchIDArray.length} matches left to grab`);
		var matchID = matchIDArray.shift();
		console.log(`Grabbing match ${matchID}`);
		
		var options = {
			host: "na.api.pvp.net",
			path:`https://na.api.pvp.net/api/lol/na/v2.2/match/${matchID}?api_key=${apiKey[1]}`,
			method: "GET"
		};
		
		
		
		var request_Match = https.request(options, function(response){
			var receivedData = '';
			response.on("data", function(data){
				receivedData += data;
			});
			
			response.on("end", function(){
				
				var dataJSON = JSON.parse(receivedData);
				
				if(dataJSON.status){
					console.log(`failed to get data from ${matchID} because of ${dataJSON.status.message}`);
					
					matchIDArray.unshift(matchID);
				}
				else{
					matchJsonData.push(receivedData);
					if(matchJsonData.length < matchNum){
						console.log("request current Match ends");
					}
					else{
						console.log("All matches are grabbed");
						AnalyzeMatchData(matchJsonData);
					};
				};
				
				
				
			});
		});
	
		request_Match.end();
		request_Match.on('error', function(err){
			console.log(`request match error: ${err}`);
			setTimeout(function(){
				console.log('retry');
				matchIDArray.unshift(matchID);
			}, 1000);
		});
		
	};
	
}

var AnalyzeMatchData = function(matchStrArray){
	console.log('Analyzing\n\n\n');
	//console.log(`${JSON.parse(matchJson)}`);
	
	//Combine matches and 
	var combinedMatchString = '{\"matches\":[';
	for (var i = 0; i < matchStrArray.length; i++){
		var match = matchStrArray[i];
		combinedMatchString += match;
		if(i != matchStrArray.length-1){
			combinedMatchString += ',';	
		};
	}
	combinedMatchString += ']}';
	var matchJson = JSON.parse(combinedMatchString);
	console.log(`${matchJson}`);
	fs.writeFileSync('data.json', combinedMatchString);
}
//24229424

//Inputs
var summoner_name_original = "xPLzzZx";
var apiKey = ["79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832"];

var summoner_name = summoner_name_original.toLowerCase();




getSummonerIdByName(summoner_name, getSummonerMatchList, GetMatchData);



//https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/xPLzzZx?api_key=79cfb0e6-89a2-4a0b-95c0-77238c9c6afe





