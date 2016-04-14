var leagueDataArray = new Array();

var bronzeDataArray = new Array();
var silverDataArray = new Array();
var goldDataArray = new Array();
var platinumDataArray = new Array();
var diamondDataArray = new Array();
var masterDataArray = new Array();
var challengerDataArray = new Array();

bronzeDataArray = {
 'KDA_AVG': 2.432092,
 'WINRATE_AVG': 45.94,
 'VISION_AVG': 5.39,
 'TARGETCONTROL_AVG': 45.53,
 'KILLCONTRIBUTION_AVG': 46.97,
 'KDA_CRIT': 3.619116,
 'WINRATE_CRIT': 71.63218,
 'VISION_CRIT': 16.90,
 'TARGETCONTROL_CRIT': 69.22,
 'KILLCONTRIBUTION_CRIT': 56.94,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

silverDataArray = {
 'KDA_AVG': 2.670,
 'WINRATE_AVG': 49.04,
 'VISION_AVG': 8.078,
 'TARGETCONTROL_AVG': 50.745,
 'KILLCONTRIBUTION_AVG': 50.08,
 'KDA_CRIT': 3.619116,
 'WINRATE_CRIT': 73.72,
 'VISION_CRIT': 20.614,
 'TARGETCONTROL_CRIT': 76.043,
 'KILLCONTRIBUTION_CRIT': 59.62,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

goldDataArray = {
 'KDA_AVG': 2.735745,
 'WINRATE_AVG': 48.85106,
 'VISION_AVG': 10.55319,
 'TARGETCONTROL_AVG': 54.64894,
 'KILLCONTRIBUTION_AVG': 52.05851,
 'KDA_CRIT': 4.101215,
 'WINRATE_CRIT': 72.49036,
 'VISION_CRIT': 25.21836,
 'TARGETCONTROL_CRIT': 81.90504,
 'KILLCONTRIBUTION_CRIT': 61.46661,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

platinumDataArray = {
 'KDA_AVG': 2.624627,
 'WINRATE_AVG': 48.79104,
 'VISION_AVG': 11.69154,
 'TARGETCONTROL_AVG': 54.26368,
 'KILLCONTRIBUTION_AVG': 51.92537,
 'KDA_CRIT': 3.746215,
 'WINRATE_CRIT': 73.72338,
 'VISION_CRIT': 26.44459,
 'TARGETCONTROL_CRIT': 79.0684,
 'KILLCONTRIBUTION_CRIT': 60.26076,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

diamondDataArray = {
 'KDA_AVG': 2.867525,
 'WINRATE_AVG': 48.9604,
 'VISION_AVG': 16.83168,
 'TARGETCONTROL_AVG': 56.23267,
 'KILLCONTRIBUTION_AVG': 53.54455,
 'KDA_CRIT': 4.846659,
 'WINRATE_CRIT': 73.97122,
 'VISION_CRIT': 34.39806,
 'TARGETCONTROL_CRIT': 81.93666,
 'KILLCONTRIBUTION_CRIT': 62.44582,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

masterDataArray = {
 'KDA_AVG': 3.010043,
 'WINRATE_AVG': 53.85714,
 'VISION_AVG': 17.63,
 'TARGETCONTROL_AVG': 55.16857,
 'KILLCONTRIBUTION_AVG': 53.72857,
 'KDA_CRIT': 4.609822,
 'WINRATE_CRIT': 78.98679,
 'VISION_CRIT': 37.51188,
 'TARGETCONTROL_CRIT': 80.53753,
 'KILLCONTRIBUTION_CRIT': 63.55252,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

challengerDataArray = {
 'KDA_AVG': 3.160612,
 'WINRATE_AVG': 56.83673,
 'VISION_AVG': 20.87245,
 'TARGETCONTROL_AVG': 55,
 'KILLCONTRIBUTION_AVG': 53.72857,
 'KDA_CRIT': 4.87272,
 'WINRATE_CRIT': 83.1131,
 'VISION_CRIT': 39.84241,
 'TARGETCONTROL_CRIT': 81.44952,
 'KILLCONTRIBUTION_CRIT': 63.23486,
 'KILLS': 1,
 'DEATHS': 1,
 'ASSISTS': 1,
 'VISIONWARDS': 1,
 'WARDSPLACED': 1,
 'WARDSKILLED': 1,
 'DRAGONS': 1,
 'BARONS': 1,
 'TOWERS': 1,
 'INHIBITORS': 1,
 'RIFTHERALD': 1
};

leagueDataArray['BRONZE'] = bronzeDataArray;
leagueDataArray['SILVER'] = silverDataArray;
leagueDataArray['GOLD'] = goldDataArray;
leagueDataArray['PLATINUM'] = platinumDataArray;
leagueDataArray['DIAMOND'] = diamondDataArray;
leagueDataArray['MASTER'] = masterDataArray;
leagueDataArray['CHALLENGER'] = challengerDataArray;

//Inputs
var https = require('https');
var fs = require('fs');
var json2csv = require('json2csv');
var format = require("string-template");

var summoner_name_original;
var summoner_tier;
var summoner_division;
var summoner_IconId;

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2"];



var response;

module.exports = {
	
	start: function(summonerName, getSummonerIdByName, getSummonerLeagueData, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData, res){
		summoner_name_original = summonerName;
		response = res;
		getSummonerIdByName(summonerName.toLowerCase(), getSummonerLeagueData, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData);
	},
	getSummonerIdByName: function(name, getSummonerLeagueData, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData){
		var summoner_name_escaped = encodeURI(name);
		var options_ID = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v1.4/summoner/by-name/{name}?api_key={key}", {name: summoner_name_escaped, key: apiKey[0]}),
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
				//console.log(`request ID response: ${request_ID_response}`);
				var jsonData = JSON.parse(request_ID_response);
				
				
				var summoner_name_trimmed = name.replace(/\s+/g, '');
				
				if(jsonData.status){
					console.log(format("failed to get summoner from {name} because of {message}", {name: summoner_name_original, message: jsonData.status.message}));
				}
				else{
					summoner_IconId = jsonData[summoner_name_trimmed].profileIconId;
					getSummonerLeagueData(jsonData[summoner_name_trimmed]['id'], getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData);
				}
				
				
				/*
				if(getSummonerMatchList){
					if(GetMatchData){
						getSummonerMatchList(jsonData[summoner_name_trimmed]['id'], GetMatchData);
					}
					else{
						getSummonerMatchList(jsonData[summoner_name_trimmed]['id']);
					}
				}
				*/
			});
		});
		
		request_ID.end();
		request_ID.on("error", function(err){
			//console.log(`request ID error: ${err}`);
		});
	},
	
	getSummonerLeagueData: function(summonerId, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData){
		var options = {
			host: "na.api.pvp.net",
			path: format("/api/lol/na/v2.5/league/by-summoner/{name}/entry?api_key={key}", {name: summonerId, key: apiKey[1]}),
			method: "GET"
		};
		
		var request_response ='';
		var request = https.request(options, function(response){
			response.on("data", function(data){
				//console.log(`Data Received: ${data}`);
				request_response+= data;
			});
			
			response.on("end", function(){
				console.log("request League ends");
				//console.log(`request ID response: ${request_ID_response}`);
				var jsonData = JSON.parse(request_response);
				
				if(jsonData.status){
					console.log(format("failed to get summoner tier from {name} because of {message}", {name: summoner_name_original, message: jsonData.status.message}));
				}
				else{
					summoner_tier = jsonData[summonerId][0].tier;
					summoner_division = jsonData[summonerId][0].entries[0].division;
					console.log(format("Summoner rank: {tier} {division}", {tier: summoner_tier, division: summoner_division}));
					getSummonerMatchList(summonerId, getMatchesID, GetMatchData, AnalyzeMatchData);
				}
				
				
				/*
				if(getSummonerMatchList){
					if(GetMatchData){
						getSummonerMatchList(jsonData[summoner_name_trimmed]['id'], GetMatchData);
					}
					else{
						getSummonerMatchList(jsonData[summoner_name_trimmed]['id']);
					}
				}
				*/
			});
		});
		
		request.end();
		request.on("error", function(err){
			//console.log(`request ID error: ${err}`);
		});
	},
	
	
	getSummonerMatchList: function(summonerId, getMatchesID, GetMatchData, AnalyzeMatchData){
	
	//https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/xplzzzx?api_key=79cfb0e6-89a2-4a0b-95c0-77238c9c6afe
	
		var rankedQueues = 'TEAM_BUILDER_DRAFT_RANKED_5x5';
		var seasons = 'SEASON2016';
		
		//var startEPOCH = (new Date).getTime()/1000 | 0; // Delete decimal
		//var endEPOCH = ((new Date).getTime()/1000 - days*24*3600) | 0;

		var options = {
			host: "na.api.pvp.net",
			path:format('/api/lol/na/v2.2/matchlist/by-summoner/{ID}?rankedQueues={queue}&seasons={season}&api_key={key}', {ID:summonerId, queue:rankedQueues, season:seasons, key:apiKey[2]}),
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
				
				
				//console.log(`JSON Data :${JSON.stringify(jsonData)}`);
				
				if(jsonData.status){
					console.log(format('failed to get data from {matchID} because of {message}', {matchID: matchID, message: dataJSON.status.message}));
				}
				else{
					
					getMatchesID(jsonData, 10, matchIDArray, GetMatchData, AnalyzeMatchData);
				}
				
				
				
				/*
				if(getMatchesID){
					console.log('get match list has call back');
					getMatchesID(jsonData, 10, matchIDArray, callback);
				}
				else{
					getMatchesID(jsonData, 10, matchIDArray);
				};
				*/
				
				
				
			});
		});
		
		request_MatchList.end();
		request_MatchList.on('error', function(err){
			//console.log('request matchlist error: ${err}');
		});
		
	},
	getMatchesID: function(jsonData, number, IDarray, GetMatchData, AnalyzeMatchData){
		var matchesNum = jsonData['endIndex'];
		
		if(number <= matchesNum){
			for(var i = 0; i < number; i++){
				IDarray.push(jsonData['matches'][i]['matchId']);
			};
		}
		else{
			//console.log(`${matchesNum} matches played; not enough`);
			if(matchesNum > 0){
				for(var i = 0; i < matchesNum; i++){
					//console.log(jsonData['matches']);
					IDarray.push(jsonData['matches'][i]['matchId']);
				};
			}
			else{
				return;
			}
			
		};
		
		GetMatchData(IDarray, AnalyzeMatchData);
	},
    GetMatchData: function(matchIDArray, AnalyzeMatchData){
		
		//console.log(`in getMatchData with ${matchIDArray}`);
		var matchJsonData = new Array();
		var matchNum = matchIDArray.length;
		
		while(matchIDArray.length > 0){
			//console.log(`${matchIDArray.length} matches left to grab`);
			var matchID = matchIDArray.shift();
			//console.log(`Grabbing match ${matchID} using ${apiKey[((matchIDArray.length+2)%apiKey.length)]}`);
			
			var options = {
				host: "na.api.pvp.net",
				path: format('https://na.api.pvp.net/api/lol/na/v2.2/match/{matchID}?api_key={key}', {matchID:matchID, key: apiKey[((matchIDArray.length+3)%apiKey.length)]}),
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
						console.log(format('failed to get data from {matchID} because of {message}', {matchID:matchID, message: dataJSON.status.message}));
						
						if(dataJson.status.status_code == 429){
							matchIDArray.unshift(matchID);
						}
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
				//console.log(`request match error: ${err}`);
				setTimeout(function(){
					console.log('retry');
					matchIDArray.unshift(matchID);
				}, 1000);
			});
			
		};
	
	},
	AnalyzeMatchData: function(matchStrArray){
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
		//fs.writeFileSync('data.json', combinedMatchString);
		
		
		
		
		
		
		
		//KDA
		var totalKills = 0;
		var totalDeaths = 0;
		var totalAssists = 0;
		var gatherKDA_Data = function(match, participantID){
			//console.log(`KDA participant ID is ${participantID}`);
			totalKills += match.participants[participantID-1].stats.kills;
			totalDeaths += match.participants[participantID-1].stats.deaths;
			totalAssists += match.participants[participantID-1].stats.assists;
		}


		//vision control
		var wardingValue = 0;
		var wardsKilled = 0;
		var wardsPlaced = 0;
		var gatherVisionControlData = function(match, participantID){
			//wardingValue += match.participants[participantID-1].stats.wardsPlaced;
			//wardingValue += match.participants[participantID-1].stats.wardsKilled * 2;
			wardingValue += match.participants[participantID-1].stats.visionWardsBoughtInGame;
			wardsKilled += match.participants[participantID-1].stats.wardsKilled;
			wardsPlaced += match.participants[participantID-1].stats.wardsPlaced;
		}
		
		
		//target control
		var dragonSlained = 0;
		var riftHeraldSlained = 0;
		var baronSlained = 0;
		var gatherTargetControlData = function(match, participantID){
			var participant_teamID = match.participants[participantID-1].teamId;
			for(var i = 0; i < 2; i ++){
				if(match.teams[i].teamId === participant_teamID){
					dragonSlained += match.teams[i].dragonKills;
					riftHeraldSlained += match.teams[i].riftHeraldKills;
					baronSlained += match.teams[i].baronKills;
				}
			}
		}
		
		//Kill contribution
		var totalKills_AllMatches = 0;
		var totalKills_KillContribution = 0;
		var totalAssists_KillContribution = 0;
		var gatherKillContribution = function(match, participantID){
			var participant_teamID = match.participants[participantID-1].teamId;
			
			for(var i = 0; i < 10; i++){
				if(match.participants[i].teamId === participant_teamID){
					totalKills_AllMatches += match.participants[i].stats.kills;
				}
			}
			
			totalKills_KillContribution += match.participants[participantID-1].stats.kills;
			totalAssists_KillContribution += match.participants[participantID-1].stats.assists;
		}
		
		//match duration
		var match_totalDuration = 0;
		var gatherMatchDuration = function(match){
			match_totalDuration += match.matchDuration;
		}
		
		//win rate
		var match_wins = 0;
		var gatherMatchWinRate = function(match, participantID){
			if(match.participants[participantID-1].stats.winner){
				match_wins++;
			}
		}
		
		//Versatility
		var topPlayed = 0;
		var midPlayed = 0;
		var junglePlayed = 0;
		var adcPlayed = 0;
		var supportPlayed = 0;
		var gatherVersatilityData = function(match, participantID){
			if(match.participants[participantID-1].timeline.lane === 'TOP'){
				topPlayed ++;
			}
			else if(match.participants[participantID-1].timeline.lane === 'MIDDLE'){
				midPlayed ++;
			}
			else if(match.participants[participantID-1].timeline.lane === 'JUNGLE'){
				junglePlayed ++;
			}
			else if(match.participants[participantID-1].timeline.lane === 'BOTTOM'){
				if(match.participants[participantID-1].timeline.role === 'DUO_SUPPORT'){
					supportPlayed ++;
				}
				else{
					adcPlayed ++;
				}
			}
		}
		
		
		//Tower Kills
		var total_Towerkills = 0;
		var total_InhibitorKills = 0;
		var gatherTowerKills = function(match, participantID){
			total_Towerkills += match.participants[participantID-1].stats.towerKills;
			total_InhibitorKills += match.participants[participantID-1].stats.inhibitorKills;
		}
		
		
		//crowd control time
		var control_Duration = 0;
		var gatherControlDuration = function(match, participantID){
			control_Duration += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
		}
		
		
		//Start analyzing
		for (var i = 0; i < matchJson.matches.length; i++){
			
			var match = matchJson.matches[i];
			//Find Player
			var participantID;
			
			
			for (var j = 0; j < match.participantIdentities.length; j++){
				identity = match.participantIdentities[j];
				//console.log(`current player name: ${identity.player.summonerName}`);
				if(identity.player.summonerName.toLowerCase() === summoner_name_original.toLowerCase()){
					participantID = identity.participantId;
				}
			};
			
			//KDA
			gatherKDA_Data(match, participantID);
			gatherVisionControlData(match, participantID);
			gatherKillContribution(match, participantID);
			gatherMatchDuration(match);
			gatherTargetControlData(match, participantID);
			gatherMatchWinRate(match, participantID);
			gatherVersatilityData(match, participantID);
			gatherTowerKills(match, participantID);
			gatherControlDuration(match, participantID)
		};
		
		//KDA
		var KDA = (totalKills + totalAssists) / Math.max(1, totalDeaths);
		
		//KillContribution
		var KillContribution = Math.round((totalKills_KillContribution+totalAssists_KillContribution)/totalKills_AllMatches*100);
		
		//Average game time
		var avgDuration = match_totalDuration/matchJson.matches.length;
		var avgDuration_parsed = (Math.floor(avgDuration/60)).toString() + 'min' + (Math.floor(avgDuration%60)) + 'sec';
		
		//Win Rate
		var winRate = Math.round(match_wins/matchJson.matches.length*100);
		
		var control_Duration_parsed = (Math.floor(control_Duration/60)).toString() + 'min' + (Math.floor(control_Duration%60)) + 'sec';
		
		var targetControl = total_Towerkills + dragonSlained + 3 * riftHeraldSlained + 5 * baronSlained;
		
		//format data
		/*
		var analysis = '[{';
		
		var summonerName_NoSpace = summoner_name_original.replace(/\s/g, '');
		
		analysis += `\"SummonerName\": \"${summoner_name_original}\",`;
		analysis += `\"KDA\": ${KDA.toFixed(2)},`;
		analysis += `\"AvgKills\": ${(totalKills/10).toFixed(2)},`;
		analysis += `\"AvgDeaths\": ${(totalDeaths/10).toFixed(2)},`;
		analysis += `\"AvgAssists\": ${(totalAssists/10).toFixed(2)},`;
		analysis += `\"TOP_played\": ${topPlayed},`;
		analysis += `\"JUNGLE_played\": ${junglePlayed},`;
		analysis += `\"MID_played\": ${midPlayed},`;
		analysis += `\"ADC_played\": ${adcPlayed},`;
		analysis += `\"SUPPORT_played\": ${supportPlayed},`;
		analysis += `\"WinRate\": ${winRate},`;
		analysis += `\"VisionControl\": ${wardingValue},`;
		analysis += `\"TowersKilled\": ${total_Towerkills},`;
		analysis += `\"DragonsKilled\": ${dragonSlained},`;
		analysis += `\"RiftHeraldKilled\": ${riftHeraldSlained},`;
		analysis += `\"BaronKilled\": ${baronSlained},`;
		analysis += `\"KillContribution\": ${KillContribution},`;
		analysis += `\"CCDuration\": ${(control_Duration/60).toFixed(2)}`;
		analysis += '}]';

		fs.writeFileSync(`../PlayerData/JSON/${summonerName_NoSpace}.json`, analysis);
		
		
		var JSON_Data = JSON.parse(analysis);
		var fields = ['SummonerName', 'KDA', 'AvgKills', 'AvgDeaths', 'AvgAssists', 'TOP_played', 'JUNGLE_played', 'MID_played', 'ADC_played', 'SUPPORT_played', 'WinRate', 'VisionControl', 'TowersKilled', 'DragonsKilled', 'RiftHeraldKilled', 'BaronKilled', 'KillContribution', 'CCDuration'];
		json2csv({ data: JSON_Data, fields: fields }, function(err, csv) {
			if (err) 
				console.log(err);
			console.log(csv);
			fs.writeFileSync(`../PlayerData/CSV/${summonerName_NoSpace}.csv`, csv);
		});
		*/
		
		/*
		console.log('analysis file generated');
		console.log('\n');
		console.log(`	Analysis of ${summoner_name_original}`);
		console.log('\n');
		console.log(`		Data from the recent ${matchJson.matches.length} matches`);
		console.log('\n');
		console.log(`		KDA: ${KDA.toFixed(2)}`);
		console.log(`			Average Kills: ${(totalKills/10).toFixed(2)}`);
		console.log(`			Average Deaths: ${(totalDeaths/10).toFixed(2)}`);
		console.log(`			Average Assists: ${(totalAssists/10).toFixed(2)}`);
		console.log(`		Positions Played:`);
		console.log(`			TOP ${topPlayed}`);
		console.log(`			JUNGLE ${junglePlayed}`);
		console.log(`			MID ${midPlayed}`);
		console.log(`			ADC ${adcPlayed}`);
		console.log(`			SUPPORT ${supportPlayed}`);
		console.log(`		Win Rate: ${winRate}%`);
		console.log(`		Vision Control: ${wardingValue} vision wards bought`);
		console.log(`		Kill Contribution: ${KillContribution}%`);
		console.log(`		Average match length: ${avgDuration_parsed}`);
		console.log(`		Target Control: ${total_Towerkills} towers/${dragonSlained} dragons/${riftHeraldSlained} rift Heralds/${baronSlained} barons`);
		console.log(`		Total CC duration: ${control_Duration_parsed}`);
		*/
		
/* for reference
		analysis += `\"SummonerName\": \"${summoner_name_original}\",`;
		analysis += `\"KDA\": ${KDA.toFixed(2)},`;
		analysis += `\"AvgKills\": ${(totalKills/10).toFixed(2)},`;
		analysis += `\"AvgDeaths\": ${(totalDeaths/10).toFixed(2)},`;
		analysis += `\"AvgAssists\": ${(totalAssists/10).toFixed(2)},`;
		analysis += `\"TOP_played\": ${topPlayed},`;
		analysis += `\"JUNGLE_played\": ${junglePlayed},`;
		analysis += `\"MID_played\": ${midPlayed},`;
		analysis += `\"ADC_played\": ${adcPlayed},`;
		analysis += `\"SUPPORT_played\": ${supportPlayed},`;
		analysis += `\"WinRate\": ${winRate},`;
		analysis += `\"VisionControl\": ${wardingValue},`;
		analysis += `\"TowersKilled\": ${total_Towerkills},`;
		analysis += `\"DragonsKilled\": ${dragonSlained},`;
		analysis += `\"RiftHeraldKilled\": ${riftHeraldSlained},`;
		analysis += `\"BaronKilled\": ${baronSlained},`;
		analysis += `\"KillContribution\": ${KillContribution},`;
		analysis += `\"CCDuration\": ${(control_Duration/60).toFixed(2)}`;
		
		var KDA_avg = 2.766992;
		var KDA_crit = 4.255425;

		var Winrate_avg = 50.11637;
		var Winrate_crit = 75.61936;

		var Vision_avg = 12.6087;
		var Vision_crit = 30.43094;

		var KillContri_avg = 51.579;
		var KillContri_crit = 61.576;

		var TargetControl_avg = 53.069;
		var TargetControl_crit = 78.89065;
*/
		
		//Average Data

		
		
		var KDA_avg;
		var KDA_crit;

		var Winrate_avg;
		var Winrate_crit;

		var Vision_avg;
		var Vision_crit;

		var KillContri_avg;
		var KillContri_crit;

		var TargetControl_avg;
		var TargetControl_crit;
		
		
		if(summoner_tier){
			KDA_avg = leagueDataArray[summoner_tier].KDA_AVG;
			KDA_crit = leagueDataArray[summoner_tier].KDA_CRIT;
			Winrate_avg = leagueDataArray[summoner_tier].WINRATE_AVG;
			Winrate_crit = leagueDataArray[summoner_tier].WINRATE_CRIT;
			Vision_avg = leagueDataArray[summoner_tier].VISION_AVG;
			Vision_crit = leagueDataArray[summoner_tier].VISION_CRIT;
			TargetControl_avg = leagueDataArray[summoner_tier].TARGETCONTROL_AVG;
			TargetControl_crit = leagueDataArray[summoner_tier].TARGETCONTROL_CRIT;
			KillContri_avg = leagueDataArray[summoner_tier].KILLCONTRIBUTION_AVG;
			KillContri_crit = leagueDataArray[summoner_tier].KILLCONTRIBUTION_CRIT;
		}
		else{
			console.log("Summoner tier is not available");
		}
		
		var nextTier;
		
		var KDA_ThisTier;
		var KDA_NextTier;
		var WINRate_ThisTier;
		var WINRate_NextTier;
		var VisionControl_ThisTier;
		var VisionControl_NextTier;
		var TargetControl_ThisTier;
		var TargetControl_NextTier;
		var KillContribution_ThisTier;
		var KillContribution_NextTier;
		var Kills_ThisTier;
		var Kills_NextTier;
		var Deaths_ThisTier;
		var Deaths_NextTier;
		var Assists_ThisTier;
		var Assists_NextTier;
		var VisionWards_ThisTier;
		var VisionWards_NextTier;
		var WardsPlaced_ThisTier;
		var WardsPlaced_NextTier;
		var WardsKilled_ThisTier;
		var WardsKilled_NextTier;
		var Dragons_ThisTier;
		var Dragons_NextTier;
		var Barons_ThisTier;
		var Barons_NextTier;
		var Towers_ThisTier;
		var Towers_NextTier;
		var Inhibitors_ThisTier;
		var Inhibitors_NextTier;
		var RiftHerald_ThisTier;
		var RiftHerald_NextTier;
		
		
		//Assign tier data
		if(summoner_tier){
			if(summoner_tier === 'BRONZE'){
				nextTier = 'SILVER';
			}
			else if(summoner_tier === 'SILVER'){
				nextTier = 'GOLD';
			}
			else if(summoner_tier === 'GOLD'){
				nextTier = 'PLATINUM';
			}
			else if(summoner_tier === 'PLATINUM'){
				nextTier = 'DIAMOND';
			}
			else if(summoner_tier === 'DIAMOND'){
				nextTier = 'MASTER';
			}
			else if(summoner_tier === 'MASTER'){
				nextTier = 'CHALLENGER';
			}
			else if(summoner_tier === 'CHALLENGER'){
				
			}
		}
		
		if(nextTier){
			KDA_ThisTier = leagueDataArray[summoner_tier].KDA_AVG;
			KDA_NextTier = leagueDataArray[nextTier].KDA_AVG;
			WINRate_ThisTier = leagueDataArray[summoner_tier].WINRATE_AVG;
			WINRate_NextTier = leagueDataArray[nextTier].WINRATE_AVG;
			VisionControl_ThisTier = leagueDataArray[summoner_tier].VISION_AVG;
			VisionControl_NextTier = leagueDataArray[nextTier].VISION_AVG;
			TargetControl_ThisTier = leagueDataArray[summoner_tier].TARGETCONTROL_AVG;
			TargetControl_NextTier = leagueDataArray[nextTier].TARGETCONTROL_AVG;
			KillContribution_ThisTier = leagueDataArray[summoner_tier].KILLCONTRIBUTION_AVG;
			KillContribution_NextTier = leagueDataArray[nextTier].KILLCONTRIBUTION_AVG;
			Kills_ThisTier = leagueDataArray[nextTier].KILLS;
			Kills_NextTier = leagueDataArray[nextTier].KILLS;
			Deaths_ThisTier = leagueDataArray[nextTier].DEATHS;
			Deaths_NextTier = leagueDataArray[nextTier].DEATHS;
			Assists_ThisTier = leagueDataArray[nextTier].ASSISTS;
			Assists_NextTier = leagueDataArray[nextTier].ASSISTS;
			VisionWards_ThisTier = leagueDataArray[nextTier].VISIONWARDS;
			VisionWards_NextTier = leagueDataArray[nextTier].VISIONWARDS;
			WardsPlaced_ThisTier = leagueDataArray[nextTier].WARDSPLACED;
			WardsPlaced_NextTier = leagueDataArray[nextTier].WARDSPLACED;
			WardsKilled_ThisTier = leagueDataArray[nextTier].WARDSKILLED;
			WardsKilled_NextTier = leagueDataArray[nextTier].WARDSKILLED;
			Dragons_ThisTier = leagueDataArray[nextTier].DRAGONS;
			Dragons_NextTier = leagueDataArray[nextTier].DRAGONS;
			Barons_ThisTier = leagueDataArray[nextTier].BARONS;
			Barons_NextTier = leagueDataArray[nextTier].BARONS;
			Towers_ThisTier = leagueDataArray[nextTier].TOWERS;
			Towers_NextTier = leagueDataArray[nextTier].TOWERS;
			Inhibitors_ThisTier = leagueDataArray[nextTier].INHIBITORS;
			Inhibitors_NextTier = leagueDataArray[nextTier].INHIBITORS;
			RiftHerald_ThisTier = leagueDataArray[nextTier].RIFTHERALD;
			RiftHerald_NextTier = leagueDataArray[nextTier].RIFTHERALD;
		}
		
		var KDA_scaled = KDA/KDA_crit*100 > 100 ? 99.99 : (KDA/KDA_crit*100).toFixed(2);
		var VisionControl_scaled = wardingValue/Vision_crit*100 > 100 ? 99.99 : (wardingValue/Vision_crit*100).toFixed(2);
		var WinRate_scaled = winRate/Winrate_crit*100 > 100 ? 99.99 : (winRate/Winrate_crit*100).toFixed(2);
		var KillContribution_scaled = KillContribution/KillContri_crit*100 > 100 ? 99.99 : (KillContribution/KillContri_crit*100).toFixed(2);
		var TargetControl_scaled = targetControl/TargetControl_crit*100 > 100 ? 99.99 : (targetControl/TargetControl_crit*100).toFixed(2);
		
		var KDA_avg_scaled = KDA_avg/KDA_crit*100 > 100 ? 99.99 : (KDA_avg/KDA_crit*100).toFixed(2);
		var VisionControl_avg_scaled = Vision_avg/Vision_crit*100 > 100 ? 99.99 : (Vision_avg/Vision_crit*100).toFixed(2);
		var WinRate_avg_scaled = Winrate_avg/Winrate_crit*100 > 100 ? 99.99 : (Winrate_avg/Winrate_crit*100).toFixed(2);
		var KillContribution_avg_scaled = KillContri_avg/KillContri_crit*100 > 100 ? 99.99 : (KillContri_avg/KillContri_crit*100).toFixed(2);
		var TargetControl_avg_scaled = TargetControl_avg/TargetControl_crit*100 > 100 ? 99.99 : (TargetControl_avg/TargetControl_crit*100).toFixed(2);
		
		var dataAnalysis = '[{';
		dataAnalysis += format('\"name\": \"{name}\",',{name:summoner_name_original});
		dataAnalysis += format('\"KDA_graph\": \"{KDA}\",',{KDA:KDA_scaled});
		dataAnalysis += format('\"VisionControl_graph\": \"{VisionControl}\",',{VisionControl:VisionControl_scaled});
		dataAnalysis += format('\"WinRate_graph\": \"{WinRate}\",',{WinRate:WinRate_scaled});
		dataAnalysis += format('\"KillContribution_graph\": \"{KillContribution}\",',{KillContribution:KillContribution_scaled});
		dataAnalysis += format('\"TargetControl_graph\": \"{TargetControl}\",',{TargetControl:TargetControl_scaled});
		dataAnalysis += format('\"KDA_avg_graph\": \"{KDA_avg}\",',{KDA_avg:KDA_avg_scaled});
		dataAnalysis += format('\"VisionControl_avg_graph\": \"{VisionControl_avg}\",',{VisionControl_avg:VisionControl_avg_scaled});
		dataAnalysis += format('\"WinRate_avg_graph\": \"{WinRate_avg}\",',{WinRate_avg:WinRate_avg_scaled});
		dataAnalysis += format('\"KillContribution_avg_graph\": \"{KillContribution_avg}\",',{KillContribution_avg:KillContribution_avg_scaled});
		dataAnalysis += format('\"TargetControl_avg_graph\": \"{TargetControl_avg}\",',{TargetControl_avg:TargetControl_avg_scaled});
		dataAnalysis += format('\"Tier\": \"{tier}\",',{tier:summoner_tier});
		dataAnalysis += format('\"NextTier\": \"{tier}\",',{tier:nextTier});
		dataAnalysis += format('\"Division\": \"{division}\",',{division:summoner_division});
		dataAnalysis += format('\"KDA_Raw\": \"{KDA}\",',{KDA:KDA});
		dataAnalysis += format('\"KDA_ThisTier\": \"{KDA}\",',{KDA:KDA_ThisTier});
		dataAnalysis += format('\"KDA_NextTier\": \"{KDA}\",',{KDA:KDA_NextTier});
		dataAnalysis += format('\"WINRate_Raw\": \"{WINRate}\",',{WINRate:winRate});
		dataAnalysis += format('\"WINRate_ThisTier\": \"{WINRate}\",',{WINRate:WINRate_ThisTier});
		dataAnalysis += format('\"WINRate_NextTier\": \"{WINRate}\",',{WINRate:WINRate_NextTier});
		dataAnalysis += format('\"VisionControl_Raw\": \"{VisionControl}\",',{VisionControl:wardingValue});
		dataAnalysis += format('\"VisionControl_ThisTier\": \"{VisionControl}\",',{VisionControl:VisionControl_ThisTier});
		dataAnalysis += format('\"VisionControl_NextTier\": \"{VisionControl}\",',{VisionControl:VisionControl_NextTier});
		dataAnalysis += format('\"TargetControl_Raw\": \"{TargetControl}\",',{TargetControl:targetControl});
		dataAnalysis += format('\"TargetControl_ThisTier\": \"{TargetControl}\",',{TargetControl:TargetControl_ThisTier});
		dataAnalysis += format('\"TargetControl_NextTier\": \"{TargetControl}\",',{TargetControl:TargetControl_NextTier});
		dataAnalysis += format('\"KillContribution_Raw\": \"{KillContribution}\",',{KillContribution:KillContribution});
		dataAnalysis += format('\"KillContribution_ThisTier\": \"{KillContribution}\",',{KillContribution:KillContribution_ThisTier});
		dataAnalysis += format('\"KillContribution_NextTier\": \"{KillContribution}\",',{KillContribution:KillContribution_NextTier});
		dataAnalysis += format('\"TopPlayed\": \"{TopPlayed}\",',{TopPlayed:topPlayed});
		dataAnalysis += format('\"JunglePlayed\": \"{JunglePlayed}\",',{JunglePlayed:junglePlayed});
		dataAnalysis += format('\"MidPlayed\": \"{MidPlayed}\",',{MidPlayed:midPlayed});
		dataAnalysis += format('\"AdcPlayed\": \"{AdcPlayed}\",',{AdcPlayed:adcPlayed});
		dataAnalysis += format('\"SupportPlayed\": \"{SupportPlayed}\",',{SupportPlayed:supportPlayed});
		dataAnalysis += format('\"Kill_player\": \"{kill}\",',{kill:(totalKills/10).toFixed(2)});
		dataAnalysis += format('\"Death_player\": \"{death}\",',{death:(totalDeaths/10).toFixed(2)});
		dataAnalysis += format('\"Assist_player\": \"{assist}\",',{assist:(totalAssists/10).toFixed(2)});
		dataAnalysis += format('\"VisionWards\": \"{visionWards}\",',{visionWards:wardingValue});
		dataAnalysis += format('\"WardsPlaced\": \"{wardsPlaced}\",',{wardsPlaced:wardsPlaced});
		dataAnalysis += format('\"WardsKilled\": \"{wardsKilled}\",',{wardsKilled:wardsKilled});
		dataAnalysis += format('\"DragonsKilled\": \"{dragonsKilled}\",',{dragonsKilled:dragonSlained});
		dataAnalysis += format('\"BaronsKilled\": \"{baronsKilled}\",',{baronsKilled:baronSlained});
		dataAnalysis += format('\"TowersKilled\": \"{towersKilled}\",',{towersKilled:total_Towerkills});
		dataAnalysis += format('\"InhibitorsKilled\": \"{inhibitorsKilled}\",',{inhibitorsKilled:total_InhibitorKills});
		dataAnalysis += format('\"Kills_ThisTier\": \"{Kills_ThisTier}\",',{Kills_ThisTier:Kills_ThisTier});
		dataAnalysis += format('\"Kills_NextTier\": \"{Kills_NextTier}\",',{Kills_NextTier:Kills_NextTier});
		dataAnalysis += format('\"Deaths_ThisTier\": \"{Deaths_ThisTier}\",',{Deaths_ThisTier:Deaths_ThisTier});
		dataAnalysis += format('\"Deaths_NextTier\": \"{Deaths_NextTier}\",',{Deaths_NextTier:Deaths_NextTier});
		dataAnalysis += format('\"Assists_ThisTier\": \"{Assists_ThisTier}\",',{Assists_ThisTier:Assists_ThisTier});
		dataAnalysis += format('\"Assists_NextTier\": \"{Assists_NextTier}\",',{Assists_NextTier:Assists_NextTier});
		dataAnalysis += format('\"VisionWards_ThisTier\": \"{VisionWards_ThisTier}\",',{VisionWards_ThisTier:VisionWards_ThisTier});
		dataAnalysis += format('\"VisionWards_NextTier\": \"{VisionWards_NextTier}\",',{VisionWards_NextTier:VisionWards_NextTier});
		dataAnalysis += format('\"WardsPlaced_ThisTier\": \"{WardsPlaced_ThisTier}\",',{WardsPlaced_ThisTier:WardsPlaced_ThisTier});
		dataAnalysis += format('\"WardsPlaced_NextTier\": \"{WardsPlaced_NextTier}\",',{WardsPlaced_NextTier:WardsPlaced_NextTier});
		dataAnalysis += format('\"WardsKilled_ThisTier\": \"{WardsKilled_ThisTier}\",',{WardsKilled_ThisTier:WardsKilled_ThisTier});
		dataAnalysis += format('\"WardsKilled_NextTier\": \"{WardsKilled_NextTier}\",',{WardsKilled_NextTier:WardsKilled_NextTier});
		dataAnalysis += format('\"Dragons_ThisTier\": \"{Dragons_ThisTier}\",',{Dragons_ThisTier:Dragons_ThisTier});
		dataAnalysis += format('\"Dragons_NextTier\": \"{Dragons_NextTier}\",',{Dragons_NextTier:Dragons_NextTier});
		dataAnalysis += format('\"Barons_ThisTier\": \"{Barons_ThisTier}\",',{Barons_ThisTier:Barons_ThisTier});
		dataAnalysis += format('\"Barons_NextTier\": \"{Barons_NextTier}\",',{Barons_NextTier:Barons_NextTier});
		dataAnalysis += format('\"Towers_ThisTier\": \"{Towers_ThisTier}\",',{Towers_ThisTier:Towers_ThisTier});
		dataAnalysis += format('\"Towers_NextTier\": \"{Towers_NextTier}\",',{Towers_NextTier:Towers_NextTier});
		dataAnalysis += format('\"Inhibitors_ThisTier\": \"{Inhibitors_ThisTier}\",',{Inhibitors_ThisTier:Inhibitors_ThisTier});
		dataAnalysis += format('\"Inhibitors_NextTier\": \"{Inhibitors_NextTier}\",',{Inhibitors_NextTier:Inhibitors_NextTier});
		dataAnalysis += format('\"RiftHerald_ThisTier\": \"{RiftHerald_ThisTier}\",',{RiftHerald_ThisTier:RiftHerald_ThisTier});
		dataAnalysis += format('\"RiftHerald_NextTier\": \"{RiftHerald_NextTier}\"',{RiftHerald_NextTier:RiftHerald_NextTier});
		dataAnalysis += '}]';
		
		console.log(dataAnalysis);
		var analysisJson = JSON.parse(dataAnalysis);
		
		
		
		if(analysisJson){
			console.log("Analysis response sent");
			response.json(analysisJson);
		}
		else{
			console.log("Error analyzing");
		}
	}

}



//var summoner_name = summoner_name_original.toLowerCase();

//getSummonerIdByName(summoner_name, getSummonerMatchList, GetMatchData);
	

