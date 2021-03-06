var https = require('https');
var format = require("string-template");
var fs = require('fs');
var path = require('path');
var MyJSON2CSV = require("./MyJSON2CSV.js");
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\r\n');
  log_stdout.write(util.format(d) + '\r\n');
};

var summoner_name_original = "Andybendy"; //21103810
var summoner_id_original = 21103810;

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2",'55c0033d-23b5-4cb6-8104-e0d5311073b2'];

var requestCount = 0;
var requestTracker = 0;
var requestQueue = 0;
var csvPath = `../PlayerData/CSV/CRAWLER/`;	
var filename = `crawler`;	
var Interval = 5000;

var matchIDCrawled = new Array();
var summonerIDCrawled = new Array();
	
function getSummonerIdByName(name, csvPath, filename) {
	requestQueue++;
    setTimeout(function () {
		var summoner_name_escaped= encodeURI(name);
		var summoner_name_trimmed = name.replace(/\s+/g, '');
		var jsonData = "";
		requestCount++;
		var key = apiKey[requestCount%apiKey.length];
		var options_ID = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v1.4/summoner/by-name/{summoner_name_escaped}?api_key={key}", {summoner_name_escaped: summoner_name_escaped, key: key}),
			method: "GET"
		};
		
		var request_response = '';
		var request = https.request(options_ID, function(response){
			response.on("data", function(data){
				request_response += data;
			});
			
			response.on("end", function(){
				requestTracker++;
				requestQueue--;
				try{
					jsonData = JSON.parse(request_response);	
				} catch(e) {
					console.log(e);
					console.log(`Retry ${summonerId} from getSummonerIdByName`);
					getLeagueById(summonerId, csvPath, filename);
					return;
				}
				if(jsonData.status){
					console.log(format("failed to get summoner id by name from {name} because of {message}", {name: name, message: jsonData.status.message}));
					if(jsonData.status.status_code == 400) {
						console.log(`Bad Request from getSummonerIdByName`);
					} else if(jsonData.status.status_code === 401){
						console.log(`Unauthorized from getSummonerIdByName`);
						return;
					} else if(jsonData.status.status_code === 404){
						console.log(`Match not found from getSummonerIdByName`);
						return;
					} else if(jsonData.status.status_code === 429){
						console.log(`Rate limit exceeded  with apiKey ${key}. Retry.`);
						console.log(`Retry ${summonerId} from getSummonerIdByName`);
						getSummonerIdByName(name, csvPath, filename);
					} else if(jsonData.status.status_code === 500){
						console.log(`Internal server error from getSummonerIdByName`);
						return; 
					} else if(jsonData.status.status_code === 503){
						console.log(`Service unavailable from getSummonerIdByName`);
						return;
					} else {
						console.log(`Invalid Status Code from getSummonerIdByName`);
						return;
					}
				} else{
					console.log(`request LeagueByID ends summonerId ${summonerId}`);		
					writeFile(`${request_response}\r\nSummonerIdByName`, `${csvPath}${filename}_${requestTracker-1}.json`);			
				}		
			});
		});
		
		request.end();
		request.on("error", function(err){
			console.log(`request SummonerIdByName summonerId ${summonerId}error: ${err}`);
			console.log(`Retry ${summonerId} from getSummonerIdByName`);
			getSummonerIdByName(name, csvPath, filename);
		});
	}, (requestQueue-1)*Interval);
}

