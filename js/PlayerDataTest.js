//Inputs
var https = require('https');
var fs = require('fs');
var json2csv = require('json2csv');
var format = require("string-template");

var leagueDataArray;

fs.readFile('js/leagueData.json', 'utf8', function (err, data) {
  if (err) throw err;
  leagueDataArray = JSON.parse(data);
});

var summoner_name_original;
var summoner_tier;
var summoner_division;
var summoner_IconId;

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2",'55c0033d-23b5-4cb6-8104-e0d5311073b2'];

module.exports = {
	
	start: function(summonerName, getSummonerIdByName, getSummonerLeagueData, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData, res){
		summoner_name_original = summonerName;
		this.res = res;
		getSummonerIdByName(summonerName.toLowerCase(), getSummonerLeagueData, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData, res);
	},
	
	getSummonerIdByName: function(name, getSummonerLeagueData, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData, res){
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
					res.status(jsonData.status.status_code).send('Summoner name not valid');
					return;
				}
				else{
					summoner_IconId = jsonData[summoner_name_trimmed].profileIconId;
					summoner_name_original = jsonData[summoner_name_trimmed].name;
					getSummonerLeagueData(jsonData[summoner_name_trimmed]['id'], getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData, res);
				}
			});
		});
		
		request_ID.end();
		request_ID.on("error", function(err){
			//console.log(`request ID error: ${err}`);
		});
	},
	
	getSummonerLeagueData: function(summonerId, getSummonerMatchList, getMatchesID, GetMatchData, AnalyzeMatchData, res){
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
				//console.log(`request ID response: ${request_response}`);
				var jsonData = JSON.parse(request_response);
				
				if(jsonData.status){
					console.log(format("failed to get summoner tier from {name} because of {message}", {name: summoner_name_original, message: jsonData.status.message}));
					res.status(jsonData.status.status_code).send('Failed to get summoner rank info');
					return;
				}
				else{
					summoner_tier = jsonData[summonerId][0].tier;
					summoner_division = jsonData[summonerId][0].entries[0].division;
					console.log(format("Summoner rank: {tier} {division}", {tier: summoner_tier, division: summoner_division}));
					getSummonerMatchList(summonerId, getMatchesID, GetMatchData, AnalyzeMatchData, res);
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
	
	
	getSummonerMatchList: function(summonerId, getMatchesID, GetMatchData, AnalyzeMatchData, res){
	
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
					console.log(format('failed to get data from {matchID} because of {message}', {matchID: matchID, message: jsonData.status.message}));
				}
				else{
					if(jsonData.totalGames <= 0){
						res.status(406).send('Not enough rank games played');
						return;
					}
					getMatchesID(jsonData, 10, matchIDArray, GetMatchData, AnalyzeMatchData, res);
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
	getMatchesID: function(jsonData, number, IDarray, GetMatchData, AnalyzeMatchData, res){
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
		
		GetMatchData(IDarray, AnalyzeMatchData, res);
	},
    GetMatchData: function(matchIDArray, AnalyzeMatchData, res){
		
		//console.log(`in getMatchData with ${matchIDArray}`);
		var matchJsonData = new Array();
		var matchNum = matchIDArray.length;
		
		while(matchIDArray.length > 0){
			//console.log(`${matchIDArray.length} matches left to grab`);
			var matchID = matchIDArray.shift();
			//console.log(`current match num: ${matchID}`);
			//console.log(`Grabbing match ${matchID} using ${apiKey[((matchIDArray.length+2)%apiKey.length)]}`);
			var path = format('/api/lol/na/v2.2/match/{matchID}?api_key={key}', {matchID:matchID, key:apiKey[((matchIDArray.length+3)%apiKey.length)]});
			var options = {
				host: "na.api.pvp.net",
				path: format('/api/lol/na/v2.2/match/{matchID}?api_key={key}', {matchID:matchID, key:apiKey[((matchIDArray.length+3)%apiKey.length)]}),
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
						console.log(format('failed to get data from {matchID} because of {message}', {matchID:matchID, message: dataJSON.status.status_code}));
						console.log(path);
						console.log(receivedData);
						if(dataJSON.status.status_code == 429){
							matchIDArray.unshift(matchID);
						}
						else{
							matchNum --;
						}
					}
					else{
						matchJsonData.push(receivedData);
						
						if(matchJsonData.length < matchNum){
							console.log("request current Match ends");
						}
						else{
							console.log("All matches are grabbed");
							AnalyzeMatchData(matchJsonData, res);
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
	AnalyzeMatchData: function(matchStrArray, res){
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
		
		var topTimelineNum = 0;
		var midTimelineNum = 0;
		var adcTimelineNum = 0;
		var jgTimelineNum = 0;
		var supTimelineNum = 0;								
		
		var PlayedLength_TOP = 0;
		var PlayedLength_MID = 0;
		var PlayedLength_ADC = 0;
		var PlayedLength_JG = 0;
		var PlayedLength_SUP = 0;
		

		
		var D_ADC = 0;
		var DT_ADC = 0;
		var CS_zeroToTen_ADC = 0;
		var CS_ADC = 0;
		var H_ADC = 0;
		var WIN_ADC = 0;
		var CC_ADC = 0;
		
		var G_ADC = 0;
		var K_ADC = 0;
		var De_ADC = 0;
		var A_ADC = 0;
		var VW_ADC = 0;
		var WK_ADC = 0;
		var WP_ADC = 0;
		var KC_ADC = 0;
		var KDA_ADC = 0;
		var TeamKills_ADC = 0;
		
		var FBContribution_ADC = 0;
		var KillSprees_ADC = 0;
		var LargestKillingSpree_ADC = 0;
		var CSDiffPerMin_zeroToTen_ADC = 0;
		var XPPerMin_zeroToTen_ADC = 0;
		var XPPerMin_zeroToThirty_ADC = 0;
		var XPDiffPerMin_zeroToTen_ADC = 0;
		var XPDiffPerMin_tenToTwenty_ADC = 0;
		var XPDiffPerMin_twentyToThirty_ADC = 0;
		var TeamGoldPercent_ADC = 0;
		var TeamDamagePercent_ADC = 0;
		var TeamGold_ADC = 0;
		var TeamDamage_ADC = 0;

		var D_MID = 0;
		var DT_MID = 0;
		var CS_zeroToTen_MID = 0;
		var CS_MID = 0;
		var H_MID = 0;
		var WIN_MID = 0;
		var CC_MID = 0;
		
		var G_MID = 0;
		var K_MID = 0;
		var De_MID = 0;
		var A_MID = 0;
		var VW_MID = 0;
		var WK_MID = 0;
		var WP_MID = 0;
		var KC_MID = 0;
		var KDA_MID = 0;
		var TeamKills_MID = 0;
		
		var FBContribution_MID = 0;
		var KillSprees_MID = 0;
		var LargestKillingSpree_MID = 0;
		var CSDiffPerMin_zeroToTen_MID = 0;
		var XPPerMin_zeroToTen_MID = 0;
		var XPPerMin_zeroToThirty_MID = 0;
		var XPDiffPerMin_zeroToTen_MID = 0;
		var XPDiffPerMin_tenToTwenty_MID = 0;
		var XPDiffPerMin_twentyToThirty_MID = 0;
		var TeamGoldPercent_MID = 0;
		var TeamDamagePercent_MID = 0;
		var TeamGold_MID = 0;
		var TeamDamage_MID = 0;
		
		var D_TOP = 0;
		var DT_TOP = 0;
		var CS_zeroToTen_TOP = 0;
		var CS_TOP = 0;
		var H_TOP = 0;
		var WIN_TOP = 0;
		var CC_TOP = 0;
		
		var G_TOP = 0;
		var K_TOP = 0;
		var De_TOP = 0;
		var A_TOP = 0;
		var KDA_TOP = 0;
		var VW_TOP = 0;
		var WK_TOP = 0;
		var WP_TOP = 0;
		var KC_TOP = 0;
		var KDA_TOP = 0;
		var TeamKills_TOP = 0;
		
		var FBContribution_TOP = 0;
		var KillSprees_TOP = 0;
		var LargestKillingSpree_TOP = 0;
		var CSDiffPerMin_zeroToTen_TOP= 0;
		var XPPerMin_zeroToTen_TOP = 0;
		var XPPerMin_zeroToThirty_TOP = 0;
		var XPDiffPerMin_zeroToTen_TOP = 0;
		var XPDiffPerMin_tenToTwenty_TOP = 0;
		var XPDiffPerMin_twentyToThirty_TOP = 0;
		var TeamGoldPercent_TOP = 0;
		var TeamDamagePercent_TOP = 0;
		var TeamGold_TOP = 0;
		var TeamDamage_TOP = 0;
		
		var D_JG = 0;
		var DT_JG = 0;
		var CS_zeroToTen_JG = 0;
		var CS_JG = 0;
		var H_JG = 0;
		var WIN_JG = 0;
		var CC_JG = 0;
		
		var G_JG = 0;
		var K_JG = 0;
		var De_JG = 0;
		var A_JG = 0;
		var KDA_JG = 0;
		var VW_JG = 0;
		var WK_JG = 0;
		var WP_JG = 0;
		var KC_JG = 0;
		var TeamKills_JG = 0;
		
		var FBContribution_JG = 0;
		var KillSprees_JG = 0;
		var LargestKillingSpree_JG = 0;
		var CSDiffPerMin_zeroToTen_JG = 0;
		var XPPerMin_zeroToTen_JG = 0;
		var XPPerMin_zeroToThirty_JG = 0;
		var XPDiffPerMin_zeroToTen_JG = 0;
		var XPDiffPerMin_tenToTwenty_JG = 0;
		var XPDiffPerMin_twentyToThirty_JG = 0;
		var TeamGoldPercent_JG = 0;
		var TeamDamagePercent_JG = 0;
		var TeamGold_JG = 0;
		var TeamDamage_JG = 0;
		
		var D_SUP = 0;
		var DT_SUP = 0;
		var CS_zeroToTen_SUP = 0;
		var CS_SUP = 0;
		var H_SUP = 0;
		var WIN_SUP = 0;
		var CC_SUP = 0;
		
		var G_SUP = 0;
		var K_SUP = 0;
		var De_SUP = 0;
		var A_SUP = 0;
		var KDA_SUP = 0;
		var VW_SUP = 0;
		var WK_SUP = 0;
		var WP_SUP = 0;
		var KC_SUP = 0;
		var TeamKills_SUP = 0;
		
		var FBContribution_SUP = 0;
		var KillSprees_SUP = 0;
		var LargestKillingSpree_SUP = 0;
		var CSDiffPerMin_zeroToTen_SUP = 0;
		var XPPerMin_zeroToTen_SUP = 0;
		var XPPerMin_zeroToThirty_SUP = 0;
		var XPDiffPerMin_zeroToTen_SUP = 0;
		var XPDiffPerMin_tenToTwenty_SUP = 0;
		var XPDiffPerMin_twentyToThirty_SUP = 0;
		var TeamGoldPercent_SUP = 0;
		var TeamDamagePercent_SUP = 0;
		var TeamGold_SUP = 0;
		var TeamDamage_SUP = 0;
		
		var numberOfMatchesOverTwenty_TOP = 0;
		var numberOfMatchesOverThirty_TOP = 0;
		var numberOfMatchesOverTwenty_ADC = 0;
		var numberOfMatchesOverThirty_ADC = 0;
		var numberOfMatchesOverTwenty_MID = 0;
		var numberOfMatchesOverThirty_MID = 0;
		var numberOfMatchesOverTwenty_JG = 0;
		var numberOfMatchesOverThirty_JG = 0;
		var numberOfMatchesOverTwenty_SUP = 0;
		var numberOfMatchesOverThirty_SUP = 0;
		
		var gatherVersatilityData = function(match, participantID){
			if(match.participants[participantID-1].timeline.lane === 'TOP'){
				
				if(match.matchDuration > 1200){
					numberOfMatchesOverTwenty_TOP ++;
					if(match.matchDuration > 1800){
						numberOfMatchesOverThirty_TOP ++;
					}
				}
				
				
				topPlayed ++;
				topTimelineNum ++;
				PlayedLength_TOP += match.matchDuration;
				D_TOP += match.participants[participantID-1].stats.totalDamageDealtToChampions;
				DT_TOP += match.participants[participantID-1].stats.totalDamageTaken;
				CS_TOP += match.participants[participantID-1].stats.minionsKilled;
				H_TOP += match.participants[participantID-1].stats.totalHeal;
				
				
				if(match.participants[participantID-1].stats.firstBloodAssist||match.participants[participantID-1].stats.firstBloodKill){
					FBContribution_TOP ++;
				}
				KillSprees_TOP += match.participants[participantID-1].stats.killingSprees;
				LargestKillingSpree_TOP += match.participants[participantID-1].stats.largestKillingSpree;
				
				if(match.participants[participantID-1].timeline){
					
					if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
						CS_zeroToTen_TOP += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
					}
					if(match.participants[participantID-1].timeline.csDiffPerMinDeltas){
						CSDiffPerMin_zeroToTen_TOP += match.participants[participantID-1].timeline.csDiffPerMinDeltas.zeroToTen;
					}
						
					if(match.participants[participantID-1].timeline.xpPerMinDeltas){
						XPPerMin_zeroToTen_TOP += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
						XPPerMin_zeroToThirty_TOP += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
						if(match.matchDuration > 1800){
							XPPerMin_zeroToThirty_TOP += match.participants[participantID-1].timeline.xpPerMinDeltas.twentyToThirty;
						}
						if(match.matchDuration> 1200){
							XPPerMin_zeroToThirty_TOP += match.participants[participantID-1].timeline.xpPerMinDeltas.tenToTwenty;
						}
					}
					
					if(match.participants[participantID-1].timeline.xpDiffPerMinDeltas){
						XPDiffPerMin_zeroToTen_TOP += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.zeroToTen;
						if(match.matchDuration > 1800){
							XPDiffPerMin_twentyToThirty_TOP += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.twentyToThirty;
						}
						if(match.matchDuration> 1200){
							XPDiffPerMin_tenToTwenty_TOP += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.tenToTwenty;
						}
					}
				}
				else{
					topTimelineNum --;
					numberOfMatchesOverTwenty_TOP--;
					numberOfMatchesOverThirty_TOP--;
				}
				
				G_TOP += match.participants[participantID-1].stats.goldEarned;
				K_TOP += match.participants[participantID-1].stats.kills;
				De_TOP += match.participants[participantID-1].stats.deaths;
				A_TOP += match.participants[participantID-1].stats.assists;
				
				VW_TOP += match.participants[participantID-1].stats.visionWardsBoughtInGame;
				WK_TOP += match.participants[participantID-1].stats.wardsKilled;
				WP_TOP += match.participants[participantID-1].stats.wardsPlaced;
				
				var participant_teamID = match.participants[participantID-1].teamId;
				for(var i = 0; i < 10; i++){
					if(match.participants[i].teamId === participant_teamID){
						TeamKills_TOP += match.participants[i].stats.kills;
						TeamGold_TOP += match.participants[i].stats.goldEarned;
						TeamDamage_TOP += match.participants[i].stats.totalDamageDealtToChampions;
					}
				}
				
				if(match.participants[participantID-1].stats.winner){
					WIN_TOP++;
				}
				CC_TOP += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
			}
			else if(match.participants[participantID-1].timeline.lane === 'MIDDLE'){
				if(match.matchDuration > 1200){
					numberOfMatchesOverTwenty_MID ++;
					if(match.matchDuration > 1800){
						numberOfMatchesOverThirty_MID ++;
					}
				}
				midPlayed ++;
				midTimelineNum ++;
				PlayedLength_MID += match.matchDuration;
				D_MID += match.participants[participantID-1].stats.totalDamageDealtToChampions;
				DT_MID += match.participants[participantID-1].stats.totalDamageTaken;
				CS_MID += match.participants[participantID-1].stats.minionsKilled;
				H_MID += match.participants[participantID-1].stats.totalHeal;
				
				if(match.participants[participantID-1].stats.firstBloodAssist||match.participants[participantID-1].stats.firstBloodKill){
					FBContribution_MID ++;
				}
				KillSprees_MID += match.participants[participantID-1].stats.killingSprees;
				LargestKillingSpree_MID += match.participants[participantID-1].stats.largestKillingSpree;
				
				if(match.participants[participantID-1].timeline){
					
					if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
						CS_zeroToTen_MID += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
					}
					if(match.participants[participantID-1].timeline.csDiffPerMinDeltas){
						CSDiffPerMin_zeroToTen_MID += match.participants[participantID-1].timeline.csDiffPerMinDeltas.zeroToTen;
					}
						
					if(match.participants[participantID-1].timeline.xpPerMinDeltas){
						XPPerMin_zeroToTen_MID += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
						XPPerMin_zeroToThirty_MID += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
						
						
						
						if(match.matchDuration > 1800){
							XPPerMin_zeroToThirty_MID += match.participants[participantID-1].timeline.xpPerMinDeltas.twentyToThirty;
						}
						if(match.matchDuration> 1200){
							XPPerMin_zeroToThirty_MID += match.participants[participantID-1].timeline.xpPerMinDeltas.tenToTwenty;
						}
					}
					
					if(match.participants[participantID-1].timeline.xpDiffPerMinDeltas){
						XPDiffPerMin_zeroToTen_MID += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.zeroToTen;
						
						
						if(match.matchDuration > 1800){
							XPDiffPerMin_twentyToThirty_MID += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.twentyToThirty;
						}
						if(match.matchDuration> 1200){
							XPDiffPerMin_tenToTwenty_MID += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.tenToTwenty;
						}
					}
				}
				else{
					midTimelineNum --;
					numberOfMatchesOverTwenty_MID--;
					numberOfMatchesOverThirty_MID--;
				}
				
				G_MID += match.participants[participantID-1].stats.goldEarned;
				K_MID += match.participants[participantID-1].stats.kills;
				De_MID += match.participants[participantID-1].stats.deaths;
				A_MID += match.participants[participantID-1].stats.assists;
				
				VW_MID += match.participants[participantID-1].stats.visionWardsBoughtInGame;
				WK_MID += match.participants[participantID-1].stats.wardsKilled;
				WP_MID += match.participants[participantID-1].stats.wardsPlaced;
				
				var participant_teamID = match.participants[participantID-1].teamId;
				for(var i = 0; i < 10; i++){
					if(match.participants[i].teamId === participant_teamID){
						TeamKills_MID += match.participants[i].stats.kills;
						TeamGold_MID += match.participants[i].stats.goldEarned;
						TeamDamage_MID += match.participants[i].stats.totalDamageDealtToChampions;
					}
				}
				
				if(match.participants[participantID-1].stats.winner){
					WIN_MID++;
				}
				CC_MID += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
			}
			else if(match.participants[participantID-1].timeline.lane === 'JUNGLE'){		
				if(match.matchDuration > 1200){
					numberOfMatchesOverTwenty_JG ++;
					if(match.matchDuration > 1800){
						numberOfMatchesOverThirty_JG ++;
					}
				}
				junglePlayed ++;
				jgTimelineNum ++;
				PlayedLength_JG += match.matchDuration;
				D_JG += match.participants[participantID-1].stats.totalDamageDealtToChampions;
				DT_JG += match.participants[participantID-1].stats.totalDamageTaken;
				CS_JG += match.participants[participantID-1].stats.neutralMinionsKilled;
				H_JG += match.participants[participantID-1].stats.totalHeal;
				
				if(match.participants[participantID-1].stats.firstBloodAssist||match.participants[participantID-1].stats.firstBloodKill){
					FBContribution_JG ++;
				}
				KillSprees_JG += match.participants[participantID-1].stats.killingSprees;
				LargestKillingSpree_JG += match.participants[participantID-1].stats.largestKillingSpree;
				
				if(match.participants[participantID-1].timeline){
					
					if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
						CS_zeroToTen_JG += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
					}
					if(match.participants[participantID-1].timeline.csDiffPerMinDeltas){
						CSDiffPerMin_zeroToTen_JG += match.participants[participantID-1].timeline.csDiffPerMinDeltas.zeroToTen;
					}
						
					if(match.participants[participantID-1].timeline.xpPerMinDeltas){
						XPPerMin_zeroToTen_JG += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
						XPPerMin_zeroToThirty_JG += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
						
						
						if(match.matchDuration > 1800){
							XPPerMin_zeroToThirty_JG += match.participants[participantID-1].timeline.xpPerMinDeltas.twentyToThirty;
						}
						if(match.matchDuration> 1200){
							XPPerMin_zeroToThirty_JG += match.participants[participantID-1].timeline.xpPerMinDeltas.tenToTwenty;
						}
					}
					
					if(match.participants[participantID-1].timeline.xpDiffPerMinDeltas){
						XPDiffPerMin_zeroToTen_JG += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.zeroToTen;
						
						
						
						if(match.matchDuration > 1800){
							XPDiffPerMin_twentyToThirty_JG += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.twentyToThirty;
						}
						if(match.matchDuration> 1200){
							XPDiffPerMin_tenToTwenty_JG += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.tenToTwenty;
						}
					}
				}
				else{
					jgTimelineNum --;
					numberOfMatchesOverTwenty_JG--;
					numberOfMatchesOverThirty_JG--;
				}
				G_JG+= match.participants[participantID-1].stats.goldEarned;
				K_JG += match.participants[participantID-1].stats.kills;
				De_JG += match.participants[participantID-1].stats.deaths;
				A_JG += match.participants[participantID-1].stats.assists;
				
				VW_JG += match.participants[participantID-1].stats.visionWardsBoughtInGame;
				WK_JG += match.participants[participantID-1].stats.wardsKilled;
				WP_JG += match.participants[participantID-1].stats.wardsPlaced;
				
				
				var participant_teamID = match.participants[participantID-1].teamId;
				for(var i = 0; i < 10; i++){
					if(match.participants[i].teamId === participant_teamID){
						TeamKills_JG += match.participants[i].stats.kills;
						TeamGold_JG += match.participants[i].stats.goldEarned;
						TeamDamage_JG += match.participants[i].stats.totalDamageDealtToChampions;
					}
				}
				if(match.participants[participantID-1].stats.winner){
					WIN_JG++;
				}
				CC_JG += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
			}
			else if(match.participants[participantID-1].timeline.lane === 'BOTTOM'){
				if(match.participants[participantID-1].timeline.role === 'DUO_SUPPORT'){
					if(match.matchDuration > 1200){
						numberOfMatchesOverTwenty_SUP ++;
						if(match.matchDuration > 1800){
							numberOfMatchesOverThirty_SUP ++;
						}
					}
					supportPlayed ++;
					supTimelineNum ++;
					PlayedLength_SUP += match.matchDuration;
					D_SUP += match.participants[participantID-1].stats.totalDamageDealtToChampions;
					DT_SUP += match.participants[participantID-1].stats.totalDamageTaken;
					CS_SUP += match.participants[participantID-1].stats.minionsKilled;
					H_SUP += match.participants[participantID-1].stats.totalHeal;
					
					if(match.participants[participantID-1].stats.firstBloodAssist||match.participants[participantID-1].stats.firstBloodKill){
						FBContribution_SUP ++;
					}
					KillSprees_SUP += match.participants[participantID-1].stats.killingSprees;
					LargestKillingSpree_SUP += match.participants[participantID-1].stats.largestKillingSpree;
					
					if(match.participants[participantID-1].timeline){
						
						if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
							CS_zeroToTen_SUP += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
						}
						if(match.participants[participantID-1].timeline.csDiffPerMinDeltas){
							CSDiffPerMin_zeroToTen_SUP += match.participants[participantID-1].timeline.csDiffPerMinDeltas.zeroToTen;
						}
						
						if(match.participants[participantID-1].timeline.xpPerMinDeltas){
							XPPerMin_zeroToTen_SUP += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
							XPPerMin_zeroToThirty_SUP += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
							
							
							if(match.matchDuration > 1800){
								XPPerMin_zeroToThirty_SUP += match.participants[participantID-1].timeline.xpPerMinDeltas.twentyToThirty;
							}
							if(match.matchDuration> 1200){
								XPPerMin_zeroToThirty_SUP += match.participants[participantID-1].timeline.xpPerMinDeltas.tenToTwenty;
							}
						}
						
						if(match.participants[participantID-1].timeline.xpDiffPerMinDeltas){
							XPDiffPerMin_zeroToTen_SUP += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.zeroToTen;
							
							
							if(match.matchDuration > 1800){
								XPDiffPerMin_twentyToThirty_SUP += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.twentyToThirty;
							}
							if(match.matchDuration> 1200){
								XPDiffPerMin_tenToTwenty_SUP += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.tenToTwenty;
							}
						}
					}
					else{
						supTimelineNum --;
						numberOfMatchesOverTwenty_SUP--;
						numberOfMatchesOverThirty_SUP--;
					}
					
					G_SUP+= match.participants[participantID-1].stats.goldEarned;
					K_SUP += match.participants[participantID-1].stats.kills;
					De_SUP += match.participants[participantID-1].stats.deaths;
					A_SUP += match.participants[participantID-1].stats.assists;
					
					VW_SUP += match.participants[participantID-1].stats.visionWardsBoughtInGame;
					WK_SUP += match.participants[participantID-1].stats.wardsKilled;
					WP_SUP += match.participants[participantID-1].stats.wardsPlaced;
					
					var participant_teamID = match.participants[participantID-1].teamId;
					for(var i = 0; i < 10; i++){
						if(match.participants[i].teamId === participant_teamID){
							TeamKills_SUP += match.participants[i].stats.kills;
							TeamGold_SUP += match.participants[i].stats.goldEarned;
							TeamDamage_SUP += match.participants[i].stats.totalDamageDealtToChampions;
						}
					}
					if(match.participants[participantID-1].stats.winner){
						WIN_SUP++;
					}
					CC_SUP += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
				}
				else{
					if(match.matchDuration > 1200){
						numberOfMatchesOverTwenty_ADC ++;
						if(match.matchDuration > 1800){
							numberOfMatchesOverThirty_ADC ++;
						}
					}
					adcPlayed ++;
					adcTimelineNum ++;
					PlayedLength_ADC += match.matchDuration;
					D_ADC += match.participants[participantID-1].stats.totalDamageDealtToChampions;
					DT_ADC += match.participants[participantID-1].stats.totalDamageTaken;
					CS_ADC += match.participants[participantID-1].stats.minionsKilled;
					H_ADC += match.participants[participantID-1].stats.totalHeal;
					
					if(match.participants[participantID-1].stats.firstBloodAssist||match.participants[participantID-1].stats.firstBloodKill){
						FBContribution_ADC ++;
					}
					KillSprees_ADC += match.participants[participantID-1].stats.killingSprees;
					LargestKillingSpree_ADC += match.participants[participantID-1].stats.largestKillingSpree;
					
					
					
					if(match.participants[participantID-1].timeline){
						if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
							CS_zeroToTen_ADC += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
						}
						
						if(match.participants[participantID-1].timeline.csDiffPerMinDeltas){
							CSDiffPerMin_zeroToTen_ADC += match.participants[participantID-1].timeline.csDiffPerMinDeltas.zeroToTen;
						}
						
						if(match.participants[participantID-1].timeline.xpPerMinDeltas){
							XPPerMin_zeroToTen_ADC += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
							XPPerMin_zeroToThirty_ADC += match.participants[participantID-1].timeline.xpPerMinDeltas.zeroToTen;
							
							
							if(match.matchDuration > 1800){
								XPPerMin_zeroToThirty_ADC += match.participants[participantID-1].timeline.xpPerMinDeltas.twentyToThirty;
							}
							if(match.matchDuration> 1200){
								XPPerMin_zeroToThirty_ADC += match.participants[participantID-1].timeline.xpPerMinDeltas.tenToTwenty;
							}
						}
						
						if(match.participants[participantID-1].timeline.xpDiffPerMinDeltas){
							XPDiffPerMin_zeroToTen_ADC += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.zeroToTen;
							
							
							if(match.matchDuration > 1800){
								XPDiffPerMin_twentyToThirty_ADC += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.twentyToThirty;
							}
							if(match.matchDuration> 1200){
								XPDiffPerMin_tenToTwenty_ADC += match.participants[participantID-1].timeline.xpDiffPerMinDeltas.tenToTwenty;
							}
						}
					}
					else{
						adcTimelineNum --;
						numberOfMatchesOverTwenty_ADC--;
						numberOfMatchesOverThirty_ADC--;
					}
					
					G_ADC += match.participants[participantID-1].stats.goldEarned;
					K_ADC += match.participants[participantID-1].stats.kills;
					De_ADC += match.participants[participantID-1].stats.deaths;
					A_ADC += match.participants[participantID-1].stats.assists;
					
					VW_ADC += match.participants[participantID-1].stats.visionWardsBoughtInGame;
					WK_ADC += match.participants[participantID-1].stats.wardsKilled;
					WP_ADC += match.participants[participantID-1].stats.wardsPlaced;
					
					var participant_teamID = match.participants[participantID-1].teamId;
					for(var i = 0; i < 10; i++){
						if(match.participants[i].teamId === participant_teamID){
							TeamKills_ADC += match.participants[i].stats.kills;
							TeamGold_ADC += match.participants[i].stats.goldEarned;
							TeamDamage_ADC += match.participants[i].stats.totalDamageDealtToChampions;
						}
					}
					if(match.participants[participantID-1].stats.winner){
						WIN_ADC++;
					}
					CC_ADC += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
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
		
		var totalHeal = 0;
		var totalDamageDealtToChampions = 0;
		var totalDamageTaken = 0;
		var goldEarned = 0;
		var gatherMatchDetails = function(match, participantID){
			totalHeal += match.participants[participantID-1].stats.totalHeal;
			totalDamageDealtToChampions += match.participants[participantID-1].stats.totalDamageDealtToChampions;
			totalDamageTaken += match.participants[participantID-1].stats.totalDamageTaken;
			goldEarned += match.participants[participantID-1].stats.goldEarned;
		};
		
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
			gatherControlDuration(match, participantID);
			gatherMatchDetails(match, participantID);
		};
		
		//KDA
		var KDA = ((totalKills + totalAssists) / Math.max(1, totalDeaths)).toFixed(2);
		
		//KillContribution
		var KillContribution = Math.round((totalKills_KillContribution+totalAssists_KillContribution)/totalKills_AllMatches*100);
		
		//Average game time
		var avgDuration = match_totalDuration/matchJson.matches.length;
		var avgDuration_parsed = (Math.floor(avgDuration/60)).toString() + 'min' + (Math.floor(avgDuration%60)) + 'sec';
		
		//Win Rate
		var winRate = Math.round(match_wins/matchJson.matches.length*100);
		
		var control_Duration_parsed = (Math.floor(control_Duration/60)).toString() + 'min' + (Math.floor(control_Duration%60)) + 'sec';
		
		var targetControl = (total_Towerkills + dragonSlained + 3 * riftHeraldSlained + 5 * baronSlained);
		
		var BE = (((supportPlayed)*wardsPlaced+totalDamageDealtToChampions*supportPlayed/35+(3/5)*totalDamageTaken*supportPlayed/20+(1+0.2*adcPlayed+0.2*midPlayed)*totalDamageDealtToChampions+(3/5)*(1-0.07*junglePlayed-0.1*(adcPlayed+midPlayed))*totalDamageTaken+(control_Duration*supportPlayed/10)+(0.7+supportPlayed/3)*totalHeal+control_Duration+goldEarned)/(Math.pow(avgDuration,3))*50000).toFixed(2);
		
		var damageTakenPerMatch = (totalDamageTaken/ matchJson.matches.length).toFixed(2);
		var healPerMatch = (totalHeal/ matchJson.matches.length).toFixed(2);
		var damageDealtToChampionsPerMatch = (totalDamageDealtToChampions/ matchJson.matches.length).toFixed(2);
		var GPM = (goldEarned/ match_totalDuration*60).toFixed(2);
		
		
		
		
		if(topPlayed){
			CS_zeroToTen_TOP = (CS_zeroToTen_TOP/topTimelineNum * 10).toFixed(2);
			KC_TOP = ((K_TOP+A_TOP)/TeamKills_TOP).toFixed(2);
			KDA_TOP = ((K_TOP + A_TOP) / Math.max(1, De_TOP)).toFixed(2);
			TeamGoldPercent_TOP = (G_TOP/TeamGold_TOP).toFixed(2);
			TeamDamagePercent_TOP = (D_TOP/TeamDamage_TOP).toFixed(2);
			FBContribution_TOP = (FBContribution_TOP/topTimelineNum*100).toFixed(2);
			CSDiffPerMin_zeroToTen_TOP = (CSDiffPerMin_zeroToTen_TOP/topTimelineNum).toFixed(2);
			XPPerMin_zeroToTen_TOP = (XPPerMin_zeroToTen_TOP/topTimelineNum).toFixed(2);
			if(numberOfMatchesOverThirty_TOP){
				XPPerMin_zeroToThirty_TOP = (XPPerMin_zeroToThirty_TOP/numberOfMatchesOverThirty_TOP).toFixed(2);
				XPDiffPerMin_twentyToThirty_TOP = (XPDiffPerMin_twentyToThirty_TOP/numberOfMatchesOverThirty_TOP).toFixed(2);
			}
			else{
				XPPerMin_zeroToThirty_TOP = 0;
				XPDiffPerMin_twentyToThirty_TOP = 0;
			}
			XPDiffPerMin_zeroToTen_TOP = (XPDiffPerMin_zeroToTen_TOP/topTimelineNum).toFixed(2);
			if(numberOfMatchesOverTwenty_TOP){
				XPDiffPerMin_tenToTwenty_TOP = (XPDiffPerMin_tenToTwenty_TOP/numberOfMatchesOverTwenty_TOP).toFixed(2);
			}
			else{
				XPDiffPerMin_tenToTwenty_TOP = 0;
			}
			KillSprees_TOP = (KillSprees_TOP/topPlayed).toFixed(2);
			LargestKillingSpree_TOP = (LargestKillingSpree_TOP/topPlayed).toFixed(2);
		}
		else{
			CS_zeroToTen_TOP = 0;
			KC_TOP = 0;
			KDA_TOP = 0;
			WinRate_TOP = 0;
			TeamGoldPercent_TOP = 0;
			TeamDamagePercent_TOP = 0;
			FBContribution_TOP = 0;
		}
		
		if(midPlayed){
			CS_zeroToTen_MID = (CS_zeroToTen_MID/midTimelineNum * 10).toFixed(2);
			KC_MID = ((K_MID+A_MID)/TeamKills_MID).toFixed(2);
			KDA_MID = ((K_MID + A_MID) / Math.max(1, De_MID)).toFixed(2);
			TeamGoldPercent_MID = (G_MID/TeamGold_MID).toFixed(2);
			TeamDamagePercent_MID = (D_MID/TeamDamage_MID).toFixed(2);
			FBContribution_MID = (FBContribution_MID/midTimelineNum*100).toFixed(2);
			CSDiffPerMin_zeroToTen_MID = (CSDiffPerMin_zeroToTen_MID/midTimelineNum).toFixed(2);
			XPPerMin_zeroToTen_MID = (XPPerMin_zeroToTen_MID/midTimelineNum).toFixed(2);
			if(numberOfMatchesOverThirty_MID){
				XPPerMin_zeroToThirty_MID = (XPPerMin_zeroToThirty_MID/numberOfMatchesOverThirty_MID).toFixed(2);
				XPDiffPerMin_twentyToThirty_MID = (XPDiffPerMin_twentyToThirty_MID/numberOfMatchesOverThirty_MID).toFixed(2);
			}
			else{
				XPPerMin_zeroToThirty_MID = 0;
				XPDiffPerMin_twentyToThirty_MID = 0;
			}
			
			XPDiffPerMin_zeroToTen_MID = (XPDiffPerMin_zeroToTen_MID/midTimelineNum).toFixed(2);
			if(numberOfMatchesOverTwenty_MID){
				XPDiffPerMin_tenToTwenty_MID = (XPDiffPerMin_tenToTwenty_MID/numberOfMatchesOverTwenty_MID).toFixed(2);
			}
			else{
				XPDiffPerMin_tenToTwenty_MID = 0;
			}
			KillSprees_MID = (KillSprees_MID/midPlayed).toFixed(2);
			LargestKillingSpree_MID = (LargestKillingSpree_MID/midPlayed).toFixed(2);
		}
		else{
			CS_zeroToTen_MID = 0;
			KC_MID = 0;
			KDA_MID = 0;
			WinRate_MID = 0;
			TeamGoldPercent_MID = 0;
			TeamDamagePercent_MID = 0;
			FBContribution_MID = 0;
		}
		
		if(adcPlayed){
			CS_zeroToTen_ADC = (CS_zeroToTen_ADC/adcTimelineNum * 10).toFixed(2);
			KC_ADC = ((K_ADC+A_ADC)/TeamKills_ADC).toFixed(2);
			KDA_ADC = ((K_ADC + A_ADC) / Math.max(1, De_ADC)).toFixed(2);
			TeamGoldPercent_ADC = (G_ADC/TeamGold_ADC).toFixed(2);
			TeamDamagePercent_ADC = (D_ADC/TeamDamage_ADC).toFixed(2);
			FBContribution_ADC = (FBContribution_ADC/adcTimelineNum*100).toFixed(2);
			CSDiffPerMin_zeroToTen_ADC = (CSDiffPerMin_zeroToTen_TOP/adcTimelineNum).toFixed(2);
			XPPerMin_zeroToTen_ADC = (XPPerMin_zeroToTen_ADC/adcTimelineNum).toFixed(2);
			
			if(numberOfMatchesOverThirty_ADC){
				XPPerMin_zeroToThirty_ADC = (XPPerMin_zeroToThirty_ADC/numberOfMatchesOverThirty_ADC).toFixed(2);
				XPDiffPerMin_twentyToThirty_ADC = (XPDiffPerMin_twentyToThirty_ADC/numberOfMatchesOverThirty_ADC).toFixed(2);
			}
			else{
				XPPerMin_zeroToThirty_ADC = 0;
				XPDiffPerMin_twentyToThirty_ADC = 0;
			}
			XPDiffPerMin_zeroToTen_ADC = (XPDiffPerMin_zeroToTen_ADC/adcTimelineNum).toFixed(2);
			if(numberOfMatchesOverTwenty_ADC){
				XPDiffPerMin_tenToTwenty_ADC = (XPDiffPerMin_tenToTwenty_ADC/numberOfMatchesOverTwenty_ADC).toFixed(2);
			}
			else{
				XPDiffPerMin_tenToTwenty_ADC = 0;
			}
			KillSprees_ADC = (KillSprees_ADC/adcPlayed).toFixed(2);
			LargestKillingSpree_ADC = (LargestKillingSpree_ADC/adcPlayed).toFixed(2);
		}
		else{
			CS_zeroToTen_ADC = 0;
			KC_ADC = 0;
			KDA_ADC = 0;
			WinRate_ADC = 0;
			TeamGoldPercent_ADC = 0;
			TeamDamagePercent_ADC = 0;
			FBContribution_ADC = 0;
		}
		
		
		if(junglePlayed){
			CS_zeroToTen_JG = (CS_zeroToTen_JG/jgTimelineNum * 10).toFixed(2);
			KC_JG = ((K_JG+A_JG)/TeamKills_JG).toFixed(2);
			KDA_JG = ((K_JG + A_JG) / Math.max(1, De_JG)).toFixed(2);
			TeamGoldPercent_JG = (G_JG/TeamGold_JG).toFixed(2);
			TeamDamagePercent_JG = (D_JG/TeamDamage_JG).toFixed(2);
			FBContribution_JG = (FBContribution_JG/jgTimelineNum*100).toFixed(2);
			CSDiffPerMin_zeroToTen_JG = (CSDiffPerMin_zeroToTen_JG/jgTimelineNum).toFixed(2);
			
			if(numberOfMatchesOverThirty_JG){
				XPPerMin_zeroToThirty_JG = (XPPerMin_zeroToThirty_JG/numberOfMatchesOverThirty_JG).toFixed(2);
				XPDiffPerMin_twentyToThirty_JG = (XPDiffPerMin_twentyToThirty_JG/numberOfMatchesOverThirty_JG).toFixed(2);
			}
			else{
				XPPerMin_zeroToThirty_JG = 0;
				XPDiffPerMin_twentyToThirty_JG = 0;
			}
			
			XPPerMin_zeroToTen_JG = (XPPerMin_zeroToTen_JG/jgTimelineNum).toFixed(2);
			
			XPDiffPerMin_zeroToTen_JG = (XPDiffPerMin_zeroToTen_JG/jgTimelineNum).toFixed(2);
			if(numberOfMatchesOverTwenty_JG){
				XPDiffPerMin_tenToTwenty_JG = (XPDiffPerMin_tenToTwenty_JG/numberOfMatchesOverTwenty_JG).toFixed(2);
			}
			else{
				XPDiffPerMin_tenToTwenty_JG = 0;
			}
			KillSprees_JG = (KillSprees_JG/junglePlayed).toFixed(2);
			LargestKillingSpree_JG = (LargestKillingSpree_JG/junglePlayed).toFixed(2);
		}
		else{
			CS_zeroToTen_JG = 0;
			KC_JG = 0;
			KDA_JG = 0;
			WinRate_JG = 0;
			TeamGoldPercent_JG = 0;
			TeamDamagePercent_JG = 0;
			FBContribution_JG = 0;
		}
		
		if(supportPlayed){
			CS_zeroToTen_SUP = (CS_zeroToTen_SUP/supTimelineNum * 10).toFixed(2);
			KC_SUP = ((K_SUP+A_SUP)/TeamKills_SUP).toFixed(2);
			KDA_SUP = ((K_SUP + A_SUP) / Math.max(1, De_SUP)).toFixed(2);
			TeamGoldPercent_SUP = (G_SUP/TeamGold_SUP).toFixed(2);
			TeamDamagePercent_SUP = (D_SUP/TeamDamage_SUP).toFixed(2);
			FBContribution_SUP = (FBContribution_SUP/supTimelineNum*100).toFixed(2);
			CSDiffPerMin_zeroToTen_SUP = (CSDiffPerMin_zeroToTen_SUP/supTimelineNum).toFixed(2);
			XPPerMin_zeroToTen_SUP = (XPPerMin_zeroToTen_SUP/supTimelineNum).toFixed(2);
			XPDiffPerMin_zeroToTen_SUP = (XPDiffPerMin_zeroToTen_SUP/supTimelineNum).toFixed(2);
			if(numberOfMatchesOverThirty_SUP){
				XPPerMin_zeroToThirty_SUP = (XPPerMin_zeroToThirty_SUP/numberOfMatchesOverThirty_SUP).toFixed(2);
				XPDiffPerMin_twentyToThirty_SUP = (XPDiffPerMin_twentyToThirty_SUP/numberOfMatchesOverThirty_SUP).toFixed(2);
			}
			else{
				XPPerMin_zeroToThirty_SUP = 0;
				XPDiffPerMin_twentyToThirty_SUP = 0;
			}
			
			if(numberOfMatchesOverTwenty_SUP){
				XPDiffPerMin_tenToTwenty_SUP = (XPDiffPerMin_tenToTwenty_SUP/numberOfMatchesOverTwenty_SUP).toFixed(2);
			}
			else{
				XPDiffPerMin_tenToTwenty_SUP = 0;
			}
			KillSprees_SUP = (KillSprees_SUP/supportPlayed).toFixed(2);
			LargestKillingSpree_SUP = (LargestKillingSpree_SUP/supportPlayed).toFixed(2);
			
		}
		else{
			CS_zeroToTen_SUP = 0;
			KC_SUP = 0;
			KDA_SUP = 0;
			WinRate_SUP = 0;
			TeamGoldPercent_SUP = 0;
			TeamDamagePercent_SUP = 0;
			FBContribution_SUP = 0;
		}
		
		
		
		
		
		GPM_ADC = (G_ADC/ PlayedLength_ADC*60).toFixed(2);
		CS_zeroToTenPerMatch_ADC = (CS_zeroToTen_ADC/adcPlayed*10).toFixed(2);
		CSPM_ADC = (CS_ADC/PlayedLength_ADC*60).toFixed(2);
		DPM_ADC = (D_ADC/PlayedLength_ADC*60).toFixed(2);
		DTPM_ADC = (DT_ADC/PlayedLength_ADC*60).toFixed(2);
		WinRate_ADC = (WIN_ADC/adcPlayed * 100).toFixed(2);
		H_ADC = (H_ADC/PlayedLength_ADC*60).toFixed(2);
		
		if(adcPlayed <= 0){
			GPM_ADC = 0;
			CS_zeroToTenPerMatch_ADC = 0;
			CSPM_ADC = 0;
			DPM_ADC = 0;
			DTPM_ADC = 0;
			WinRate_ADC = 0;
			H_ADC = 0;
		}
		
		GPM_MID = (G_MID/ PlayedLength_MID*60).toFixed(2);
		CS_zeroToTenPerMatch_MID = (CS_zeroToTen_MID/midPlayed*10).toFixed(2);
		CSPM_MID = (CS_MID/PlayedLength_MID*60).toFixed(2);
		DPM_MID = (D_MID/PlayedLength_MID*60).toFixed(2);
		DTPM_MID = (DT_MID/PlayedLength_MID*60).toFixed(2);
		WinRate_MID = (WIN_MID/midPlayed * 100).toFixed(2);
		H_MID = (H_MID/PlayedLength_MID*60).toFixed(2);
		
		if(midPlayed <= 0){
			GPM_MID = 0;
			CS_zeroToTenPerMatch_MID = 0;
			CSPM_MID = 0;
			DPM_MID = 0;
			DTPM_MID = 0;
			WinRate_MID = 0;
			H_MID = 0;
		}
		
		GPM_TOP = (G_TOP/ PlayedLength_TOP*60).toFixed(2);
		CS_zeroToTenPerMatch_TOP = (CS_zeroToTen_TOP/topPlayed*10).toFixed(2);
		CSPM_TOP = (CS_TOP/PlayedLength_TOP*60).toFixed(2);
		DPM_TOP = (D_TOP/PlayedLength_TOP*60).toFixed(2);
		DTPM_TOP = (DT_TOP/PlayedLength_TOP*60).toFixed(2);
		WinRate_TOP = (WIN_TOP/topPlayed * 100).toFixed(2);
		H_TOP = (H_TOP/PlayedLength_TOP*60).toFixed(2);
		
		if(topPlayed <= 0){
			GPM_TOP = 0;
			CS_zeroToTenPerMatch_TOP = 0;
			CSPM_TOP = 0;
			DPM_TOP = 0;
			DTPM_TOP = 0;
			WinRate_TOP = 0;
			H_TOP = 0;
		}
		
		GPM_SUP = (goldEarned/ PlayedLength_SUP*60).toFixed(2);
		CS_zeroToTenPerMatch_SUP = (CS_zeroToTen_SUP/supportPlayed*10).toFixed(2);
		CSPM_SUP = (CS_SUP/PlayedLength_SUP*60).toFixed(2);
		DPM_SUP = (D_SUP/PlayedLength_SUP*60).toFixed(2);
		DTPM_SUP = (DT_SUP/PlayedLength_SUP*60).toFixed(2);
		WinRate_SUP = (WIN_SUP/supportPlayed * 100).toFixed(2);
		H_SUP = (H_SUP/PlayedLength_SUP*60).toFixed(2);
		
		if(supportPlayed <= 0){
			GPM_SUP = 0;
			CS_zeroToTenPerMatch_SUP = 0;
			CSPM_SUP = 0;
			DPM_SUP = 0;
			DTPM_SUP = 0;
			WinRate_SUP = 0;
			H_SUP = 0;
		}
		
		GPM_JG = (G_JG/ PlayedLength_JG*60).toFixed(2);
		CS_zeroToTenPerMatch_JG = (CS_zeroToTen_JG/junglePlayed*10).toFixed(2);
		CSPM_JG = (CS_JG/PlayedLength_JG*60).toFixed(2);
		DPM_JG = (D_JG/PlayedLength_JG*60).toFixed(2);
		DTPM_JG = (DT_JG/PlayedLength_JG*60).toFixed(2);
		WinRate_JG = (WIN_JG/junglePlayed * 100).toFixed(2);
		H_JG = (H_JG/PlayedLength_JG*60).toFixed(2);
		
		if(junglePlayed <= 0){
			GPM_JG = 0;
			CS_zeroToTenPerMatch_JG = 0;
			CSPM_JG = 0;
			DPM_JG = 0;
			DTPM_JG = 0;
			WinRate_JG = 0;
			H_JG = 0;
		}
		
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
		console.log(`		KDA: ${KDA}`);
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
		console.log(`		Target Control: ${targetControl}`);
		console.log(`		Total CC duration: ${control_Duration_parsed}`);
		console.log(`		Battle Efficiency: ${BE}`);
		*/
		
		
		//Average Data

		
		
		var KDA_avg;
		var KDA_crit;

		var BE_avg;
		var BE_crit;

		var Vision_avg;
		var Vision_crit;

		var KillContri_avg;
		var KillContri_crit;

		var TargetControl_avg;
		var TargetControl_crit;
		
		var GPM_avg;
		var GPM_crit;
		
		
		if(summoner_tier){
			KDA_avg = leagueDataArray[summoner_tier].KDA_AVG;
			KDA_crit = leagueDataArray[summoner_tier].KDA_CRIT;
			BE_avg = leagueDataArray[summoner_tier].BE;
			BE_crit = leagueDataArray[summoner_tier].BE_CRIT;
			Vision_avg = leagueDataArray[summoner_tier].VISION_AVG;
			Vision_crit = leagueDataArray[summoner_tier].VISION_CRIT;
			TargetControl_avg = leagueDataArray[summoner_tier].TARGETCONTROL_AVG;
			TargetControl_crit = leagueDataArray[summoner_tier].TARGETCONTROL_CRIT;
			KillContri_avg = leagueDataArray[summoner_tier].KILLCONTRIBUTION_AVG;
			KillContri_crit = leagueDataArray[summoner_tier].KILLCONTRIBUTION_CRIT;
			GPM_avg = leagueDataArray[summoner_tier].GPM;
			GPM_crit = leagueDataArray[summoner_tier].GPM_CRIT;
		}
		else{
			console.log("Summoner tier is not available");
		}
		
		var nextTier;
		
		var KDA_ThisTier;
		var KDA_NextTier;
		var BE_ThisTier;
		var BE_NextTier;
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
		var GPM_ThisTier;
		var GPM_NextTier;
		var DTPM_ThisTier;
		var DTPM_NextTier;
		var DPM_ThisTier;
		var DPM_NextTier;
		var H_ThisTier;
		var H_NextTier;
		
		var CS_zeroToTenPerMatch_ADC_ThisTier;
		var CS_ADC_ThisTier;
		var D_ADC_ThisTier;
		var DT_ADC_ThisTier;
		var H_ADC_ThisTier;
		var CS_zeroToTenPerMatch_MID_ThisTier;
		var CS_MID_ThisTier;
		var D_MID_ThisTier;
		var DT_MID_ThisTier;
		var H_MID_ThisTier;
		var CS_zeroToTenPerMatch_TOP_ThisTier;
		var CS_TOP_ThisTier;
		var D_TOP_ThisTier;
		var DT_TOP_ThisTier;
		var H_TOP_ThisTier;
		var CS_zeroToTenPerMatch_JG_ThisTier;
		var CS_JG_ThisTier;
		var D_JG_ThisTier;
		var DT_JG_ThisTier;
		var H_JG_ThisTier;
		var CS_zeroToTenPerMatch_SUP_ThisTier;
		var CS_SUP_ThisTier;
		var D_SUP_ThisTier;
		var DT_SUP_ThisTier;
		var H_SUP_ThisTier;
		
		var CS_zeroToTenPerMatch_ADC_NextTier;
		var CS_ADC_NextTier;
		var D_ADC_NextTier;
		var DT_ADC_NextTier;
		var H_ADC_NextTier;
		var CS_zeroToTenPerMatch_MID_NextTier;
		var CS_MID_NextTier;
		var D_MID_NextTier;
		var DT_MID_NextTier;
		var H_MID_NextTier;
		var CS_zeroToTenPerMatch_TOP_NextTier;
		var CS_TOP_NextTier;
		var D_TOP_NextTier;
		var DT_TOP_NextTier;
		var H_TOP_NextTier;
		var CS_zeroToTenPerMatch_JG_NextTier;
		var CS_JG_NextTier;
		var D_JG_NextTier;
		var DT_JG_NextTier;
		var H_JG_NextTier;
		var CS_zeroToTenPerMatch_SUP_NextTier;
		var CS_SUP_NextTier;
		var D_SUP_NextTier;
		var DT_SUP_NextTier;
		var H_SUP_NextTier;
		
		
		
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
			BE_ThisTier = leagueDataArray[summoner_tier].BE;
			BE_NextTier = leagueDataArray[nextTier].BE;
			VisionControl_ThisTier = leagueDataArray[summoner_tier].VISION_AVG;
			VisionControl_NextTier = leagueDataArray[nextTier].VISION_AVG;
			TargetControl_ThisTier = leagueDataArray[summoner_tier].TARGETCONTROL_AVG;
			TargetControl_NextTier = leagueDataArray[nextTier].TARGETCONTROL_AVG;
			KillContribution_ThisTier = leagueDataArray[summoner_tier].KILLCONTRIBUTION_AVG;
			KillContribution_NextTier = leagueDataArray[nextTier].KILLCONTRIBUTION_AVG;
			Kills_ThisTier = leagueDataArray[summoner_tier].KILLS;
			Kills_NextTier = leagueDataArray[nextTier].KILLS;
			Deaths_ThisTier = leagueDataArray[summoner_tier].DEATHS;
			Deaths_NextTier = leagueDataArray[nextTier].DEATHS;
			Assists_ThisTier = leagueDataArray[summoner_tier].ASSISTS;
			Assists_NextTier = leagueDataArray[nextTier].ASSISTS;
			VisionWards_ThisTier = leagueDataArray[summoner_tier].VISIONWARDS;
			VisionWards_NextTier = leagueDataArray[nextTier].VISIONWARDS;
			WardsPlaced_ThisTier = leagueDataArray[summoner_tier].WARDSPLACED;
			WardsPlaced_NextTier = leagueDataArray[nextTier].WARDSPLACED;
			WardsKilled_ThisTier = leagueDataArray[summoner_tier].WARDSKILLED;
			WardsKilled_NextTier = leagueDataArray[nextTier].WARDSKILLED;
			Dragons_ThisTier = leagueDataArray[summoner_tier].DRAGONS;
			Dragons_NextTier = leagueDataArray[nextTier].DRAGONS;
			Barons_ThisTier = leagueDataArray[summoner_tier].BARONS;
			Barons_NextTier = leagueDataArray[nextTier].BARONS;
			Towers_ThisTier = leagueDataArray[summoner_tier].TOWERS;
			Towers_NextTier = leagueDataArray[nextTier].TOWERS;
			Inhibitors_ThisTier = leagueDataArray[summoner_tier].INHIBITORS;
			Inhibitors_NextTier = leagueDataArray[nextTier].INHIBITORS;
			RiftHerald_ThisTier = leagueDataArray[summoner_tier].RIFTHERALD;
			RiftHerald_NextTier = leagueDataArray[nextTier].RIFTHERALD;
			GPM_ThisTier = (leagueDataArray[summoner_tier].GPM).toFixed(2);
			GPM_NextTier = (leagueDataArray[nextTier].GPM).toFixed(2);
			DTPM_ThisTier = (leagueDataArray[summoner_tier].DTPM_GENERAL*avgDuration/60).toFixed(2);
			DTPM_NextTier = (leagueDataArray[nextTier].DTPM_GENERAL*avgDuration/60).toFixed(2);
			DPM_ThisTier = (leagueDataArray[summoner_tier].DPM_GENERAL*avgDuration/60).toFixed(2);
			DPM_NextTier = (leagueDataArray[nextTier].DPM_GENERAL*avgDuration/60).toFixed(2);
			H_ThisTier = (leagueDataArray[summoner_tier].H_GENERAL*avgDuration/60).toFixed(2);
			H_NextTier = (leagueDataArray[nextTier].H_GENERAL*avgDuration/60).toFixed(2);
			
			CS_zeroToTenPerMatch_ADC_ThisTier = (leagueDataArray[summoner_tier].CS_zeroToTenPerMatch_ADC).toFixed(2);
			CS_ADC_ThisTier = (leagueDataArray[summoner_tier].CS_ADC).toFixed(2);
			D_ADC_ThisTier = (leagueDataArray[summoner_tier].D_ADC).toFixed(2);
			DT_ADC_ThisTier = (leagueDataArray[summoner_tier].DT_ADC).toFixed(2);
			H_ADC_ThisTier = (leagueDataArray[summoner_tier].H_ADC).toFixed(2);
			CS_zeroToTenPerMatch_MID_ThisTier = (leagueDataArray[summoner_tier].CS_zeroToTenPerMatch_MID).toFixed(2);
			CS_MID_ThisTier = (leagueDataArray[summoner_tier].CS_MID).toFixed(2);
			D_MID_ThisTier = (leagueDataArray[summoner_tier].D_MID).toFixed(2);
			DT_MID_ThisTier = (leagueDataArray[summoner_tier].DT_MID).toFixed(2);
			H_MID_ThisTier = (leagueDataArray[summoner_tier].H_MID).toFixed(2);
			CS_zeroToTenPerMatch_TOP_ThisTier = (leagueDataArray[summoner_tier].CS_zeroToTenPerMatch_TOP).toFixed(2);
			CS_TOP_ThisTier = (leagueDataArray[summoner_tier].CS_TOP).toFixed(2);
			D_TOP_ThisTier = (leagueDataArray[summoner_tier].D_TOP).toFixed(2);
			DT_TOP_ThisTier = (leagueDataArray[summoner_tier].DT_TOP).toFixed(2);
			H_TOP_ThisTier = (leagueDataArray[summoner_tier].H_TOP).toFixed(2);
			CS_zeroToTenPerMatch_JG_ThisTier = (leagueDataArray[summoner_tier].CS_zeroToTenPerMatch_JG).toFixed(2);
			CS_JG_ThisTier = (leagueDataArray[summoner_tier].CS_JG).toFixed(2);
			D_JG_ThisTier = (leagueDataArray[summoner_tier].D_JG).toFixed(2);
			DT_JG_ThisTier = (leagueDataArray[summoner_tier].DT_JG).toFixed(2);
			H_JG_ThisTier = (leagueDataArray[summoner_tier].H_JG).toFixed(2);
			CS_zeroToTenPerMatch_SUP_ThisTier = (leagueDataArray[summoner_tier].CS_zeroToTenPerMatch_SUP).toFixed(2);
			CS_SUP_ThisTier = (leagueDataArray[summoner_tier].CS_SUP).toFixed(2);
			D_SUP_ThisTier = (leagueDataArray[summoner_tier].D_SUP).toFixed(2);
			DT_SUP_ThisTier = (leagueDataArray[summoner_tier].DT_SUP).toFixed(2);
			H_SUP_ThisTier = (leagueDataArray[summoner_tier].H_SUP).toFixed(2);
			
			CS_zeroToTenPerMatch_ADC_NextTier = (leagueDataArray[nextTier].CS_zeroToTenPerMatch_ADC).toFixed(2);
			CS_ADC_NextTier = (leagueDataArray[nextTier].CS_ADC).toFixed(2);
			D_ADC_NextTier = (leagueDataArray[nextTier].D_ADC).toFixed(2);
			DT_ADC_NextTier = (leagueDataArray[nextTier].DT_ADC).toFixed(2);
			H_ADC_NextTier = (leagueDataArray[nextTier].H_ADC).toFixed(2);
			CS_zeroToTenPerMatch_MID_NextTier = (leagueDataArray[nextTier].CS_zeroToTenPerMatch_MID).toFixed(2);
			CS_MID_NextTier = (leagueDataArray[nextTier].CS_MID).toFixed(2);
			D_MID_NextTier = (leagueDataArray[nextTier].D_MID).toFixed(2);
			DT_MID_NextTier = (leagueDataArray[nextTier].DT_MID).toFixed(2);
			H_MID_NextTier = (leagueDataArray[nextTier].H_MID).toFixed(2);
			CS_zeroToTenPerMatch_TOP_NextTier = (leagueDataArray[nextTier].CS_zeroToTenPerMatch_TOP).toFixed(2);
			CS_TOP_NextTier = (leagueDataArray[nextTier].CS_TOP).toFixed(2);
			D_TOP_NextTier = (leagueDataArray[nextTier].D_TOP).toFixed(2);
			DT_TOP_NextTier = (leagueDataArray[nextTier].DT_TOP).toFixed(2);
			H_TOP_NextTier = (leagueDataArray[nextTier].H_TOP).toFixed(2);
			CS_zeroToTenPerMatch_JG_NextTier = (leagueDataArray[nextTier].CS_zeroToTenPerMatch_JG).toFixed(2);
			CS_JG_NextTier = (leagueDataArray[nextTier].CS_JG).toFixed(2);
			D_JG_NextTier = (leagueDataArray[nextTier].D_JG).toFixed(2);
			DT_JG_NextTier = (leagueDataArray[nextTier].DT_JG).toFixed(2);
			H_JG_NextTier = (leagueDataArray[nextTier].H_JG).toFixed(2);
			CS_zeroToTenPerMatch_SUP_NextTier = (leagueDataArray[nextTier].CS_zeroToTenPerMatch_SUP).toFixed(2);
			CS_SUP_NextTier = (leagueDataArray[nextTier].CS_SUP).toFixed(2);
			D_SUP_NextTier = (leagueDataArray[nextTier].D_SUP).toFixed(2);
			DT_SUP_NextTier = (leagueDataArray[nextTier].DT_SUP).toFixed(2);
			H_SUP_NextTier = (leagueDataArray[nextTier].H_SUP).toFixed(2);
			
			
			VW_ADC_NextTier = (leagueDataArray[nextTier].VW_ADC).toFixed(2);
			WK_ADC_NextTier = (leagueDataArray[nextTier].WK_ADC).toFixed(2);
			WP_ADC_NextTier = (leagueDataArray[nextTier].WP_ADC).toFixed(2);
			KC_ADC_NextTier = (leagueDataArray[nextTier].KC_ADC).toFixed(2);
			KDA_ADC_NextTier = (leagueDataArray[nextTier].KDA_ADC).toFixed(2);
			FBContribution_ADC_NextTier = (leagueDataArray[nextTier].FBContribution_ADC).toFixed(2);
			KillSprees_ADC_NextTier = (leagueDataArray[nextTier].KillSprees_ADC).toFixed(2);
			LargestKillingSpree_ADC_NextTier = (leagueDataArray[nextTier].LargestKillingSpree_ADC).toFixed(2);
			CSDiffPerMin_zeroToTen_ADC_NextTier = (leagueDataArray[nextTier].CSDiffPerMin_zeroToTen_ADC).toFixed(2);
			XPPerMin_zeroToTen_ADC_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToTen_ADC).toFixed(2);
			XPPerMin_zeroToThirty_ADC_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToThirty_ADC).toFixed(2);
			XPDiffPerMin_zeroToTen_ADC_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_zeroToTen_ADC).toFixed(2);
			XPDiffPerMin_tenToTwenty_ADC_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_tenToTwenty_ADC).toFixed(2);
			XPDiffPerMin_twentyToThirty_ADC_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_twentyToThirty_ADC).toFixed(2);
			TeamGoldPercent_ADC_NextTier = (leagueDataArray[nextTier].TeamGoldPercent_ADC).toFixed(2);
			TeamDamagePercent_ADC_NextTier = (leagueDataArray[nextTier].TeamDamagePercent_ADC).toFixed(2);
			VW_ADC_ThisTier = (leagueDataArray[ThisTier].VW_ADC).toFixed(2);
			WK_ADC_ThisTier = (leagueDataArray[ThisTier].WK_ADC).toFixed(2);
			WP_ADC_ThisTier = (leagueDataArray[ThisTier].WP_ADC).toFixed(2);
			KC_ADC_ThisTier = (leagueDataArray[ThisTier].KC_ADC).toFixed(2);
			KDA_ADC_ThisTier = (leagueDataArray[ThisTier].KDA_ADC).toFixed(2);
			FBContribution_ADC_ThisTier = (leagueDataArray[ThisTier].FBContribution_ADC).toFixed(2);
			KillSprees_ADC_ThisTier = (leagueDataArray[ThisTier].KillSprees_ADC).toFixed(2);
			LargestKillingSpree_ADC_ThisTier = (leagueDataArray[ThisTier].LargestKillingSpree_ADC).toFixed(2);
			CSDiffPerMin_zeroToTen_ADC_ThisTier = (leagueDataArray[ThisTier].CSDiffPerMin_zeroToTen_ADC).toFixed(2);
			XPPerMin_zeroToTen_ADC_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToTen_ADC).toFixed(2);
			XPPerMin_zeroToThirty_ADC_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToThirty_ADC).toFixed(2);
			XPDiffPerMin_zeroToTen_ADC_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_zeroToTen_ADC).toFixed(2);
			XPDiffPerMin_tenToTwenty_ADC_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_tenToTwenty_ADC).toFixed(2);
			XPDiffPerMin_twentyToThirty_ADC_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_twentyToThirty_ADC).toFixed(2);
			TeamGoldPercent_ADC_ThisTier = (leagueDataArray[ThisTier].TeamGoldPercent_ADC).toFixed(2);
			TeamDamagePercent_ADC_ThisTier = (leagueDataArray[ThisTier].TeamDamagePercent_ADC).toFixed(2);
			
			VW_TOP_NextTier = (leagueDataArray[nextTier].VW_TOP).toFixed(2);
			WK_TOP_NextTier = (leagueDataArray[nextTier].WK_TOP).toFixed(2);
			WP_TOP_NextTier = (leagueDataArray[nextTier].WP_TOP).toFixed(2);
			KC_TOP_NextTier = (leagueDataArray[nextTier].KC_TOP).toFixed(2);
			KDA_TOP_NextTier = (leagueDataArray[nextTier].KDA_TOP).toFixed(2);
			FBContribution_TOP_NextTier = (leagueDataArray[nextTier].FBContribution_TOP).toFixed(2);
			KillSprees_TOP_NextTier = (leagueDataArray[nextTier].KillSprees_TOP).toFixed(2);
			LargestKillingSpree_TOP_NextTier = (leagueDataArray[nextTier].LargestKillingSpree_TOP).toFixed(2);
			CSDiffPerMin_zeroToTen_TOP_NextTier = (leagueDataArray[nextTier].CSDiffPerMin_zeroToTen_TOP).toFixed(2);
			XPPerMin_zeroToTen_TOP_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToTen_TOP).toFixed(2);
			XPPerMin_zeroToThirty_TOP_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToThirty_TOP).toFixed(2);
			XPDiffPerMin_zeroToTen_TOP_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_zeroToTen_TOP).toFixed(2);
			XPDiffPerMin_tenToTwenty_TOP_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_tenToTwenty_TOP).toFixed(2);
			XPDiffPerMin_twentyToThirty_TOP_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_twentyToThirty_TOP).toFixed(2);
			TeamGoldPercent_TOP_NextTier = (leagueDataArray[nextTier].TeamGoldPercent_TOP).toFixed(2);
			TeamDamagePercent_TOP_NextTier = (leagueDataArray[nextTier].TeamDamagePercent_TOP).toFixed(2);
			VW_TOP_ThisTier = (leagueDataArray[ThisTier].VW_TOP).toFixed(2);
			WK_TOP_ThisTier = (leagueDataArray[ThisTier].WK_TOP).toFixed(2);
			WP_TOP_ThisTier = (leagueDataArray[ThisTier].WP_TOP).toFixed(2);
			KC_TOP_ThisTier = (leagueDataArray[ThisTier].KC_TOP).toFixed(2);
			KDA_TOP_ThisTier = (leagueDataArray[ThisTier].KDA_TOP).toFixed(2);
			FBContribution_TOP_ThisTier = (leagueDataArray[ThisTier].FBContribution_TOP).toFixed(2);
			KillSprees_TOP_ThisTier = (leagueDataArray[ThisTier].KillSprees_TOP).toFixed(2);
			LargestKillingSpree_TOP_ThisTier = (leagueDataArray[ThisTier].LargestKillingSpree_TOP).toFixed(2);
			CSDiffPerMin_zeroToTen_TOP_ThisTier = (leagueDataArray[ThisTier].CSDiffPerMin_zeroToTen_TOP).toFixed(2);
			XPPerMin_zeroToTen_TOP_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToTen_TOP).toFixed(2);
			XPPerMin_zeroToThirty_TOP_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToThirty_TOP).toFixed(2);
			XPDiffPerMin_zeroToTen_TOP_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_zeroToTen_TOP).toFixed(2);
			XPDiffPerMin_tenToTwenty_TOP_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_tenToTwenty_TOP).toFixed(2);
			XPDiffPerMin_twentyToThirty_TOP_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_twentyToThirty_TOP).toFixed(2);
			TeamGoldPercent_TOP_ThisTier = (leagueDataArray[ThisTier].TeamGoldPercent_TOP).toFixed(2);
			TeamDamagePercent_TOP_ThisTier = (leagueDataArray[ThisTier].TeamDamagePercent_TOP).toFixed(2);
			
			VW_MID_NextTier = (leagueDataArray[nextTier].VW_MID).toFixed(2);
			WK_MID_NextTier = (leagueDataArray[nextTier].WK_MID).toFixed(2);
			WP_MID_NextTier = (leagueDataArray[nextTier].WP_MID).toFixed(2);
			KC_MID_NextTier = (leagueDataArray[nextTier].KC_MID).toFixed(2);
			KDA_MID_NextTier = (leagueDataArray[nextTier].KDA_MID).toFixed(2);
			FBContribution_MID_NextTier = (leagueDataArray[nextTier].FBContribution_MID).toFixed(2);
			KillSprees_MID_NextTier = (leagueDataArray[nextTier].KillSprees_MID).toFixed(2);
			LargestKillingSpree_MID_NextTier = (leagueDataArray[nextTier].LargestKillingSpree_MID).toFixed(2);
			CSDiffPerMin_zeroToTen_MID_NextTier = (leagueDataArray[nextTier].CSDiffPerMin_zeroToTen_MID).toFixed(2);
			XPPerMin_zeroToTen_MID_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToTen_MID).toFixed(2);
			XPPerMin_zeroToThirty_MID_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToThirty_MID).toFixed(2);
			XPDiffPerMin_zeroToTen_MID_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_zeroToTen_MID).toFixed(2);
			XPDiffPerMin_tenToTwenty_MID_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_tenToTwenty_MID).toFixed(2);
			XPDiffPerMin_twentyToThirty_MID_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_twentyToThirty_MID).toFixed(2);
			TeamGoldPercent_MID_NextTier = (leagueDataArray[nextTier].TeamGoldPercent_MID).toFixed(2);
			TeamDamagePercent_MID_NextTier = (leagueDataArray[nextTier].TeamDamagePercent_MID).toFixed(2);
			VW_MID_ThisTier = (leagueDataArray[ThisTier].VW_MID).toFixed(2);
			WK_MID_ThisTier = (leagueDataArray[ThisTier].WK_MID).toFixed(2);
			WP_MID_ThisTier = (leagueDataArray[ThisTier].WP_MID).toFixed(2);
			KC_MID_ThisTier = (leagueDataArray[ThisTier].KC_MID).toFixed(2);
			KDA_MID_ThisTier = (leagueDataArray[ThisTier].KDA_MID).toFixed(2);
			FBContribution_MID_ThisTier = (leagueDataArray[ThisTier].FBContribution_MID).toFixed(2);
			KillSprees_MID_ThisTier = (leagueDataArray[ThisTier].KillSprees_MID).toFixed(2);
			LargestKillingSpree_MID_ThisTier = (leagueDataArray[ThisTier].LargestKillingSpree_MID).toFixed(2);
			CSDiffPerMin_zeroToTen_MID_ThisTier = (leagueDataArray[ThisTier].CSDiffPerMin_zeroToTen_MID).toFixed(2);
			XPPerMin_zeroToTen_MID_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToTen_MID).toFixed(2);
			XPPerMin_zeroToThirty_MID_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToThirty_MID).toFixed(2);
			XPDiffPerMin_zeroToTen_MID_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_zeroToTen_MID).toFixed(2);
			XPDiffPerMin_tenToTwenty_MID_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_tenToTwenty_MID).toFixed(2);
			XPDiffPerMin_twentyToThirty_MID_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_twentyToThirty_MID).toFixed(2);
			TeamGoldPercent_MID_ThisTier = (leagueDataArray[ThisTier].TeamGoldPercent_MID).toFixed(2);
			TeamDamagePercent_MID_ThisTier = (leagueDataArray[ThisTier].TeamDamagePercent_MID).toFixed(2);
			
			VW_JG_NextTier = (leagueDataArray[nextTier].VW_JG).toFixed(2);
			WK_JG_NextTier = (leagueDataArray[nextTier].WK_JG).toFixed(2);
			WP_JG_NextTier = (leagueDataArray[nextTier].WP_JG).toFixed(2);
			KC_JG_NextTier = (leagueDataArray[nextTier].KC_JG).toFixed(2);
			KDA_JG_NextTier = (leagueDataArray[nextTier].KDA_JG).toFixed(2);
			FBContribution_JG_NextTier = (leagueDataArray[nextTier].FBContribution_JG).toFixed(2);
			KillSprees_JG_NextTier = (leagueDataArray[nextTier].KillSprees_JG).toFixed(2);
			LargestKillingSpree_JG_NextTier = (leagueDataArray[nextTier].LargestKillingSpree_JG).toFixed(2);
			CSDiffPerMin_zeroToTen_JG_NextTier = (leagueDataArray[nextTier].CSDiffPerMin_zeroToTen_JG).toFixed(2);
			XPPerMin_zeroToTen_JG_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToTen_JG).toFixed(2);
			XPPerMin_zeroToThirty_JG_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToThirty_JG).toFixed(2);
			XPDiffPerMin_zeroToTen_JG_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_zeroToTen_JG).toFixed(2);
			XPDiffPerMin_tenToTwenty_JG_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_tenToTwenty_JG).toFixed(2);
			XPDiffPerMin_twentyToThirty_JG_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_twentyToThirty_JG).toFixed(2);
			TeamGoldPercent_JG_NextTier = (leagueDataArray[nextTier].TeamGoldPercent_JG).toFixed(2);
			TeamDamagePercent_JG_NextTier = (leagueDataArray[nextTier].TeamDamagePercent_JG).toFixed(2);
			VW_JG_ThisTier = (leagueDataArray[ThisTier].VW_JG).toFixed(2);
			WK_JG_ThisTier = (leagueDataArray[ThisTier].WK_JG).toFixed(2);
			WP_JG_ThisTier = (leagueDataArray[ThisTier].WP_JG).toFixed(2);
			KC_JG_ThisTier = (leagueDataArray[ThisTier].KC_JG).toFixed(2);
			KDA_JG_ThisTier = (leagueDataArray[ThisTier].KDA_JG).toFixed(2);
			FBContribution_JG_ThisTier = (leagueDataArray[ThisTier].FBContribution_JG).toFixed(2);
			KillSprees_JG_ThisTier = (leagueDataArray[ThisTier].KillSprees_JG).toFixed(2);
			LargestKillingSpree_JG_ThisTier = (leagueDataArray[ThisTier].LargestKillingSpree_JG).toFixed(2);
			CSDiffPerMin_zeroToTen_JG_ThisTier = (leagueDataArray[ThisTier].CSDiffPerMin_zeroToTen_JG).toFixed(2);
			XPPerMin_zeroToTen_JG_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToTen_JG).toFixed(2);
			XPPerMin_zeroToThirty_JG_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToThirty_JG).toFixed(2);
			XPDiffPerMin_zeroToTen_JG_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_zeroToTen_JG).toFixed(2);
			XPDiffPerMin_tenToTwenty_JG_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_tenToTwenty_JG).toFixed(2);
			XPDiffPerMin_twentyToThirty_JG_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_twentyToThirty_JG).toFixed(2);
			TeamGoldPercent_JG_ThisTier = (leagueDataArray[ThisTier].TeamGoldPercent_JG).toFixed(2);
			TeamDamagePercent_JG_ThisTier = (leagueDataArray[ThisTier].TeamDamagePercent_JG).toFixed(2);
			
			VW_SUP_NextTier = (leagueDataArray[nextTier].VW_SUP).toFixed(2);
			WK_SUP_NextTier = (leagueDataArray[nextTier].WK_SUP).toFixed(2);
			WP_SUP_NextTier = (leagueDataArray[nextTier].WP_SUP).toFixed(2);
			KC_SUP_NextTier = (leagueDataArray[nextTier].KC_SUP).toFixed(2);
			KDA_SUP_NextTier = (leagueDataArray[nextTier].KDA_SUP).toFixed(2);
			FBContribution_SUP_NextTier = (leagueDataArray[nextTier].FBContribution_SUP).toFixed(2);
			KillSprees_SUP_NextTier = (leagueDataArray[nextTier].KillSprees_SUP).toFixed(2);
			LargestKillingSpree_SUP_NextTier = (leagueDataArray[nextTier].LargestKillingSpree_SUP).toFixed(2);
			CSDiffPerMin_zeroToTen_SUP_NextTier = (leagueDataArray[nextTier].CSDiffPerMin_zeroToTen_SUP).toFixed(2);
			XPPerMin_zeroToTen_SUP_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToTen_SUP).toFixed(2);
			XPPerMin_zeroToThirty_SUP_NextTier = (leagueDataArray[nextTier].XPPerMin_zeroToThirty_SUP).toFixed(2);
			XPDiffPerMin_zeroToTen_SUP_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_zeroToTen_SUP).toFixed(2);
			XPDiffPerMin_tenToTwenty_SUP_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_tenToTwenty_SUP).toFixed(2);
			XPDiffPerMin_twentyToThirty_SUP_NextTier = (leagueDataArray[nextTier].XPDiffPerMin_twentyToThirty_SUP).toFixed(2);
			TeamGoldPercent_SUP_NextTier = (leagueDataArray[nextTier].TeamGoldPercent_SUP).toFixed(2);
			TeamDamagePercent_SUP_NextTier = (leagueDataArray[nextTier].TeamDamagePercent_SUP).toFixed(2);
			VW_SUP_ThisTier = (leagueDataArray[ThisTier].VW_SUP).toFixed(2);
			WK_SUP_ThisTier = (leagueDataArray[ThisTier].WK_SUP).toFixed(2);
			WP_SUP_ThisTier = (leagueDataArray[ThisTier].WP_SUP).toFixed(2);
			KC_SUP_ThisTier = (leagueDataArray[ThisTier].KC_SUP).toFixed(2);
			KDA_SUP_ThisTier = (leagueDataArray[ThisTier].KDA_SUP).toFixed(2);
			FBContribution_SUP_ThisTier = (leagueDataArray[ThisTier].FBContribution_SUP).toFixed(2);
			KillSprees_SUP_ThisTier = (leagueDataArray[ThisTier].KillSprees_SUP).toFixed(2);
			LargestKillingSpree_SUP_ThisTier = (leagueDataArray[ThisTier].LargestKillingSpree_SUP).toFixed(2);
			CSDiffPerMin_zeroToTen_SUP_ThisTier = (leagueDataArray[ThisTier].CSDiffPerMin_zeroToTen_SUP).toFixed(2);
			XPPerMin_zeroToTen_SUP_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToTen_SUP).toFixed(2);
			XPPerMin_zeroToThirty_SUP_ThisTier = (leagueDataArray[ThisTier].XPPerMin_zeroToThirty_SUP).toFixed(2);
			XPDiffPerMin_zeroToTen_SUP_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_zeroToTen_SUP).toFixed(2);
			XPDiffPerMin_tenToTwenty_SUP_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_tenToTwenty_SUP).toFixed(2);
			XPDiffPerMin_twentyToThirty_SUP_ThisTier = (leagueDataArray[ThisTier].XPDiffPerMin_twentyToThirty_SUP).toFixed(2);
			TeamGoldPercent_SUP_ThisTier = (leagueDataArray[ThisTier].TeamGoldPercent_SUP).toFixed(2);
			TeamDamagePercent_SUP_ThisTier = (leagueDataArray[ThisTier].TeamDamagePercent_SUP).toFixed(2);
		}
		
		
		var KDA_scaled = KDA/KDA_crit*100 > 100 ? 100 : (KDA/KDA_crit*100).toFixed(2);
		var VisionControl_scaled = wardingValue/Vision_crit*100 > 100 ? 100 : (wardingValue/Vision_crit*100).toFixed(2);
		
		var BE_scaled = BE/BE_crit*100 > 100 ? 100 : (BE/BE_crit*100).toFixed(2);
		
		var KillContribution_scaled = ((KillContribution-KillContri_avg)/(75-18)*100 + KillContri_avg) > 100 ? 100 : ((KillContribution-KillContri_avg)/(75-18)*100 + KillContri_avg);
		
		var TargetControl_scaled = targetControl/TargetControl_crit*100 > 100 ? 100 : (targetControl/TargetControl_crit*100).toFixed(2);
		
		var KDA_avg_scaled = KDA_avg/KDA_crit*100 > 100 ? 100 : (KDA_avg/KDA_crit*100).toFixed(2);
		var VisionControl_avg_scaled = Vision_avg/Vision_crit*100 > 100 ? 100 : (Vision_avg/Vision_crit*100).toFixed(2);
		
		var BE_avg_scaled = BE_avg/BE_crit*100 > 100 ? 100 : (BE_avg/BE_crit*100).toFixed(2);
		
		//var KillContribution_avg_scaled = (KillContri_avg-18)/(75-18)*100/KillContri_crit*100 > 100 ? 100 : (KillContri_avg-18)/(75-18)*100/KillContri_crit*100;
		
		var KillContribution_avg_scaled = KillContri_avg;
		
		var TargetControl_avg_scaled = TargetControl_avg/TargetControl_crit*100 > 100 ? 100 : (TargetControl_avg/TargetControl_crit*100).toFixed(2);
		
		var GPM_scaled = GPM/GPM_crit*100 > 100 ? 100 : (GPM/GPM_crit*100).toFixed(2);
		var GPM_avg_scaled = GPM_avg/GPM_crit*100 > 100 ? 100 : (GPM_avg/GPM_crit*100).toFixed(2);
		
		//100(true value-mean)/(max-min)+mean
		
		//Assessment
		var KDA_Assessment = 'BRONZE';
		var VisionControl_Assessment = 'BRONZE';
		var TargetControl_Assessment = 'BRONZE';
		var KillContribution_Assessment = 'BRONZE';
		var BE_Assessment = 'BRONZE';
		
		for(var i = 0; i < 7; i ++){
			var curTier;
			switch(i){
				case 0:
					curTier = 'BRONZE';
					break;
				case 1:
					curTier = 'SILVER';
					break;
				case 2:
					curTier = 'GOLD';
					break;
				case 3:
					curTier = 'PLATINUM';
					break;
				case 4:
					curTier = 'DIAMOND';
					break;
				case 5:
					curTier = 'MASTER';
					break;
				case 6:
					curTier = 'CHALLENGER';
					break;
			}
			
			if(leagueDataArray[curTier].KDA_AVG < KDA){
				KDA_Assessment = curTier;
			}
			
			if(leagueDataArray[curTier].VISION_AVG < wardingValue){
				VisionControl_Assessment = curTier;
			}
			
			if(leagueDataArray[curTier].TARGETCONTROL_AVG < targetControl){
				TargetControl_Assessment = curTier;
			}
			
			if(leagueDataArray[curTier].KILLCONTRIBUTION_AVG < KillContribution){
				KillContribution_Assessment = curTier;
			}
			
			if(leagueDataArray[curTier].BE < BE){
				BE_Assessment = curTier;
			}
		}
		
		var dataAnalysis = '[{';
		dataAnalysis += format('\"name\": \"{name}\",',{name:summoner_name_original});
		dataAnalysis += format('\"KDA_graph\": \"{KDA}\",',{KDA:KDA_scaled});
		dataAnalysis += format('\"VisionControl_graph\": \"{VisionControl}\",',{VisionControl:VisionControl_scaled});
		dataAnalysis += format('\"BE_graph\": \"{BE}\",',{BE:BE_scaled});
		dataAnalysis += format('\"KillContribution_graph\": \"{KillContribution}\",',{KillContribution:KillContribution_scaled});
		dataAnalysis += format('\"TargetControl_graph\": \"{TargetControl}\",',{TargetControl:TargetControl_scaled});
		dataAnalysis += format('\"KDA_avg_graph\": \"{KDA_avg}\",',{KDA_avg:KDA_avg_scaled});
		dataAnalysis += format('\"VisionControl_avg_graph\": \"{VisionControl_avg}\",',{VisionControl_avg:VisionControl_avg_scaled});
		dataAnalysis += format('\"BE_avg_graph\": \"{BE_avg_scaled}\",',{BE_avg_scaled:BE_avg_scaled});
		dataAnalysis += format('\"KillContribution_avg_graph\": \"{KillContribution_avg}\",',{KillContribution_avg:KillContribution_avg_scaled});
		dataAnalysis += format('\"TargetControl_avg_graph\": \"{TargetControl_avg}\",',{TargetControl_avg:TargetControl_avg_scaled});
		dataAnalysis += format('\"Tier\": \"{tier}\",',{tier:summoner_tier});
		dataAnalysis += format('\"NextTier\": \"{tier}\",',{tier:nextTier});
		dataAnalysis += format('\"Division\": \"{division}\",',{division:summoner_division});
		dataAnalysis += format('\"KDA_Raw\": \"{KDA}\",',{KDA:KDA});
		dataAnalysis += format('\"KDA_ThisTier\": \"{KDA}\",',{KDA:KDA_ThisTier});
		dataAnalysis += format('\"KDA_NextTier\": \"{KDA}\",',{KDA:KDA_NextTier});
		dataAnalysis += format('\"WINRate_Raw\": \"{WINRate}\",',{WINRate:winRate});
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
		dataAnalysis += format('\"RiftHeraldsKilled\": \"{riftHeraldSlained}\",',{riftHeraldSlained:riftHeraldSlained});
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
		dataAnalysis += format('\"RiftHerald_NextTier\": \"{RiftHerald_NextTier}\",',{RiftHerald_NextTier:RiftHerald_NextTier});
		dataAnalysis += format('\"gamesAnalyzed\": \"{number}\",',{number:matchJson.matches.length});
		dataAnalysis += format('\"ProfileIcon\": \"{summoner_IconId}\",',{summoner_IconId:summoner_IconId});
		dataAnalysis += format('\"KillContribution_Assessment\": \"{KillContribution_Assessment}\",',{KillContribution_Assessment:KillContribution_Assessment});
		dataAnalysis += format('\"TargetControl_Assessment\": \"{TargetControl_Assessment}\",',{TargetControl_Assessment:TargetControl_Assessment});
		dataAnalysis += format('\"VisionControl_Assessment\": \"{VisionControl_Assessment}\",',{VisionControl_Assessment:VisionControl_Assessment});
		dataAnalysis += format('\"KDA_Assessment\": \"{KDA_Assessment}\",',{KDA_Assessment:KDA_Assessment});
		dataAnalysis += format('\"damageTakenPerMatch\": \"{damageTakenPerMatch}\",',{damageTakenPerMatch:damageTakenPerMatch});
		dataAnalysis += format('\"healPerMatch\": \"{healPerMatch}\",',{healPerMatch:healPerMatch});
		dataAnalysis += format('\"damageDealtToChampionsPerMatch\": \"{damageDealtToChampionsPerMatch}\",',{damageDealtToChampionsPerMatch:damageDealtToChampionsPerMatch});
		dataAnalysis += format('\"GPM\": \"{GPM}\",',{GPM:GPM});
		dataAnalysis += format('\"GPM_ADC\": \"{GPM_ADC}\",',{GPM_ADC:GPM_ADC});
		dataAnalysis += format('\"CS_zeroToTenPerMatch_ADC\": \"{CS_zeroToTenPerMatch_ADC}\",',{CS_zeroToTenPerMatch_ADC:CS_zeroToTenPerMatch_ADC});
		dataAnalysis += format('\"CSPM_ADC\": \"{CSPM_ADC}\",',{CSPM_ADC:CSPM_ADC});
		dataAnalysis += format('\"DPM_ADC\": \"{DPM_ADC}\",',{DPM_ADC:DPM_ADC});
		dataAnalysis += format('\"DTPM_ADC\": \"{DTPM_ADC}\",',{DTPM_ADC:DTPM_ADC});
		dataAnalysis += format('\"WinRate_ADC\": \"{WinRate_ADC}\",',{WinRate_ADC:WinRate_ADC});
		dataAnalysis += format('\"H_ADC\": \"{H_ADC}\",',{H_ADC:H_ADC});
		dataAnalysis += format('\"GPM_MID\": \"{GPM_MID}\",',{GPM_MID:GPM_MID});
		dataAnalysis += format('\"CS_zeroToTenPerMatch_MID\": \"{CS_zeroToTenPerMatch_MID}\",',{CS_zeroToTenPerMatch_MID:CS_zeroToTenPerMatch_MID});
		dataAnalysis += format('\"CSPM_MID\": \"{CSPM_MID}\",',{CSPM_MID:CSPM_MID});
		dataAnalysis += format('\"DPM_MID\": \"{DPM_MID}\",',{DPM_MID:DPM_MID});
		dataAnalysis += format('\"DTPM_MID\": \"{DTPM_MID}\",',{DTPM_MID:DTPM_MID});
		dataAnalysis += format('\"WinRate_MID\": \"{WinRate_MID}\",',{WinRate_MID:WinRate_MID});
		dataAnalysis += format('\"H_MID\": \"{H_MID}\",',{H_MID:H_MID});
		dataAnalysis += format('\"GPM_TOP\": \"{GPM_TOP}\",',{GPM_TOP:GPM_TOP});
		dataAnalysis += format('\"CS_zeroToTenPerMatch_TOP\": \"{CS_zeroToTenPerMatch_TOP}\",',{CS_zeroToTenPerMatch_TOP:CS_zeroToTenPerMatch_TOP});
		dataAnalysis += format('\"CSPM_TOP\": \"{CSPM_TOP}\",',{CSPM_TOP:CSPM_TOP});
		dataAnalysis += format('\"DPM_TOP\": \"{DPM_TOP}\",',{DPM_TOP:DPM_TOP});
		dataAnalysis += format('\"DTPM_TOP\": \"{DTPM_TOP}\",',{DTPM_TOP:DTPM_TOP});
		dataAnalysis += format('\"WinRate_TOP\": \"{WinRate_TOP}\",',{WinRate_TOP:WinRate_TOP});
		dataAnalysis += format('\"H_TOP\": \"{H_TOP}\",',{H_TOP:H_TOP});
		dataAnalysis += format('\"GPM_SUP\": \"{GPM_SUP}\",',{GPM_SUP:GPM_SUP});
		dataAnalysis += format('\"CS_zeroToTenPerMatch_SUP\": \"{CS_zeroToTenPerMatch_SUP}\",',{CS_zeroToTenPerMatch_SUP:CS_zeroToTenPerMatch_SUP});
		dataAnalysis += format('\"CSPM_SUP\": \"{CSPM_SUP}\",',{CSPM_SUP:CSPM_SUP});
		dataAnalysis += format('\"DPM_SUP\": \"{DPM_SUP}\",',{DPM_SUP:DPM_SUP});
		dataAnalysis += format('\"DTPM_SUP\": \"{DTPM_SUP}\",',{DTPM_SUP:DTPM_SUP});
		dataAnalysis += format('\"WinRate_SUP\": \"{WinRate_SUP}\",',{WinRate_SUP:WinRate_SUP});
		dataAnalysis += format('\"H_SUP\": \"{H_SUP}\",',{H_SUP:H_SUP});
		dataAnalysis += format('\"GPM_JG\": \"{GPM_JG}\",',{GPM_JG:GPM_JG});
		dataAnalysis += format('\"CS_zeroToTenPerMatch_JG\": \"{CS_zeroToTenPerMatch_JG}\",',{CS_zeroToTenPerMatch_JG:CS_zeroToTenPerMatch_JG});
		dataAnalysis += format('\"CSPM_JG\": \"{CSPM_JG}\",',{CSPM_JG:CSPM_JG});
		dataAnalysis += format('\"DPM_JG\": \"{DPM_JG}\",',{DPM_JG:DPM_JG});
		dataAnalysis += format('\"DTPM_JG\": \"{DTPM_JG}\",',{DTPM_JG:DTPM_JG});
		dataAnalysis += format('\"WinRate_JG\": \"{WinRate_JG}\",',{WinRate_JG:WinRate_JG});
		dataAnalysis += format('\"H_JG\": \"{H_JG}\",',{H_JG:H_JG});
		dataAnalysis += format('\"BE_RAW\": \"{BE}\",',{BE:BE});
		dataAnalysis += format('\"BE_ThisTier\": \"{BE_ThisTier}\",',{BE_ThisTier:BE_ThisTier});
		dataAnalysis += format('\"BE_NextTier\": \"{BE_NextTier}\",',{BE_NextTier:BE_NextTier});
		dataAnalysis += format('\"GPM_ThisTier\": \"{GPM_ThisTier}\",',{GPM_ThisTier:GPM_ThisTier});
		dataAnalysis += format('\"GPM_NextTier\": \"{GPM_NextTier}\",',{GPM_NextTier:GPM_NextTier});
		dataAnalysis += format('\"DTPM_ThisTier\": \"{DTPM_ThisTier}\",',{DTPM_ThisTier:DTPM_ThisTier});
		dataAnalysis += format('\"DTPM_NextTier\": \"{DTPM_NextTier}\",',{DTPM_NextTier:DTPM_NextTier});
		dataAnalysis += format('\"DPM_ThisTier\": \"{DPM_ThisTier}\",',{DPM_ThisTier:DPM_ThisTier});
		dataAnalysis += format('\"DPM_NextTier\": \"{DPM_NextTier}\",',{DPM_NextTier:DPM_NextTier});
		dataAnalysis += format('\"H_ThisTier\": \"{H_ThisTier}\",',{H_ThisTier:H_ThisTier});
		dataAnalysis += format('\"H_NextTier\": \"{H_NextTier}\",',{H_NextTier:H_NextTier});
		dataAnalysis += format('\"GPM_scaled\": \"{GPM_scaled}\",',{GPM_scaled:GPM_scaled});
		dataAnalysis += format('\"GPM_avg_scaled\": \"{GPM_avg_scaled}\",',{GPM_avg_scaled:GPM_avg_scaled});
		dataAnalysis += format('\"BE_Assessment\": \"{BE_Assessment}\"',{BE_Assessment:BE_Assessment});
		dataAnalysis += '}]';
		
		var analysisJson = JSON.parse(dataAnalysis);
		
		analysisJson[0].player = {};
		analysisJson[0].ADC = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].TOP = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].MID = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].SUP = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].JG = {'ThisTier': {},'NextTier': {}};
		
		
		(function createJson(){
			analysisJson[0].ADC.ThisTier.CS_zeroToTenPerMatch_ADC = CS_zeroToTenPerMatch_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.CS_ADC = CS_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.D_ADC = D_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.DT_ADC = DT_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.H_ADC = H_ADC_ThisTier;

			analysisJson[0].ADC.ThisTier.VW_ADC = VW_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.WK_ADC = WK_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.WP_ADC = WP_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.KC_ADC = KC_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.KDA_ADC = KDA_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.FBContribution_ADC = FBContribution_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.KillSprees_ADC = KillSprees_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.LargestKillingSpree_ADC = LargestKillingSpree_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.CSDiffPerMin_zeroToTen_ADC = CSDiffPerMin_zeroToTen_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.XPPerMin_zeroToTen_ADC = XPPerMin_zeroToTen_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.XPPerMin_zeroToThirty_ADC = XPPerMin_zeroToThirty_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.XPDiffPerMin_zeroToTen_ADC = XPDiffPerMin_zeroToTen_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.XPDiffPerMin_tenToTwenty_ADC = XPDiffPerMin_tenToTwenty_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.XPDiffPerMin_twentyToThirty_ADC = XPDiffPerMin_twentyToThirty_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.TeamGoldPercent_ADC = TeamGoldPercent_ADC_ThisTier;
			analysisJson[0].ADC.ThisTier.TeamDamagePercent_ADC = TeamDamagePercent_ADC_ThisTier;
			
			analysisJson[0].MID.ThisTier.CS_zeroToTenPerMatch_MID = CS_zeroToTenPerMatch_MID_ThisTier;
			analysisJson[0].MID.ThisTier.CS_MID = CS_MID_ThisTier;
			analysisJson[0].MID.ThisTier.D_MID = D_MID_ThisTier;
			analysisJson[0].MID.ThisTier.DT_MID = DT_MID_ThisTier;
			analysisJson[0].MID.ThisTier.H_MID = H_MID_ThisTier;
			
			analysisJson[0].MID.ThisTier.VW_MID = VW_MID_ThisTier;
			analysisJson[0].MID.ThisTier.WK_MID = WK_MID_ThisTier;
			analysisJson[0].MID.ThisTier.WP_MID = WP_MID_ThisTier;
			analysisJson[0].MID.ThisTier.KC_MID = KC_MID_ThisTier;
			analysisJson[0].MID.ThisTier.KDA_MID = KDA_MID_ThisTier;
			analysisJson[0].MID.ThisTier.FBContribution_MID = FBContribution_MID_ThisTier;
			analysisJson[0].MID.ThisTier.KillSprees_MID = KillSprees_MID_ThisTier;
			analysisJson[0].MID.ThisTier.LargestKillingSpree_MID = LargestKillingSpree_MID_ThisTier;
			analysisJson[0].MID.ThisTier.CSDiffPerMin_zeroToTen_MID = CSDiffPerMin_zeroToTen_MID_ThisTier;
			analysisJson[0].MID.ThisTier.XPPerMin_zeroToTen_MID = XPPerMin_zeroToTen_MID_ThisTier;
			analysisJson[0].MID.ThisTier.XPPerMin_zeroToThirty_MID = XPPerMin_zeroToThirty_MID_ThisTier;
			analysisJson[0].MID.ThisTier.XPDiffPerMin_zeroToTen_MID = XPDiffPerMin_zeroToTen_MID_ThisTier;
			analysisJson[0].MID.ThisTier.XPDiffPerMin_tenToTwenty_MID = XPDiffPerMin_tenToTwenty_MID_ThisTier;
			analysisJson[0].MID.ThisTier.XPDiffPerMin_twentyToThirty_MID = XPDiffPerMin_twentyToThirty_MID_ThisTier;
			analysisJson[0].MID.ThisTier.TeamGoldPercent_MID = TeamGoldPercent_MID_ThisTier;
			analysisJson[0].MID.ThisTier.TeamDamagePercent_MID = TeamDamagePercent_MID_ThisTier;
			
			
			analysisJson[0].TOP.ThisTier.CS_zeroToTenPerMatch_TOP = CS_zeroToTenPerMatch_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.CS_TOP = CS_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.D_TOP = D_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.DT_TOP = DT_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.H_TOP = H_TOP_ThisTier;
			
			analysisJson[0].TOP.ThisTier.VW_TOP = VW_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.WK_TOP = WK_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.WP_TOP = WP_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.KC_TOP = KC_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.KDA_TOP = KDA_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.FBContribution_TOP = FBContribution_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.KillSprees_TOP = KillSprees_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.LargestKillingSpree_TOP = LargestKillingSpree_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.CSDiffPerMin_zeroToTen_TOP = CSDiffPerMin_zeroToTen_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.XPPerMin_zeroToTen_TOP = XPPerMin_zeroToTen_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.XPPerMin_zeroToThirty_TOP = XPPerMin_zeroToThirty_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.XPDiffPerMin_zeroToTen_TOP = XPDiffPerMin_zeroToTen_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.XPDiffPerMin_tenToTwenty_TOP = XPDiffPerMin_tenToTwenty_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.XPDiffPerMin_twentyToThirty_TOP = XPDiffPerMin_twentyToThirty_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.TeamGoldPercent_TOP = TeamGoldPercent_TOP_ThisTier;
			analysisJson[0].TOP.ThisTier.TeamDamagePercent_TOP = TeamDamagePercent_TOP_ThisTier;
			
			analysisJson[0].JG.ThisTier.CS_zeroToTenPerMatch_JG = CS_zeroToTenPerMatch_JG_ThisTier;
			analysisJson[0].JG.ThisTier.CS_JG = CS_JG_ThisTier;
			analysisJson[0].JG.ThisTier.D_JG = D_JG_ThisTier;
			analysisJson[0].JG.ThisTier.DT_JG = DT_JG_ThisTier;
			analysisJson[0].JG.ThisTier.H_JG = H_JG_ThisTier;
			
			analysisJson[0].JG.ThisTier.VW_JG = VW_JG_ThisTier;
			analysisJson[0].JG.ThisTier.WK_JG = WK_JG_ThisTier;
			analysisJson[0].JG.ThisTier.WP_JG = WP_JG_ThisTier;
			analysisJson[0].JG.ThisTier.KC_JG = KC_JG_ThisTier;
			analysisJson[0].JG.ThisTier.KDA_JG = KDA_JG_ThisTier;
			analysisJson[0].JG.ThisTier.FBContribution_JG = FBContribution_JG_ThisTier;
			analysisJson[0].JG.ThisTier.KillSprees_JG = KillSprees_JG_ThisTier;
			analysisJson[0].JG.ThisTier.LargestKillingSpree_JG = LargestKillingSpree_JG_ThisTier;
			analysisJson[0].JG.ThisTier.CSDiffPerMin_zeroToTen_JG = CSDiffPerMin_zeroToTen_JG_ThisTier;
			analysisJson[0].JG.ThisTier.XPPerMin_zeroToTen_JG = XPPerMin_zeroToTen_JG_ThisTier;
			analysisJson[0].JG.ThisTier.XPPerMin_zeroToThirty_JG = XPPerMin_zeroToThirty_JG_ThisTier;
			analysisJson[0].JG.ThisTier.XPDiffPerMin_zeroToTen_JG = XPDiffPerMin_zeroToTen_JG_ThisTier;
			analysisJson[0].JG.ThisTier.XPDiffPerMin_tenToTwenty_JG = XPDiffPerMin_tenToTwenty_JG_ThisTier;
			analysisJson[0].JG.ThisTier.XPDiffPerMin_twentyToThirty_JG = XPDiffPerMin_twentyToThirty_JG_ThisTier;
			analysisJson[0].JG.ThisTier.TeamGoldPercent_JG = TeamGoldPercent_JG_ThisTier;
			analysisJson[0].JG.ThisTier.TeamDamagePercent_JG = TeamDamagePercent_JG_ThisTier;
			
			analysisJson[0].SUP.ThisTier.CS_zeroToTenPerMatch_SUP = CS_zeroToTenPerMatch_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.CS_SUP = CS_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.D_SUP = D_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.DT_SUP = DT_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.H_SUP = H_SUP_ThisTier;
			
			analysisJson[0].SUP.ThisTier.VW_SUP = VW_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.WK_SUP = WK_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.WP_SUP = WP_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.KC_SUP = KC_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.KDA_SUP = KDA_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.FBContribution_SUP = FBContribution_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.KillSprees_SUP = KillSprees_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.LargestKillingSpree_SUP = LargestKillingSpree_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.CSDiffPerMin_zeroToTen_SUP = CSDiffPerMin_zeroToTen_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.XPPerMin_zeroToTen_SUP = XPPerMin_zeroToTen_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.XPPerMin_zeroToThirty_SUP = XPPerMin_zeroToThirty_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.XPDiffPerMin_zeroToTen_SUP = XPDiffPerMin_zeroToTen_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.XPDiffPerMin_tenToTwenty_SUP = XPDiffPerMin_tenToTwenty_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.XPDiffPerMin_twentyToThirty_SUP = XPDiffPerMin_twentyToThirty_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.TeamGoldPercent_SUP = TeamGoldPercent_SUP_ThisTier;
			analysisJson[0].SUP.ThisTier.TeamDamagePercent_SUP = TeamDamagePercent_SUP_ThisTier;
			
			
			analysisJson[0].ADC.NextTier.CS_zeroToTenPerMatch_ADC = CS_zeroToTenPerMatch_ADC_NextTier;
			analysisJson[0].ADC.NextTier.CS_ADC = CS_ADC_NextTier;
			analysisJson[0].ADC.NextTier.D_ADC = D_ADC_NextTier;
			analysisJson[0].ADC.NextTier.DT_ADC = DT_ADC_NextTier;
			analysisJson[0].ADC.NextTier.H_ADC = H_ADC_NextTier;
			
			analysisJson[0].ADC.NextTier.VW_ADC = VW_ADC_NextTier;
			analysisJson[0].ADC.NextTier.WK_ADC = WK_ADC_NextTier;
			analysisJson[0].ADC.NextTier.WP_ADC = WP_ADC_NextTier;
			analysisJson[0].ADC.NextTier.KC_ADC = KC_ADC_NextTier;
			analysisJson[0].ADC.NextTier.KDA_ADC = KDA_ADC_NextTier;
			analysisJson[0].ADC.NextTier.FBContribution_ADC = FBContribution_ADC_NextTier;
			analysisJson[0].ADC.NextTier.KillSprees_ADC = KillSprees_ADC_NextTier;
			analysisJson[0].ADC.NextTier.LargestKillingSpree_ADC = LargestKillingSpree_ADC_NextTier;
			analysisJson[0].ADC.NextTier.CSDiffPerMin_zeroToTen_ADC = CSDiffPerMin_zeroToTen_ADC_NextTier;
			analysisJson[0].ADC.NextTier.XPPerMin_zeroToTen_ADC = XPPerMin_zeroToTen_ADC_NextTier;
			analysisJson[0].ADC.NextTier.XPPerMin_zeroToThirty_ADC = XPPerMin_zeroToThirty_ADC_NextTier;
			analysisJson[0].ADC.NextTier.XPDiffPerMin_zeroToTen_ADC = XPDiffPerMin_zeroToTen_ADC_NextTier;
			analysisJson[0].ADC.NextTier.XPDiffPerMin_tenToTwenty_ADC = XPDiffPerMin_tenToTwenty_ADC_NextTier;
			analysisJson[0].ADC.NextTier.XPDiffPerMin_twentyToThirty_ADC = XPDiffPerMin_twentyToThirty_ADC_NextTier;
			analysisJson[0].ADC.NextTier.TeamGoldPercent_ADC = TeamGoldPercent_ADC_NextTier;
			analysisJson[0].ADC.NextTier.TeamDamagePercent_ADC = TeamDamagePercent_ADC_NextTier;
			
			analysisJson[0].MID.NextTier.CS_zeroToTenPerMatch_MID = CS_zeroToTenPerMatch_MID_NextTier;
			analysisJson[0].MID.NextTier.CS_MID = CS_MID_NextTier;
			analysisJson[0].MID.NextTier.D_MID = D_MID_NextTier;
			analysisJson[0].MID.NextTier.DT_MID = DT_MID_NextTier;
			analysisJson[0].MID.NextTier.H_MID = H_MID_NextTier;
			
			analysisJson[0].MID.NextTier.VW_MID = VW_MID_NextTier;
			analysisJson[0].MID.NextTier.WK_MID = WK_MID_NextTier;
			analysisJson[0].MID.NextTier.WP_MID = WP_MID_NextTier;
			analysisJson[0].MID.NextTier.KC_MID = KC_MID_NextTier;
			analysisJson[0].MID.NextTier.KDA_MID = KDA_MID_NextTier;
			analysisJson[0].MID.NextTier.FBContribution_MID = FBContribution_MID_NextTier;
			analysisJson[0].MID.NextTier.KillSprees_MID = KillSprees_MID_NextTier;
			analysisJson[0].MID.NextTier.LargestKillingSpree_MID = LargestKillingSpree_MID_NextTier;
			analysisJson[0].MID.NextTier.CSDiffPerMin_zeroToTen_MID = CSDiffPerMin_zeroToTen_MID_NextTier;
			analysisJson[0].MID.NextTier.XPPerMin_zeroToTen_MID = XPPerMin_zeroToTen_MID_NextTier;
			analysisJson[0].MID.NextTier.XPPerMin_zeroToThirty_MID = XPPerMin_zeroToThirty_MID_NextTier;
			analysisJson[0].MID.NextTier.XPDiffPerMin_zeroToTen_MID = XPDiffPerMin_zeroToTen_MID_NextTier;
			analysisJson[0].MID.NextTier.XPDiffPerMin_tenToTwenty_MID = XPDiffPerMin_tenToTwenty_MID_NextTier;
			analysisJson[0].MID.NextTier.XPDiffPerMin_twentyToThirty_MID = XPDiffPerMin_twentyToThirty_MID_NextTier;
			analysisJson[0].MID.NextTier.TeamGoldPercent_MID = TeamGoldPercent_MID_NextTier;
			analysisJson[0].MID.NextTier.TeamDamagePercent_MID = TeamDamagePercent_MID_NextTier;
			
			analysisJson[0].TOP.NextTier.CS_zeroToTenPerMatch_TOP = CS_zeroToTenPerMatch_TOP_NextTier;
			analysisJson[0].TOP.NextTier.CS_TOP = CS_TOP_NextTier;
			analysisJson[0].TOP.NextTier.D_TOP = D_TOP_NextTier;
			analysisJson[0].TOP.NextTier.DT_TOP = DT_TOP_NextTier;
			analysisJson[0].TOP.NextTier.H_TOP = H_TOP_NextTier;
			
			analysisJson[0].TOP.NextTier.VW_TOP = VW_TOP_NextTier;
			analysisJson[0].TOP.NextTier.WK_TOP = WK_TOP_NextTier;
			analysisJson[0].TOP.NextTier.WP_TOP = WP_TOP_NextTier;
			analysisJson[0].TOP.NextTier.KC_TOP = KC_TOP_NextTier;
			analysisJson[0].TOP.NextTier.KDA_TOP = KDA_TOP_NextTier;
			analysisJson[0].TOP.NextTier.FBContribution_TOP = FBContribution_TOP_NextTier;
			analysisJson[0].TOP.NextTier.KillSprees_TOP = KillSprees_TOP_NextTier;
			analysisJson[0].TOP.NextTier.LargestKillingSpree_TOP = LargestKillingSpree_TOP_NextTier;
			analysisJson[0].TOP.NextTier.CSDiffPerMin_zeroToTen_TOP = CSDiffPerMin_zeroToTen_TOP_NextTier;
			analysisJson[0].TOP.NextTier.XPPerMin_zeroToTen_TOP = XPPerMin_zeroToTen_TOP_NextTier;
			analysisJson[0].TOP.NextTier.XPPerMin_zeroToThirty_TOP = XPPerMin_zeroToThirty_TOP_NextTier;
			analysisJson[0].TOP.NextTier.XPDiffPerMin_zeroToTen_TOP = XPDiffPerMin_zeroToTen_TOP_NextTier;
			analysisJson[0].TOP.NextTier.XPDiffPerMin_tenToTwenty_TOP = XPDiffPerMin_tenToTwenty_TOP_NextTier;
			analysisJson[0].TOP.NextTier.XPDiffPerMin_twentyToThirty_TOP = XPDiffPerMin_twentyToThirty_TOP_NextTier;
			analysisJson[0].TOP.NextTier.TeamGoldPercent_TOP = TeamGoldPercent_TOP_NextTier;
			analysisJson[0].TOP.NextTier.TeamDamagePercent_TOP = TeamDamagePercent_TOP_NextTier;
			
			analysisJson[0].JG.NextTier.CS_zeroToTenPerMatch_JG = CS_zeroToTenPerMatch_JG_NextTier;
			analysisJson[0].JG.NextTier.CS_JG = CS_JG_NextTier;
			analysisJson[0].JG.NextTier.D_JG = D_JG_NextTier;
			analysisJson[0].JG.NextTier.DT_JG = DT_JG_NextTier;
			analysisJson[0].JG.NextTier.H_JG = H_JG_NextTier;
			
			analysisJson[0].JG.NextTier.VW_JG = VW_JG_NextTier;
			analysisJson[0].JG.NextTier.WK_JG = WK_JG_NextTier;
			analysisJson[0].JG.NextTier.WP_JG = WP_JG_NextTier;
			analysisJson[0].JG.NextTier.KC_JG = KC_JG_NextTier;
			analysisJson[0].JG.NextTier.KDA_JG = KDA_JG_NextTier;
			analysisJson[0].JG.NextTier.FBContribution_JG = FBContribution_JG_NextTier;
			analysisJson[0].JG.NextTier.KillSprees_JG = KillSprees_JG_NextTier;
			analysisJson[0].JG.NextTier.LargestKillingSpree_JG = LargestKillingSpree_JG_NextTier;
			analysisJson[0].JG.NextTier.CSDiffPerMin_zeroToTen_JG = CSDiffPerMin_zeroToTen_JG_NextTier;
			analysisJson[0].JG.NextTier.XPPerMin_zeroToTen_JG = XPPerMin_zeroToTen_JG_NextTier;
			analysisJson[0].JG.NextTier.XPPerMin_zeroToThirty_JG = XPPerMin_zeroToThirty_JG_NextTier;
			analysisJson[0].JG.NextTier.XPDiffPerMin_zeroToTen_JG = XPDiffPerMin_zeroToTen_JG_NextTier;
			analysisJson[0].JG.NextTier.XPDiffPerMin_tenToTwenty_JG = XPDiffPerMin_tenToTwenty_JG_NextTier;
			analysisJson[0].JG.NextTier.XPDiffPerMin_twentyToThirty_JG = XPDiffPerMin_twentyToThirty_JG_NextTier;
			analysisJson[0].JG.NextTier.TeamGoldPercent_JG = TeamGoldPercent_JG_NextTier;
			analysisJson[0].JG.NextTier.TeamDamagePercent_JG = TeamDamagePercent_JG_NextTier;
			
			analysisJson[0].SUP.NextTier.CS_zeroToTenPerMatch_SUP = CS_zeroToTenPerMatch_SUP_NextTier;
			analysisJson[0].SUP.NextTier.CS_SUP = CS_SUP_NextTier;
			analysisJson[0].SUP.NextTier.D_SUP = D_SUP_NextTier;
			analysisJson[0].SUP.NextTier.DT_SUP = DT_SUP_NextTier;
			analysisJson[0].SUP.NextTier.H_SUP = H_SUP_NextTier;
			
			analysisJson[0].SUP.NextTier.VW_SUP = VW_SUP_NextTier;
			analysisJson[0].SUP.NextTier.WK_SUP = WK_SUP_NextTier;
			analysisJson[0].SUP.NextTier.WP_SUP = WP_SUP_NextTier;
			analysisJson[0].SUP.NextTier.KC_SUP = KC_SUP_NextTier;
			analysisJson[0].SUP.NextTier.KDA_SUP = KDA_SUP_NextTier;
			analysisJson[0].SUP.NextTier.FBContribution_SUP = FBContribution_SUP_NextTier;
			analysisJson[0].SUP.NextTier.KillSprees_SUP = KillSprees_SUP_NextTier;
			analysisJson[0].SUP.NextTier.LargestKillingSpree_SUP = LargestKillingSpree_SUP_NextTier;
			analysisJson[0].SUP.NextTier.CSDiffPerMin_zeroToTen_SUP = CSDiffPerMin_zeroToTen_SUP_NextTier;
			analysisJson[0].SUP.NextTier.XPPerMin_zeroToTen_SUP = XPPerMin_zeroToTen_SUP_NextTier;
			analysisJson[0].SUP.NextTier.XPPerMin_zeroToThirty_SUP = XPPerMin_zeroToThirty_SUP_NextTier;
			analysisJson[0].SUP.NextTier.XPDiffPerMin_zeroToTen_SUP = XPDiffPerMin_zeroToTen_SUP_NextTier;
			analysisJson[0].SUP.NextTier.XPDiffPerMin_tenToTwenty_SUP = XPDiffPerMin_tenToTwenty_SUP_NextTier;
			analysisJson[0].SUP.NextTier.XPDiffPerMin_twentyToThirty_SUP = XPDiffPerMin_twentyToThirty_SUP_NextTier;
			analysisJson[0].SUP.NextTier.TeamGoldPercent_SUP = TeamGoldPercent_SUP_NextTier;
			analysisJson[0].SUP.NextTier.TeamDamagePercent_SUP = TeamDamagePercent_SUP_NextTier;
			
			analysisJson[0].player.VW_SUP = VW_SUP;
			analysisJson[0].player.WK_SUP = WK_SUP;
			analysisJson[0].player.WP_SUP = WP_SUP;
			analysisJson[0].player.KC_SUP = KC_SUP;
			analysisJson[0].player.KDA_SUP = KDA_SUP;
			analysisJson[0].player.FBContribution_SUP = FBContribution_SUP;
			analysisJson[0].player.KillSprees_SUP = KillSprees_SUP;
			analysisJson[0].player.LargestKillingSpree_SUP = LargestKillingSpree_SUP;	
			analysisJson[0].player.CSDiffPerMin_zeroToTen_SUP = CSDiffPerMin_zeroToTen_SUP;
			analysisJson[0].player.XPPerMin_zeroToTen_SUP = XPPerMin_zeroToTen_SUP;
			analysisJson[0].player.XPPerMin_zeroToThirty_SUP = XPPerMin_zeroToThirty_SUP;
			analysisJson[0].player.XPDiffPerMin_zeroToTen_SUP = XPDiffPerMin_zeroToTen_SUP;
			analysisJson[0].player.XPDiffPerMin_tenToTwenty_SUP = XPDiffPerMin_tenToTwenty_SUP;
			analysisJson[0].player.XPDiffPerMin_twentyToThirty_SUP = XPDiffPerMin_twentyToThirty_SUP;
			analysisJson[0].player.TeamGoldPercent_SUP = TeamGoldPercent_SUP;
			analysisJson[0].player.TeamDamagePercent_SUP = TeamDamagePercent_SUP;
			
			analysisJson[0].player.VW_TOP = VW_TOP;
			analysisJson[0].player.WK_TOP = WK_TOP;
			analysisJson[0].player.WP_TOP = WP_TOP;
			analysisJson[0].player.KC_TOP = KC_TOP;
			analysisJson[0].player.KDA_TOP = KDA_TOP;
			analysisJson[0].player.FBContribution_TOP = FBContribution_TOP;
			analysisJson[0].player.KillSprees_TOP = KillSprees_TOP;
			analysisJson[0].player.LargestKillingSpree_TOP = LargestKillingSpree_TOP;	
			analysisJson[0].player.CSDiffPerMin_zeroToTen_TOP = CSDiffPerMin_zeroToTen_TOP;
			analysisJson[0].player.XPPerMin_zeroToTen_TOP = XPPerMin_zeroToTen_TOP;
			analysisJson[0].player.XPPerMin_zeroToThirty_TOP = XPPerMin_zeroToThirty_TOP;
			analysisJson[0].player.XPDiffPerMin_zeroToTen_TOP = XPDiffPerMin_zeroToTen_TOP;
			analysisJson[0].player.XPDiffPerMin_tenToTwenty_TOP = XPDiffPerMin_tenToTwenty_TOP;
			analysisJson[0].player.XPDiffPerMin_twentyToThirty_TOP = XPDiffPerMin_twentyToThirty_TOP;
			analysisJson[0].player.TeamGoldPercent_TOP = TeamGoldPercent_TOP;
			analysisJson[0].player.TeamDamagePercent_TOP = TeamDamagePercent_TOP;
			
			analysisJson[0].player.VW_MID = VW_MID;
			analysisJson[0].player.WK_MID = WK_MID;
			analysisJson[0].player.WP_MID = WP_MID;
			analysisJson[0].player.KC_MID = KC_MID;
			analysisJson[0].player.KDA_MID = KDA_MID;
			analysisJson[0].player.FBContribution_MID = FBContribution_MID;
			analysisJson[0].player.KillSprees_MID = KillSprees_MID;
			analysisJson[0].player.LargestKillingSpree_MID = LargestKillingSpree_MID;	
			analysisJson[0].player.CSDiffPerMin_zeroToTen_MID = CSDiffPerMin_zeroToTen_MID;
			analysisJson[0].player.XPPerMin_zeroToTen_MID = XPPerMin_zeroToTen_MID;
			analysisJson[0].player.XPPerMin_zeroToThirty_MID = XPPerMin_zeroToThirty_MID;
			analysisJson[0].player.XPDiffPerMin_zeroToTen_MID = XPDiffPerMin_zeroToTen_MID;
			analysisJson[0].player.XPDiffPerMin_tenToTwenty_MID = XPDiffPerMin_tenToTwenty_MID;
			analysisJson[0].player.XPDiffPerMin_twentyToThirty_MID = XPDiffPerMin_twentyToThirty_MID;
			analysisJson[0].player.TeamGoldPercent_MID = TeamGoldPercent_MID;
			analysisJson[0].player.TeamDamagePercent_MID = TeamDamagePercent_MID;
			
			analysisJson[0].player.VW_ADC = VW_ADC;
			analysisJson[0].player.WK_ADC = WK_ADC;
			analysisJson[0].player.WP_ADC = WP_ADC;
			analysisJson[0].player.KC_ADC = KC_ADC;
			analysisJson[0].player.KDA_ADC = KDA_ADC;
			analysisJson[0].player.FBContribution_ADC = FBContribution_ADC;
			analysisJson[0].player.KillSprees_ADC = KillSprees_ADC;
			analysisJson[0].player.LargestKillingSpree_ADC = LargestKillingSpree_ADC;	
			analysisJson[0].player.CSDiffPerMin_zeroToTen_ADC = CSDiffPerMin_zeroToTen_ADC;
			analysisJson[0].player.XPPerMin_zeroToTen_ADC = XPPerMin_zeroToTen_ADC;
			analysisJson[0].player.XPPerMin_zeroToThirty_ADC = XPPerMin_zeroToThirty_ADC;
			analysisJson[0].player.XPDiffPerMin_zeroToTen_ADC = XPDiffPerMin_zeroToTen_ADC;
			analysisJson[0].player.XPDiffPerMin_tenToTwenty_ADC = XPDiffPerMin_tenToTwenty_ADC;
			analysisJson[0].player.XPDiffPerMin_twentyToThirty_ADC = XPDiffPerMin_twentyToThirty_ADC;
			analysisJson[0].player.TeamGoldPercent_ADC = TeamGoldPercent_ADC;
			analysisJson[0].player.TeamDamagePercent_ADC = TeamDamagePercent_ADC;
			
			analysisJson[0].player.VW_JG = VW_JG;
			analysisJson[0].player.WK_JG = WK_JG;
			analysisJson[0].player.WP_JG = WP_JG;
			analysisJson[0].player.KC_JG = KC_JG;
			analysisJson[0].player.KDA_JG = KDA_JG;
			analysisJson[0].player.FBContribution_JG = FBContribution_JG;
			analysisJson[0].player.KillSprees_JG = KillSprees_JG;
			analysisJson[0].player.LargestKillingSpree_JG = LargestKillingSpree_JG;	
			analysisJson[0].player.CSDiffPerMin_zeroToTen_JG = CSDiffPerMin_zeroToTen_JG;
			analysisJson[0].player.XPPerMin_zeroToTen_JG = XPPerMin_zeroToTen_JG;
			analysisJson[0].player.XPPerMin_zeroToThirty_JG = XPPerMin_zeroToThirty_JG;
			analysisJson[0].player.XPDiffPerMin_zeroToTen_JG = XPDiffPerMin_zeroToTen_JG;
			analysisJson[0].player.XPDiffPerMin_tenToTwenty_JG = XPDiffPerMin_tenToTwenty_JG;
			analysisJson[0].player.XPDiffPerMin_twentyToThirty_JG = XPDiffPerMin_twentyToThirty_JG;
			analysisJson[0].player.TeamGoldPercent_JG = TeamGoldPercent_JG;
			analysisJson[0].player.TeamDamagePercent_JG = TeamDamagePercent_JG;
		})();
		
		
		
		console.log(JSON.stringify(analysisJson));
		console.log(JSON.stringify(analysisJson[0].ADC.ThisTier));
		
		
		res.json(analysisJson);
		return;
		

	}

}



//var summoner_name = summoner_name_original.toLowerCase();

//getSummonerIdByName(summoner_name, getSummonerMatchList, GetMatchData);
	