function getLeagueById(summonerId, csvPath, filename){
	requestQueue++;
    setTimeout(function () {
		var jsonData = "";
		requestCount++;
		var key = apiKey[requestCount%apiKey.length];
		var options = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v2.5/league/by-summoner/{summoner_id}?api_key={key}", {summoner_id: summonerId, key: key}),
			method: "GET"
		};
			
		var request_response = '';
		var request = https.request(options, function(response){
			response.on("data", function(data){
				request_response += data;
			});
			
			response.on("end", function(){
				requestTracker++;
				requestQueue--;
				try{
					jsonData = JSON.parse(request_response);	
				} catch(e) {
					console.log(e);
					console.log(`Retry ${summonerId} from getLeagueById`);
					getLeagueById(summonerId, csvPath, filename);
					return;
				}
				if(jsonData.status){
					console.log(format("failed to get league data from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
					if(jsonData.status.status_code == 400) {
						console.log(`Bad Request from getLeagueById`);
					} else if(jsonData.status.status_code === 401){
						console.log(`Unauthorized from getLeagueById`);
						return;
					} else if(jsonData.status.status_code === 404){
						console.log(`Match not found from getLeagueById`);
						return;
					} else if(jsonData.status.status_code === 429){
						console.log(`Rate limit exceeded  with apiKey ${key}. Retry.`);
						console.log(`Retry ${summonerId} from getLeagueById`);
						getLeagueById(summonerId, csvPath, filename);
					} else if(jsonData.status.status_code === 500){
						console.log(`Internal server error from getLeagueById`);
						return; 
					} else if(jsonData.status.status_code === 503){
						console.log(`Service unavailable from getLeagueById`);
						return;
					} else {
						console.log(`Invalid Status Code from getLeagueById`);
						return;
					}
				} else{
					console.log(`request LeagueByID ends summonerId ${summonerId}`);
					writeFile(`${request_response}\r\nLeagueById`, `${csvPath}${filename}_${requestTracker-1}.json`);
				}
			});
		});

		request.end();
		request.on("error", function(err){
			console.log(`request LeagueById summonerId ${summonerId} error: ${err}`);
			console.log(`Retry ${summonerId} from getLeagueById`);
			getLeagueById(summonerId, csvPath, filename);
		});
	}, (requestQueue-1)*Interval);
}

function getLeagueData(summonerId, csvPath, filename){
	requestQueue++;
    setTimeout(function () {
		var jsonData = "";
		requestCount++;
		var key = apiKey[requestCount%apiKey.length];
		var options = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v2.5/league/by-summoner/{summoner_id}/entry?api_key={key}", {summoner_id: summonerId, key: key}),
			method: "GET"
		};
		
		var request_response = '';
		var request = https.request(options, function(response){
			response.on("data", function(data){
				request_response += data;
			});
			
			response.on("end", function(){
				requestTracker++;
				requestQueue--;
				try{
					jsonData = JSON.parse(request_response);	
				} catch(e) {
					console.log(e);
					console.log(`Retry ${summonerId} from getLeagueData`);
					getLeagueData(summonerId, csvPath, filename);
					return;
				}
				if(jsonData.status){
					console.log(format("failed to get league data(entry) from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
					if(jsonData.status.status_code == 400) {
						console.log(`Bad Request from getLeagueData`);
					} else if(jsonData.status.status_code === 401){
						console.log(`Unauthorized from getLeagueData`);
						return;
					} else if(jsonData.status.status_code === 404){
						console.log(`Match not found from getLeagueData`);
						return;
					} else if(jsonData.status.status_code === 429){
						console.log(`Rate limit exceeded  with apiKey ${key}. Retry.`);
						console.log(`Retry ${summonerId} from getLeagueData`);
						getLeagueData(summonerId, csvPath, filename);
					} else if(jsonData.status.status_code === 500){
						console.log(`Internal server error from getLeagueData`);
						return; 
					} else if(jsonData.status.status_code === 503){
						console.log(`Service unavailable from getLeagueData`);
						return;
					} else {
						console.log(`Invalid Status Code from getLeagueData`);
						return;
					}
				} else {
					console.log(`request League(entry) ends summonerId ${summonerId}`);
					writeFile(`${request_response}\r\ngetLeagueData`, `${csvPath}${filename}_${requestTracker-1}.json`);
				}
			});
		});
		request.end();
		request.on("error", function(err){
			console.log(`request LeagueData summonerId ${summonerId} error: ${err}`);
			console.log(`Retry ${summonerId} from LeagueData`);
			getLeagueData(summonerId, csvPath, filename);
		});
	}, (requestQueue-1)*Interval);
}
							
							
var getSummonerMatchList = function(summonerId, rankedQueues, seasons, callback1, callback2, csvpath, filename){
	requestQueue++;
    setTimeout(function () {
		var jsonData = "";
		rankedQueues = 'RANKED_SOLO_5x5'; //TEAM_BUILDER_DRAFT_RANKED_5x5 RANKED_SOLO_5x5 RANKED_TEAM_5x5 RANKED_TEAM_3x3
		seasons = 'SEASON2016';
		requestCount++;
		var key = apiKey[requestCount%apiKey.length];
		var options = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v2.2/matchlist/by-summoner/{summoner_id}?rankedQueues={rankedQueues}&seasons={seasons}&api_key={key}", {summoner_id: summonerId, rankedQueues: rankedQueues, seasons: seasons, key: key}),
			method: "GET"
		};
		
		var request_response =' ';
		var request = https.request(options, function(response){	
			response.on("data", function(data){
				request_response += data;
			});	
			response.on("end", function(){
				requestTracker++
				requestQueue--;
				try{
					jsonData = JSON.parse(request_response);	
				} catch(e) {
					console.log(e);
					console.log(`Retry ${summonerId} from getSummonerMatchList`);
					getSummonerMatchList(summonerId, rankedQueues, seasons, callback1, callback2, csvpath, filename);
					return;
				}
				var matchesNum = jsonData['totalGames'];
				if(matchesNum != 0) {
					if(jsonData.status){
						console.log(format("failed to get match list from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
						if(jsonData.status.status_code == 400) {
							console.log(`Bad Request from getSummonerMatchList`);
						} else if(jsonData.status.status_code === 401){
							console.log(`Unauthorized from getSummonerMatchList`);
							return;
						} else if(jsonData.status.status_code === 404){
							console.log(`Match not found from getSummonerMatchList`);
							return;
						} else if(jsonData.status.status_code === 429){
							console.log(`Rate limit exceeded  with apiKey ${key}. Retry.`);
							console.log(`Retry ${summonerId} from getSummonerMatchList`);
							getSummonerMatchList(summonerId, rankedQueues, seasons, callback1, callback2, csvpath, filename);
							return;
						} else if(jsonData.status.status_code === 500){
							console.log(`Internal server error from getSummonerMatchList`);
							return; 
						} else if(jsonData.status.status_code === 503){
							console.log(`Service unavailable from getSummonerMatchList`);
							return;
						} else {
							console.log(`Invalid Status Code from getSummonerMatchList`);
							return;
						}
					} else {
						console.log(`request Match List ends summonerId ${summonerId}, totalGames ${matchesNum}`);
						writeFile(`${request_response}\r\nSummonerMatchList`, `${csvPath}${filename}_${requestTracker-1}.json`);
						if(callback1){
							for(var i=0;i<matchesNum;i++){
								callback1(jsonData['matches'][i]['matchId'], true, summonerId, callback2, csvpath, filename);
							}
							//summonerIDCrawled.push(summonerId);
						}
					}
				}
			});
		});
		
		request.end();
		request.on('error', function(err){
			console.log(`request SummonerMatchList summonerId ${summonerId} error: ${err}`);
			console.log(`Retry ${summonerId} from getSummonerMatchList`);
			getSummonerMatchList(summonerId, rankedQueues, seasons, callback1, callback2, csvpath, filename);
		});
	}, (requestQueue-1)*Interval);
}						

var GetMatchData = function(matchID, includeTimeline, summonerId, callback, csvpath, filename){
	if(matchIDCrawled.indexOf(matchID) != -1){
		console.log(`${matchID} already crawled. Skip.`);
		return;
	}
	requestQueue++;
    setTimeout(function () {
		var jsonData = "";
		requestCount++;
		var key = apiKey[requestCount%apiKey.length];
		var options = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v2.2/match/{matchID}?includeTimeline={includeTimeline}&api_key={key}", {matchID: matchID, includeTimeline: includeTimeline, key: key}),
			method: "GET"
		};
		var request_response = '';	
		var request = https.request(options, function(response){
			response.on("data", function(data){
				request_response += data;
			});
			
			response.on("end", function(){
				requestTracker++
				requestQueue--;
				try{
					jsonData = JSON.parse(request_response);	
				} catch(e) {
					console.log(e);
					console.log(`Retry ${matchID} from GetMatchData`);
					GetMatchData(matchID, includeTimeline, summonerId, callback, csvpath, filename);
					return;
				}
				if(jsonData.status){
					console.log(`failed to get match data from ${matchID} because of ${jsonData.status.status_code} ${jsonData.status.message}`);
					if(jsonData.status.status_code == 400) {
						console.log(`Bad Request from GetMatchData`);
					} else if(jsonData.status.status_code === 401){
						console.log(`Unauthorized from GetMatchData`);
						return;
					} else if(jsonData.status.status_code === 404){
						console.log(`Match not found from GetMatchData`);
						return;
					} else if(jsonData.status.status_code === 429){
						console.log(`Rate limit exceeded  with apiKey ${key}. Retry.`);
						console.log(`Retry ${matchID} from GetMatchData`);
						GetMatchData(matchID, includeTimeline, summonerId, callback, csvpath, filename);
						return;
					} else if(jsonData.status.status_code === 500){
						console.log(`Internal server error from GetMatchData`);
						return; 
					} else if(jsonData.status.status_code === 503){
						console.log(`Service unavailable from GetMatchData`);
						return;
					} else {
						console.log(`Invalid Status Code from GetMatchData`);
						return;
					}
				} else {
					console.log(`request Match Data ends matchID ${matchID}`);
					writeFile(`${request_response}\r\nMatchData`, `${csvPath}${filename}_${requestTracker-1}.json`);
					matchIDCrawled.push(matchID);
					var participantIdentities = jsonData['participantIdentities'];
					var participantNum = participantIdentities.length;
					for(var i=0;i<participantNum;i++){
						var new_summonerID = participantIdentities[i]['player']['summonerId'];
						if(new_summonerID != summonerId){
							callback(new_summonerID, null, null, GetMatchData, callback, csvpath, filename);
						}
					}
				}
			});
		});

		request.end();
		request.on('error', function(err){
			console.log(`request GetMatchData matchID ${matchID} error: ${err}`);
			console.log(`Retry ${matchID} from GetMatchData`);
			GetMatchData(matchID, includeTimeline, summonerId, callback, csvpath, filename);
			return;
		});
	}, (requestQueue-1)*Interval);	
}
							
//getLeagueData(summoner_id_original);
//getSummonerMatchList(summoner_id_original,null,null,GetMatchData, getSummonerMatchList);

crawler(summoner_id_original);
//console.log(requestCount);
//MyJSON2CSV.MyJSON2CSV(leagueDataResult, "leagueData", null, null, null);



function crawler(summonerID) {
	var session = readFile(`${csvPath}${filename}_matchID.s`);
	if(session != null) {
		matchIDCrawled = session.split("\r\n");
		console.log(`session recovered. Total ${matchIDCrawled.length} matchess crawled`);
		console.log(matchIDCrawled);
	}
	process.on('SIGINT', function() {
		console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
		// some other closing procedures go here
		if(matchIDCrawled != null) {
			var matchID_temp = matchIDCrawled.join("\r\n");
			//var summonerID_temp = summonerIDCrawled.join("\r\n");
			writeFile(matchID_temp,`${csvPath}${filename}_matchID.s`);
		}
		//writeFile(summonerID_temp,`${csvPath}${filename}_summonerID.s`);
		process.exit();
	})
	getSummonerMatchList(summonerID, null, null, GetMatchData, getSummonerMatchList, csvPath, filename);
}


function writeFile(data, path){
	try{
		fs.writeFileSync(path, data);
	} catch(e) {
		console.log(e);
	}
}

function readFile(path) {
	var data = null;
	try{
		var data = fs.readFileSync(path).toString();
	} catch(e) {
		if (e.code !== 'ENOENT') {
			console.log(e);
		}
	}
	return data;
}

