//Get division from stdin
var format = require("string-template");
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');
var https = require('https');
var json2csv = require('json2csv');
var tierToAnalyze = '';
var legalTier = false;

var currentTime = Date.now();

var log = '';

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2",'55c0033d-23b5-4cb6-8104-e0d5311073b2'];

var matchIntervalTime = 500;
var playerIntervalTime = 15000;
var requestCount = 0;

var summonerTier;
var summonerDivision;
var leaguePoints;

var checkRequest = function(){
	if(requestCount > 10){
		
	}
}

var swapKey = function(){
	
}

rl.question("Which tier you want to analyze? Example: BRONZE. (type \'exit\' to quit)\r\n", function(answer){
	if(answer != 'exit'){
		tierToAnalyze = answer;
	
		if(tierToAnalyze.toUpperCase() === 'BRONZE'||
		   tierToAnalyze.toUpperCase() === 'SILVER'||
		   tierToAnalyze.toUpperCase() === 'GOLD'||
		   tierToAnalyze.toUpperCase() === 'PLATINUM'||
		   tierToAnalyze.toUpperCase() === 'DIAMOND'||
		   tierToAnalyze.toUpperCase() === 'MASTER'||
		   tierToAnalyze.toUpperCase() === 'CHALLENGER')
		{
			legalTier = true;
			rl.close();
		}
		else{
			rl.setPrompt('Please type in a valid tier. Example: BRONZE.\r\n');
			rl.prompt();
			
			rl.on('line', function(newAnswer){
				tierToAnalyze = newAnswer;
				if(tierToAnalyze.toUpperCase() === 'BRONZE'||
				   tierToAnalyze.toUpperCase() === 'SILVER'||
				   tierToAnalyze.toUpperCase() === 'GOLD'||
				   tierToAnalyze.toUpperCase() === 'PLATINUM'||
				   tierToAnalyze.toUpperCase() === 'DIAMOND'||
				   tierToAnalyze.toUpperCase() === 'MASTER'||
				   tierToAnalyze.toUpperCase() === 'CHALLENGER')
				{
					legalTier = true;
					rl.close();
				}
				else{
					rl.setPrompt('Please type in a valid tier. Example: BRONZE.\r\n');
					rl.prompt();
				}
				
			});
		}
	}
});

rl.on('close', function(){
	if(!legalTier){
		console.log('Tier not legal');
		process.exit();
	}
	else{
		console.log(`Starting analyzing ${tierToAnalyze} tier`);
		var leagueDataArray = [];
		var divisionData = [];
		
		if(tierToAnalyze.toUpperCase() === 'BRONZE'||
		   tierToAnalyze.toUpperCase() === 'SILVER'||
		   tierToAnalyze.toUpperCase() === 'GOLD'||
		   tierToAnalyze.toUpperCase() === 'PLATINUM'||
		   tierToAnalyze.toUpperCase() === 'DIAMOND')
		{
			for(var i = 0; i < 5; i++){
				var division = '';
				switch(i){
					case 0:
						division = 'I';
						break;
					case 1:
						division = 'II';
						break;
					case 2:
						division = 'III';
						break;
					case 3:
						division = 'IV';
						break;
					case 4:
						division = 'V';
						break;
				}
				
				var path = `../PlayerData/Leagues/${tierToAnalyze}/${division}/LeagueData.json`;
				
				try{
					data = fs.readFileSync(path).toString();
				}
				catch(e){
					if(e instanceof Error){
						console.log(e);
						console.log(`file at ${path} does not exist.`);
						continue;
					}
				}
				
				var dataJson = JSON.parse(data);
				
				if(dataJson){
					leagueDataArray.push(dataJson);
					divisionData.push(division);
				}
			}
		}
		else{
			var path = `../PlayerData/Leagues/${tierToAnalyze}/LeagueData.json`;
			try{
				data = fs.readFileSync(path).toString();
			}
			catch(e){
				if(e instanceof Error){
					console.log(`file at ${path} does not exist, skipping...`);
				}
			}
			
			var dataJson = JSON.parse(data);
			
			if(dataJson){
				leagueDataArray.push(dataJson);
				divisionData.push(division);
			}
		}
		
		console.log(`${leagueDataArray.length} division data grabbed`)
		log += `${leagueDataArray.length} division data grabbed\n`;
		
		var divisionAnalyzingStatus = [false, false, false, false, false];
		var playersAnalyzed = [0, 0, 0, 0, 0];
		
		var leagueDivisionData = function(index){
			if(index < leagueDataArray.length){
				var jsonData = leagueDataArray[index];
				var division = divisionData[index];
				console.log(`Analyzing division ${division}`);
				if(!divisionAnalyzingStatus[index]){
					divisionAnalyzingStatus[index] = true;
					var players = jsonData.Players;
					var analyzeDivisionSuccess = false;
				
					(function getPlayerData (playerIndex) {          
						setTimeout(function () {
							var playerData = players[playerIndex-1];
							var playerId = playerData.summonerId;
							var summonerTier;
							var summonerDivision;
							var leaguePoints;
							console.log(`\n${playersAnalyzed[index]} Analyzed ; ${players.length-playersAnalyzed[index]} to go`)
							console.log(`Current summoner: ${playerId} in ${division}`);
							
							var getLeagueData = function(summonerId ,number){
								var options = {
									host: "na.api.pvp.net",
									path: format("/api/lol/na/v2.5/league/by-summoner/{name}/entry?api_key={key}", {name: summonerId, key: apiKey[requestCount%apiKey.length]}),
									method: "GET"
								};
								
								var request_response ='';
								var request = https.request(options, function(response){
									response.on("data", function(data){
										//console.log(`Data Received: ${data}`);
										request_response+= data;
									});
									
									response.on("end", function(){
										requestCount ++;
										console.log("request League ends");
										//console.log(`request ID response: ${request_response}`);
										var jsonData = JSON.parse(request_response);
										
										if(jsonData.status){
											console.log(format("failed to get summoner tier from {summonerId} because of {message}", {summonerId: summonerId, message: jsonData.status.message}));
										}
										else{
											summonerTier = jsonData[summonerId][0].tier;
											summonerDivision = jsonData[summonerId][0].entries[0].division;
											leaguePoints = jsonData[summonerId][0].entries[0].leaguePoints;
											console.log(format("Summoner rank: {tier} {division} {leaguePoints}", {tier: summonerTier, division: summonerDivision, leaguePoints:leaguePoints}));
											getSummonerMatchList(summonerId, 10);
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
							} 
							
							
							
							var getSummonerMatchList = function(summonerId, number){	
								var rankedQueues = 'TEAM_BUILDER_DRAFT_RANKED_5x5';
								var seasons = 'SEASON2016';
								
								var options = {
									host: "na.api.pvp.net",
									path:`/api/lol/na/v2.2/matchlist/by-summoner/${summonerId}?rankedQueues=${rankedQueues}&seasons=${seasons}&api_key=${apiKey[requestCount%apiKey.length]}`,
									method: "GET"
								};
								
								
								var request_MatchList_response ='';
								var matchIDArray = new Array();
								var request_MatchList = https.request(options, function(response){
									
									response.on("data", function(data){
										request_MatchList_response+= data;
									});
									
									response.on("end", function(){
										requestCount++;
										console.log("request Match List ends");
										var jsonData = JSON.parse(request_MatchList_response);
										
										if(jsonData.status){
											console.log(`Error getting matchlist, status code: ${jsonData.status.status_code}`);
										}
										else{
											getMatchesID(jsonData, number, matchIDArray);
										}
									});
								});
								
								request_MatchList.end();
								request_MatchList.on('error', function(err){
									console.log(`request matchlist error: ${err}`);
								});
								
							}

							var getMatchesID = function(jsonData, number, IDarray){
								var matchesNum = jsonData['endIndex'];
								var iterationNum = matchesNum < number ? matchesNum : number;
								for(var i = 0; i < iterationNum; i++){
									if(iterationNum > 0){
										IDarray.push(jsonData['matches'][i]['matchId']);
									}
								};
								
								if(GetMatchData && IDarray.length > 0){
									GetMatchData(IDarray);
								}
							};

							var GetMatchData = function(matchIDArray){
				
								console.log(`in getMatchData with ${matchIDArray}`);
								var matchJsonData = new Array();
								var matchNum = matchIDArray.length;
								
								var currentMatchIndex = 0;
								var matchInterval = setInterval(function(){
									if(matchIDArray.length > 0){
										//console.log(`${matchIDArray.length} matches left to grab`);
										//log += `${matchIDArray.length} matches left to grab\n`;
										var matchID = matchIDArray.shift();
										//console.log(`Grabbing match ${matchID}`);
										//log += `Grabbing match ${matchID}\n`;
										var options = {
											host: "na.api.pvp.net",
											path:`/api/lol/na/v2.2/match/${matchID}?api_key=${apiKey[requestCount%apiKey.length]}`,
											method: "GET"
										};
										
										console.log(`/api/lol/na/v2.2/match/${matchID}?api_key=${apiKey[matchIDArray.length%apiKey.length]}`);
										
										var request_Match = https.request(options, function(response){
											var receivedData = '';
											response.on("data", function(data){
												receivedData += data;
											});
											
											response.on("end", function(){
												requestCount++;
												var dataJSON = JSON.parse(receivedData);
												if(dataJSON.status){
													console.log(`failed to get data from ${matchID} because of ${dataJSON.status.status_code} ${dataJSON.status.message}`);
													log += `failed to get data from ${matchID} because of ${dataJSON.status.message}\n`;
													if(dataJSON.status.status_code === 404){
														return;
													}
													else if(dataJSON.status.status_code === 429){
														console.log("Retry in 2 seconds");
														setTimeout(function(){
															console.log(`Retry ${matchID}`);
															matchIDArray.unshift(matchID);
														}, 2000);
													}
													else if(dataJSON.status.status_code === 500){
														return; 
													}
												}
												else{
													//console.log(`Grabbed ${matchID}`);
													//log += `Grabbed ${matchID}\n`;
													matchJsonData.push(receivedData);
													if(matchJsonData.length >= matchNum){
														console.log("All matches are grabbed");
														log += `All matches are grabbed\n`;
														AnalyzeMatchData(matchJsonData);
													};
												};
											});
										});
									
										request_Match.end();
										request_Match.on('error', function(err){
											console.log(`request match error: ${err}`);
											matchIDArray.unshift(matchID);
										});
									}
								}, matchIntervalTime);
							}

							var AnalyzeMatchData = function(matchStrArray){
								console.log(`\nAnalyzing ${matchStrArray.length} matches`);
								log += `\nAnalyzing ${matchStrArray.length} matches\n`;
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
								
								
								var summonerName = '';
								
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
								var numberOfMatchesOverTwenty = 0;
								var numberOfMatchesOverThirty = 0;
								var gatherMatchDuration = function(match){
									match_totalDuration += match.matchDuration;
									if(match.matchDuration > 1200){
										numberOfMatchesOverTwenty ++;
										if(match.matchDuration > 1800){
											numberOfMatchesOverThirty ++;
										}
									}
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
									console.log(`Analyzing match ${matchJson.matches[i].matchId}`);
									log += `Analyzing match ${matchJson.matches[i].matchId}\n`;
									var match = matchJson.matches[i];
									//Find Player
									var participantID;
									
									
									for (var j = 0; j < match.participantIdentities.length; j++){
										identity = match.participantIdentities[j];
										//console.log(`${identity.player.summonerId} VS ${playerId}`);
										if(!identity.player){
											console.log(JSON.stringify(identity));
											playerIndex--;
											console.log(`jump to the next index because of match data error`);
											console.log(`current playerIndex: ${playerIndex}`);
											//getPlayerData(playerIndex);
											continue;
										}
										else{
											if(identity.player.summonerId === parseInt(playerId)){
												participantID = identity.participantId;
												summonerName = identity.player.summonerName;
											}
										}
									};
									
									if(!participantID){
										continue;
									}
									
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
									gatherMatchDetails(match, participantID);
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
								
								var WinRate_ADC = (WIN_ADC/adcPlayed * 100).toFixed(2);
								var WinRate_TOP = (WIN_TOP/topPlayed * 100).toFixed(2);
								var WinRate_MID = (WIN_MID/midPlayed * 100).toFixed(2);
								var WinRate_JG = (WIN_JG/junglePlayed * 100).toFixed(2);
								var WinRate_SUP = (WIN_SUP/supportPlayed * 100).toFixed(2);
								
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

								var rankScore;
								var calculateRankScore = function(summonerTier, summonerDivision, leaguePoints){
									var division = 0;
									switch(summonerDivision){
										case 'I':
											division = 4;
											break;
										case 'II':
											division = 3;
											break;
										case 'III':
											division = 2;
											break;
										case 'IV':
											division = 1;
											break;
										case 'V':
											division = 0;
											break;
										default:
											division = 0;
											break;
									}
									var tier = 0;
									var specialTier = 0;
									switch(summonerTier){
										case 'BRONZE':
											tier = 0;
											break;
										case 'SILVER':
											tier = 1;
											break;
										case 'GOLD':
											tier = 2;
											break;
										case 'PLATINUM':
											tier = 3;
											break;
										case 'DIAMOND':
											tier = 4;
											break;
										case 'MASTER':
											tier = 5;
											break;
										case 'CHALLENGER':
											tier = 5;
											break;
									}
									
									rankScore = tier * 500 + division * 100 + leaguePoints;
								}
								
								calculateRankScore(summonerTier, summonerDivision, leaguePoints);
								
								
								//fs.writeFileSync(`../PlayerData/JSON/${summonerName_NoSpace}.json`, analysis);
								
														//read from file
								var csvPath = '';

								var csvPath_all = `../PlayerData/CSV/ALL/AnalyzedData(ALL).csv`;
								
								if(tierToAnalyze === "CHALLENGER" || tierToAnalyze === "MASTER"){
									csvPath += `../PlayerData/CSV/${tierToAnalyze}/AnalyzedData(${tierToAnalyze})_${currentTime}.csv`;
								}
								else{
									csvPath += `../PlayerData/CSV/${tierToAnalyze}/${division}/AnalyzedData(${tierToAnalyze}${division})_${currentTime}.csv`;
								}
								
								
								
								var data = '';
								var fileExisted = true;
								try{
									data = fs.readFileSync(csvPath).toString();
								}
								catch(e){
									if(e instanceof Error){
										if (e.code === 'ENOENT') {
											fileExisted = false;
										} else {
											throw e;
										}
									}
								}
								
								var data_all = '';
								var fileExisted_all = true;
								try{
									data_all = fs.readFileSync(csvPath_all).toString();
								}
								catch(e){
									if(e instanceof Error){
										if (e.code === 'ENOENT') {
											fileExisted_all = false;
										} else {
											throw e;
										}
									}
								}
								
								
								
								if(fileExisted){
									console.log("file Existed");
									
									console.log(`Data of ${summonerName}(${playerId}) is added`);
									data += `\n\"${summonerName}\",${rankScore},${KDA.toFixed(2)},${(totalKills/10).toFixed(2)},${(totalDeaths/10).toFixed(2)},${(totalAssists/10).toFixed(2)},${topPlayed},${junglePlayed},${midPlayed},${adcPlayed},${supportPlayed},${winRate},${wardingValue}, ${wardsKilled}, ${wardsPlaced}, ${total_Towerkills}, ${total_InhibitorKills}, ${dragonSlained},${riftHeraldSlained},${baronSlained},${KillContribution}, ${totalDamageDealtToChampions}, ${totalDamageTaken}, ${totalHeal}, ${(control_Duration/60).toFixed(2)}, ${goldEarned},${avgDuration},${PlayedLength_TOP},${PlayedLength_MID},${PlayedLength_JG},${PlayedLength_ADC},${PlayedLength_SUP},${D_ADC},${DT_ADC},${CS_zeroToTen_ADC},${CS_ADC},${H_ADC},${G_ADC},${K_ADC},${De_ADC},${A_ADC},${VW_ADC},${WK_ADC},${WP_ADC},${KC_ADC},${KDA_ADC},${WinRate_ADC},${CC_ADC},${FBContribution_ADC},${KillSprees_ADC},${LargestKillingSpree_ADC},${CSDiffPerMin_zeroToTen_ADC},${XPPerMin_zeroToTen_ADC},${XPPerMin_zeroToThirty_ADC},${XPDiffPerMin_zeroToTen_ADC},${XPDiffPerMin_tenToTwenty_ADC},${XPDiffPerMin_twentyToThirty_ADC},${TeamGoldPercent_ADC},${TeamDamagePercent_ADC},${D_MID},${DT_MID},${CS_zeroToTen_MID},${CS_MID},${H_MID},${G_MID},${K_MID},${De_MID},${A_MID},${VW_MID},${WK_MID},${WP_MID},${KC_MID},${KDA_MID},${WinRate_MID},${CC_MID},${FBContribution_MID},${KillSprees_MID},${LargestKillingSpree_MID},${CSDiffPerMin_zeroToTen_MID},${XPPerMin_zeroToTen_MID},${XPPerMin_zeroToThirty_MID},${XPDiffPerMin_zeroToTen_MID},${XPDiffPerMin_tenToTwenty_MID},${XPDiffPerMin_twentyToThirty_MID},${TeamGoldPercent_MID},${TeamDamagePercent_MID},${D_TOP},${DT_TOP},${CS_zeroToTen_TOP},${CS_TOP},${H_TOP},${G_TOP},${K_TOP},${De_TOP},${A_TOP},${VW_TOP},${WK_TOP},${WP_TOP},${KC_TOP},${KDA_TOP},${WinRate_TOP},${CC_TOP},${FBContribution_TOP},${KillSprees_TOP},${LargestKillingSpree_TOP},${CSDiffPerMin_zeroToTen_TOP},${XPPerMin_zeroToTen_TOP},${XPPerMin_zeroToThirty_TOP},${XPDiffPerMin_zeroToTen_TOP},${XPDiffPerMin_tenToTwenty_TOP},${XPDiffPerMin_twentyToThirty_TOP},${TeamGoldPercent_TOP},${TeamDamagePercent_TOP},${D_JG},${DT_JG},${CS_zeroToTen_JG},${CS_JG},${H_JG},${G_JG},${K_JG},${De_JG},${A_JG},${VW_JG},${WK_JG},${WP_JG},${KC_JG},${KDA_JG},${WinRate_JG},${CC_JG},${FBContribution_JG},${KillSprees_JG},${LargestKillingSpree_JG},${CSDiffPerMin_zeroToTen_JG},${XPPerMin_zeroToTen_JG},${XPPerMin_zeroToThirty_JG},${XPDiffPerMin_zeroToTen_JG},${XPDiffPerMin_tenToTwenty_JG},${XPDiffPerMin_twentyToThirty_JG},${TeamGoldPercent_JG},${TeamDamagePercent_JG},${D_SUP},${DT_SUP},${CS_zeroToTen_SUP},${CS_SUP},${H_SUP},${G_SUP},${K_SUP},${De_SUP},${A_SUP},${VW_SUP},${WK_SUP},${WP_SUP},${KC_SUP},${KDA_SUP},${WinRate_SUP},${CC_SUP},${FBContribution_SUP},${KillSprees_SUP},${LargestKillingSpree_SUP},${CSDiffPerMin_zeroToTen_SUP},${XPPerMin_zeroToTen_SUP},${XPPerMin_zeroToThirty_SUP},${XPDiffPerMin_zeroToTen_SUP},${XPDiffPerMin_tenToTwenty_SUP},${XPDiffPerMin_twentyToThirty_SUP},${TeamGoldPercent_SUP},${TeamDamagePercent_SUP},`;
									console.log(`${data}`);
									log += `${data}\n`;
									fs.writeFileSync(csvPath, data);
								}
								else{
									console.log('File not found! Create New File');
									//format data
									var analysis = '[{';
									analysis += `\"SummonerName\": \"${summonerName}\",`;
									analysis += `\"rankScore\": ${rankScore},`;
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
									analysis += `\"VisionWards\": ${wardingValue},`;
									analysis += `\"WardsKilled\": ${wardsKilled},`;
									analysis += `\"WardsPlaced\": ${wardsPlaced},`;
									analysis += `\"TowersKilled\": ${total_Towerkills},`;
									analysis += `\"InhibitorKills\": ${total_InhibitorKills},`;
									analysis += `\"DragonsKilled\": ${dragonSlained},`;
									analysis += `\"RiftHeraldKilled\": ${riftHeraldSlained},`;
									analysis += `\"BaronKilled\": ${baronSlained},`;
									analysis += `\"KillContribution\": ${KillContribution},`;
									analysis += `\"TotalDamageDealtToChampions\": ${totalDamageDealtToChampions},`;
									analysis += `\"TotalDamageTaken\": ${totalDamageTaken},`;
									analysis += `\"TotalHeal\": ${totalHeal},`;
									analysis += `\"CCDuration\": ${control_Duration},`;
									analysis += `\"GoldEarned\": ${goldEarned},`;
									analysis += `\"AvgGameLength\": ${avgDuration},`;
									analysis += `\"PlayedLength_TOP\": ${PlayedLength_TOP},`;
									analysis += `\"PlayedLength_MID\": ${PlayedLength_MID},`;
									analysis += `\"PlayedLength_JG\": ${PlayedLength_JG},`;
									analysis += `\"PlayedLength_ADC\": ${PlayedLength_ADC},`;
									analysis += `\"PlayedLength_SUP\": ${PlayedLength_SUP},`;
									analysis += `\"D_ADC\": ${D_ADC},`;
									analysis += `\"DT_ADC\": ${DT_ADC},`;
									analysis += `\"CS_zeroToTen_ADC\": ${CS_zeroToTen_ADC},`;
									analysis += `\"CS_ADC\": ${CS_ADC},`;
									analysis += `\"H_ADC\": ${H_ADC},`;
									analysis += `\"G_ADC\": ${G_ADC},`;
									analysis += `\"K_ADC\": ${K_ADC},`;
									analysis += `\"De_ADC\": ${De_ADC},`;
									analysis += `\"A_ADC\": ${A_ADC},`;
									analysis += `\"VW_ADC\": ${VW_ADC},`;
									analysis += `\"WK_ADC\": ${WK_ADC},`;
									analysis += `\"WP_ADC\": ${WP_ADC},`;
									analysis += `\"KC_ADC\": ${KC_ADC},`;
									analysis += `\"KDA_ADC\": ${KDA_ADC},`;
									analysis += `\"WinRate_ADC\": ${WinRate_ADC},`;
									analysis += `\"CC_ADC\": ${CC_ADC},`;
									analysis += `\"FBContribution_ADC\": ${FBContribution_ADC},`;
									analysis += `\"KillSprees_ADC\": ${KillSprees_ADC},`;
									analysis += `\"LargestKillingSpree_ADC\": ${LargestKillingSpree_ADC},`;
									analysis += `\"CSDiffPerMin_zeroToTen_ADC\": ${CSDiffPerMin_zeroToTen_ADC},`;
									analysis += `\"XPPerMin_zeroToTen_ADC\": ${XPPerMin_zeroToTen_ADC},`;
									analysis += `\"XPPerMin_zeroToThirty_ADC\": ${XPPerMin_zeroToThirty_ADC},`;
									analysis += `\"XPDiffPerMin_zeroToTen_ADC\": ${XPDiffPerMin_zeroToTen_ADC},`;
									analysis += `\"XPDiffPerMin_tenToTwenty_ADC\": ${XPDiffPerMin_tenToTwenty_ADC},`;
									analysis += `\"XPDiffPerMin_twentyToThirty_ADC\": ${XPDiffPerMin_twentyToThirty_ADC},`;
									analysis += `\"TeamGoldPercent_ADC\": ${TeamGoldPercent_ADC},`;
									analysis += `\"TeamDamagePercent_ADC\": ${TeamDamagePercent_ADC},`;
									analysis += `\"D_MID\": ${D_MID},`;
									analysis += `\"DT_MID\": ${DT_MID},`;
									analysis += `\"CS_zeroToTen_MID\": ${CS_zeroToTen_MID},`;
									analysis += `\"CS_MID\": ${CS_MID},`;
									analysis += `\"H_MID\": ${H_MID},`;
									analysis += `\"G_MID\": ${G_MID},`;
									analysis += `\"K_MID\": ${K_MID},`;
									analysis += `\"De_MID\": ${De_MID},`;
									analysis += `\"A_MID\": ${A_MID},`;
									analysis += `\"VW_MID\": ${VW_MID},`;
									analysis += `\"WK_MID\": ${WK_MID},`;
									analysis += `\"WP_MID\": ${WP_MID},`;
									analysis += `\"KC_MID\": ${KC_MID},`;
									analysis += `\"KDA_MID\": ${KDA_MID},`;
									analysis += `\"WinRate_MID\": ${WinRate_MID},`;
									analysis += `\"CC_MID\": ${CC_MID},`;
									analysis += `\"FBContribution_MID\": ${FBContribution_MID},`;
									analysis += `\"KillSprees_MID\": ${KillSprees_MID},`;
									analysis += `\"LargestKillingSpree_MID\": ${LargestKillingSpree_MID},`;
									analysis += `\"CSDiffPerMin_zeroToTen_MID\": ${CSDiffPerMin_zeroToTen_MID},`;
									analysis += `\"XPPerMin_zeroToTen_MID\": ${XPPerMin_zeroToTen_MID},`;
									analysis += `\"XPPerMin_zeroToThirty_MID\": ${XPPerMin_zeroToThirty_MID},`;
									analysis += `\"XPDiffPerMin_zeroToTen_MID\": ${XPDiffPerMin_zeroToTen_MID},`;
									analysis += `\"XPDiffPerMin_tenToTwenty_MID\": ${XPDiffPerMin_tenToTwenty_MID},`;
									analysis += `\"XPDiffPerMin_twentyToThirty_MID\": ${XPDiffPerMin_twentyToThirty_MID},`;
									analysis += `\"TeamGoldPercent_MID\": ${TeamGoldPercent_MID},`;
									analysis += `\"TeamDamagePercent_MID\": ${TeamDamagePercent_MID},`;
									analysis += `\"D_TOP\": ${D_TOP},`;
									analysis += `\"DT_TOP\": ${DT_TOP},`;
									analysis += `\"CS_zeroToTen_TOP\": ${CS_zeroToTen_TOP},`;
									analysis += `\"CS_TOP\": ${CS_TOP},`;
									analysis += `\"H_TOP\": ${H_TOP},`;
									analysis += `\"G_TOP\": ${G_TOP},`;
									analysis += `\"K_TOP\": ${K_TOP},`;
									analysis += `\"De_TOP\": ${De_TOP},`;
									analysis += `\"A_TOP\": ${A_TOP},`;
									analysis += `\"VW_TOP\": ${VW_TOP},`;
									analysis += `\"WK_TOP\": ${WK_TOP},`;
									analysis += `\"WP_TOP\": ${WP_TOP},`;
									analysis += `\"KC_TOP\": ${KC_TOP},`;
									analysis += `\"KDA_TOP\": ${KDA_TOP},`;
									analysis += `\"WinRate_TOP\": ${WinRate_TOP},`;
									analysis += `\"CC_TOP\": ${CC_TOP},`;
									analysis += `\"FBContribution_TOP\": ${FBContribution_TOP},`;
									analysis += `\"KillSprees_TOP\": ${KillSprees_TOP},`;
									analysis += `\"LargestKillingSpree_TOP\": ${LargestKillingSpree_TOP},`;
									analysis += `\"CSDiffPerMin_zeroToTen_TOP\": ${CSDiffPerMin_zeroToTen_TOP},`;
									analysis += `\"XPPerMin_zeroToTen_TOP\": ${XPPerMin_zeroToTen_TOP},`;
									analysis += `\"XPPerMin_zeroToThirty_TOP\": ${XPPerMin_zeroToThirty_TOP},`;
									analysis += `\"XPDiffPerMin_zeroToTen_TOP\": ${XPDiffPerMin_zeroToTen_TOP},`;
									analysis += `\"XPDiffPerMin_tenToTwenty_TOP\": ${XPDiffPerMin_tenToTwenty_TOP},`;
									analysis += `\"XPDiffPerMin_twentyToThirty_TOP\": ${XPDiffPerMin_twentyToThirty_TOP},`;
									analysis += `\"TeamGoldPercent_TOP\": ${TeamGoldPercent_TOP},`;
									analysis += `\"TeamDamagePercent_TOP\": ${TeamDamagePercent_TOP},`;
									analysis += `\"D_JG\": ${D_JG},`;
									analysis += `\"DT_JG\": ${DT_JG},`;
									analysis += `\"CS_zeroToTen_JG\": ${CS_zeroToTen_JG},`;
									analysis += `\"CS_JG\": ${CS_JG},`;
									analysis += `\"H_JG\": ${H_JG},`;
									analysis += `\"G_JG\": ${G_JG},`;
									analysis += `\"K_JG\": ${K_JG},`;
									analysis += `\"De_JG\": ${De_JG},`;
									analysis += `\"A_JG\": ${A_JG},`;
									analysis += `\"VW_JG\": ${VW_JG},`;
									analysis += `\"WK_JG\": ${WK_JG},`;
									analysis += `\"WP_JG\": ${WP_JG},`;
									analysis += `\"KC_JG\": ${KC_JG},`;
									analysis += `\"KDA_JG\": ${KDA_JG},`;
									analysis += `\"WinRate_JG\": ${WinRate_JG},`;
									analysis += `\"CC_JG\": ${CC_JG},`;
									analysis += `\"FBContribution_JG\": ${FBContribution_JG},`;
									analysis += `\"KillSprees_JG\": ${KillSprees_JG},`;
									analysis += `\"LargestKillingSpree_JG\": ${LargestKillingSpree_JG},`;
									analysis += `\"CSDiffPerMin_zeroToTen_JG\": ${CSDiffPerMin_zeroToTen_JG},`;
									analysis += `\"XPPerMin_zeroToTen_JG\": ${XPPerMin_zeroToTen_JG},`;
									analysis += `\"XPPerMin_zeroToThirty_JG\": ${XPPerMin_zeroToThirty_JG},`;
									analysis += `\"XPDiffPerMin_zeroToTen_JG\": ${XPDiffPerMin_zeroToTen_JG},`;
									analysis += `\"XPDiffPerMin_tenToTwenty_JG\": ${XPDiffPerMin_tenToTwenty_JG},`;
									analysis += `\"XPDiffPerMin_twentyToThirty_JG\": ${XPDiffPerMin_twentyToThirty_JG},`;
									analysis += `\"TeamGoldPercent_JG\": ${TeamGoldPercent_JG},`;
									analysis += `\"TeamDamagePercent_JG\": ${TeamDamagePercent_JG},`;
									analysis += `\"D_SUP\": ${D_SUP},`;
									analysis += `\"DT_SUP\": ${DT_SUP},`;
									analysis += `\"CS_zeroToTen_SUP\": ${CS_zeroToTen_SUP},`;
									analysis += `\"CS_SUP\": ${CS_SUP},`;
									analysis += `\"H_SUP\": ${H_SUP},`;
									analysis += `\"G_SUP\": ${G_SUP},`;
									analysis += `\"K_SUP\": ${K_SUP},`;
									analysis += `\"De_SUP\": ${De_SUP},`;
									analysis += `\"A_SUP\": ${A_SUP},`;
									analysis += `\"VW_SUP\": ${VW_SUP},`;
									analysis += `\"WK_SUP\": ${WK_SUP},`;
									analysis += `\"WP_SUP\": ${WP_SUP},`;
									analysis += `\"KC_SUP\": ${KC_SUP},`;
									analysis += `\"KDA_SUP\": ${KDA_SUP},`;
									analysis += `\"WinRate_SUP\": ${WinRate_SUP},`;
									analysis += `\"CC_SUP\": ${CC_SUP},`;
									analysis += `\"FBContribution_SUP\": ${FBContribution_SUP},`;
									analysis += `\"KillSprees_SUP\": ${KillSprees_SUP},`;
									analysis += `\"LargestKillingSpree_SUP\": ${LargestKillingSpree_SUP},`;
									analysis += `\"CSDiffPerMin_zeroToTen_SUP\": ${CSDiffPerMin_zeroToTen_SUP},`;
									analysis += `\"XPPerMin_zeroToTen_SUP\": ${XPPerMin_zeroToTen_SUP},`;
									analysis += `\"XPPerMin_zeroToThirty_SUP\": ${XPPerMin_zeroToThirty_SUP},`;
									analysis += `\"XPDiffPerMin_zeroToTen_SUP\": ${XPDiffPerMin_zeroToTen_SUP},`;
									analysis += `\"XPDiffPerMin_tenToTwenty_SUP\": ${XPDiffPerMin_tenToTwenty_SUP},`;
									analysis += `\"XPDiffPerMin_twentyToThirty_SUP\": ${XPDiffPerMin_twentyToThirty_SUP},`;
									analysis += `\"TeamGoldPercent_SUP\": ${TeamGoldPercent_SUP},`;
									analysis += `\"TeamDamagePercent_SUP\": ${TeamDamagePercent_SUP}`;
									analysis += '}]';
									
									//console.log(analysis);
									
									
									var JSON_Data = JSON.parse(analysis);
									console.log('parse success');
									var fields = ['SummonerName', 'rankScore', 'KDA', 'AvgKills', 'AvgDeaths', 'AvgAssists', 'TOP_played', 'JUNGLE_played', 'MID_played', 'ADC_played', 'SUPPORT_played', 'WinRate', 'VisionWards', 'WardsKilled', 'WardsPlaced', 'TowersKilled', 'InhibitorKills', 'DragonsKilled', 'RiftHeraldKilled', 'BaronKilled', 'KillContribution', 'TotalDamageDealtToChampions', 'TotalDamageTaken', 'TotalHeal', 'CCDuration', 'GoldEarned', 'AvgGameLength', 'PlayedLength_TOP', 'PlayedLength_MID','PlayedLength_JG','PlayedLength_ADC','PlayedLength_SUP','D_ADC','DT_ADC','CS_zeroToTen_ADC','CS_ADC','H_ADC','G_ADC','K_ADC','De_ADC','A_ADC','VW_ADC','WK_ADC','WP_ADC','KC_ADC','KDA_ADC','WinRate_ADC','CC_ADC','FBContribution_ADC','KillSprees_ADC','LargestKillingSpree_ADC','CSDiffPerMin_zeroToTen_ADC','XPPerMin_zeroToTen_ADC','XPPerMin_zeroToThirty_ADC','XPDiffPerMin_zeroToTen_ADC','XPDiffPerMin_tenToTwenty_ADC','XPDiffPerMin_twentyToThirty_ADC','TeamGoldPercent_ADC','TeamDamagePercent_ADC','D_MID','DT_MID','CS_zeroToTen_MID','CS_MID','H_MID','G_MID','K_MID','De_MID','A_MID','VW_MID','WK_MID','WP_MID','KC_MID','KDA_MID','WinRate_MID','CC_MID','FBContribution_MID','KillSprees_MID','LargestKillingSpree_MID','CSDiffPerMin_zeroToTen_MID','XPPerMin_zeroToTen_MID','XPPerMin_zeroToThirty_MID','XPDiffPerMin_zeroToTen_MID','XPDiffPerMin_tenToTwenty_MID','XPDiffPerMin_twentyToThirty_MID','TeamGoldPercent_MID','TeamDamagePercent_MID','D_TOP','DT_TOP','CS_zeroToTen_TOP','CS_TOP','H_TOP','G_TOP','K_TOP','De_TOP','A_TOP','VW_TOP','WK_TOP','WP_TOP','KC_TOP','KDA_TOP','WinRate_TOP','CC_TOP','FBContribution_TOP','KillSprees_TOP','LargestKillingSpree_TOP','CSDiffPerMin_zeroToTen_TOP','XPPerMin_zeroToTen_TOP','XPPerMin_zeroToThirty_TOP','XPDiffPerMin_zeroToTen_TOP','XPDiffPerMin_tenToTwenty_TOP','XPDiffPerMin_twentyToThirty_TOP','TeamGoldPercent_TOP','TeamDamagePercent_TOP','D_JG','DT_JG','CS_zeroToTen_JG','CS_JG','H_JG','G_JG','K_JG','De_JG','A_JG','VW_JG','WK_JG','WP_JG','KC_JG','KDA_JG','WinRate_JG','CC_JG','FBContribution_JG','KillSprees_JG','LargestKillingSpree_JG','CSDiffPerMin_zeroToTen_JG','XPPerMin_zeroToTen_JG','XPPerMin_zeroToThirty_JG','XPDiffPerMin_zeroToTen_JG','XPDiffPerMin_tenToTwenty_JG','XPDiffPerMin_twentyToThirty_JG','TeamGoldPercent_JG','TeamDamagePercent_JG','D_SUP','DT_SUP','CS_zeroToTen_SUP','CS_SUP','H_SUP','G_SUP','K_SUP','De_SUP','A_SUP','VW_SUP','WK_SUP','WP_SUP','KC_SUP','KDA_SUP','WinRate_SUP','CC_SUP','FBContribution_SUP','KillSprees_SUP','LargestKillingSpree_SUP','CSDiffPerMin_zeroToTen_SUP','XPPerMin_zeroToTen_SUP','XPPerMin_zeroToThirty_SUP','XPDiffPerMin_zeroToTen_SUP','XPDiffPerMin_tenToTwenty_SUP','XPDiffPerMin_twentyToThirty_SUP','TeamGoldPercent_SUP','TeamDamagePercent_SUP'];
									json2csv({ data: JSON_Data, fields: fields }, function(err, csv) {
										if (err) 
											//console.log(err);
										console.log(csv);
										fs.writeFileSync(csvPath, csv);
									});
									
								}
								
								//all csv
								/*
								
								if(fileExisted_all){
									console.log(`Data of ${summonerName}(${playerId}) is added to csv_all`);
									data_all += `\n\"${summonerName}\",${KDA.toFixed(2)},${(totalKills/10).toFixed(2)},${(totalDeaths/10).toFixed(2)},${(totalAssists/10).toFixed(2)},${topPlayed},${junglePlayed},${midPlayed},${adcPlayed},${supportPlayed},${winRate},${wardingValue}, ${wardsKilled}, ${wardsPlaced}, ${total_Towerkills}, ${total_InhibitorKills}, ${dragonSlained},${riftHeraldSlained},${baronSlained},${KillContribution}, ${totalDamageDealtToChampions}, ${totalDamageTaken}, ${totalHeal}, ${(control_Duration/60).toFixed(2)}, ${goldEarned},${avgDuration},${topPlayedLength},${midPlayedLength},${junglePlayedLength},${adcPlayedLength},${supportPlayedLength},${D_ADC},${DT_ADC},${CS_zeroToTen_ADC},${CS_ADC},${H_ADC},${G_ADC},${K_ADC},${De_ADC},${A_ADC},${VW_ADC},${WK_ADC},${WP_ADC},${KC_ADC},${KDA_ADC},${D_MID},${DT_MID},${CS_zeroToTen_MID},${CS_MID},${H_MID},${G_MID},${K_MID},${De_MID},${A_MID},${VW_MID},${WK_MID},${WP_MID},${KC_MID},${KDA_MID},${D_TOP},${DT_TOP},${CS_zeroToTen_TOP},${CS_TOP},${H_TOP},${G_TOP},${K_TOP},${De_TOP},${A_TOP},${VW_TOP},${WK_TOP},${WP_TOP},${KC_TOP},${KDA_TOP},${D_JG},${DT_JG},${CS_zeroToTen_JG},${CS_JG},${H_JG},${G_JG},${K_JG},${De_JG},${A_JG},${VW_JG},${WK_JG},${WP_JG},${KC_JG},${KDA_JG},${D_SUP},${DT_SUP},${CS_zeroToTen_SUP},${CS_SUP},${H_SUP},${G_SUP},${K_SUP},${De_SUP},${A_SUP},${VW_SUP},${WK_SUP},${WP_SUP},${KC_SUP},${KDA_SUP}`;
									fs.writeFileSync(csvPath_all, data_all);
								}
								else{
									var analysis = '[{';
									analysis += `\"SummonerName\": \"${summonerName}\",`;
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
									analysis += `\"VisionWards\": ${wardingValue},`;
									analysis += `\"WardsKilled\": ${wardsKilled},`;
									analysis += `\"WardsPlaced\": ${wardsPlaced},`;
									analysis += `\"TowersKilled\": ${total_Towerkills},`;
									analysis += `\"InhibitorKills\": ${total_InhibitorKills},`;
									analysis += `\"DragonsKilled\": ${dragonSlained},`;
									analysis += `\"RiftHeraldKilled\": ${riftHeraldSlained},`;
									analysis += `\"BaronKilled\": ${baronSlained},`;
									analysis += `\"KillContribution\": ${KillContribution},`;
									analysis += `\"TotalDamageDealtToChampions\": ${totalDamageDealtToChampions},`;
									analysis += `\"TotalDamageTaken\": ${totalDamageTaken},`;
									analysis += `\"TotalHeal\": ${totalHeal},`;
									analysis += `\"CCDuration\": ${control_Duration},`;
									analysis += `\"GoldEarned\": ${goldEarned},`;
									analysis += `\"AvgGameLength\": ${avgDuration},`;
									analysis += `\"topPlayedLength\": ${topPlayedLength},`;
									analysis += `\"midPlayedLength\": ${midPlayedLength},`;
									analysis += `\"junglePlayedLength\": ${junglePlayedLength},`;
									analysis += `\"adcPlayedLength\": ${adcPlayedLength},`;
									analysis += `\"supportPlayedLength\": ${supportPlayedLength},`;
									analysis += `\"D_ADC\": ${D_ADC},`;
									analysis += `\"DT_ADC\": ${DT_ADC},`;
									analysis += `\"CS_zeroToTen_ADC\": ${CS_zeroToTen_ADC},`;
									analysis += `\"CS_ADC\": ${CS_ADC},`;
									analysis += `\"H_ADC\": ${H_ADC},`;
									analysis += `\"G_ADC\": ${G_ADC},`;
									analysis += `\"K_ADC\": ${K_ADC},`;
									analysis += `\"De_ADC\": ${De_ADC},`;
									analysis += `\"A_ADC\": ${A_ADC},`;
									analysis += `\"VW_ADC\": ${VW_ADC},`;
									analysis += `\"WK_ADC\": ${WK_ADC},`;
									analysis += `\"WP_ADC\": ${WP_ADC},`;
									analysis += `\"KC_ADC\": ${KC_ADC},`;
									analysis += `\"KDA_ADC\": ${KDA_ADC},`;
									analysis += `\"D_MID\": ${D_MID},`;
									analysis += `\"DT_MID\": ${DT_MID},`;
									analysis += `\"CS_zeroToTen_MID\": ${CS_zeroToTen_MID},`;
									analysis += `\"CS_MID\": ${CS_MID},`;
									analysis += `\"H_MID\": ${H_MID},`;
									analysis += `\"G_MID\": ${G_MID},`;
									analysis += `\"K_MID\": ${K_MID},`;
									analysis += `\"De_MID\": ${De_MID},`;
									analysis += `\"A_MID\": ${A_MID},`;
									analysis += `\"VW_MID\": ${VW_MID},`;
									analysis += `\"WK_MID\": ${WK_MID},`;
									analysis += `\"WP_MID\": ${WP_MID},`;
									analysis += `\"KC_MID\": ${KC_MID},`;
									analysis += `\"KDA_MID\": ${KDA_MID},`;
									analysis += `\"D_TOP\": ${D_TOP},`;
									analysis += `\"DT_TOP\": ${DT_TOP},`;
									analysis += `\"CS_zeroToTen_TOP\": ${CS_zeroToTen_TOP},`;
									analysis += `\"CS_TOP\": ${CS_TOP},`;
									analysis += `\"H_TOP\": ${H_TOP},`;
									analysis += `\"G_TOP\": ${G_TOP},`;
									analysis += `\"K_TOP\": ${K_TOP},`;
									analysis += `\"De_TOP\": ${De_TOP},`;
									analysis += `\"A_TOP\": ${A_TOP},`;
									analysis += `\"VW_TOP\": ${VW_TOP},`;
									analysis += `\"WK_TOP\": ${WK_TOP},`;
									analysis += `\"WP_TOP\": ${WP_TOP},`;
									analysis += `\"KC_TOP\": ${KC_TOP},`;
									analysis += `\"KDA_TOP\": ${KDA_TOP},`;
									analysis += `\"D_JG\": ${D_JG},`;
									analysis += `\"DT_JG\": ${DT_JG},`;
									analysis += `\"CS_zeroToTen_JG\": ${CS_zeroToTen_JG},`;
									analysis += `\"CS_JG\": ${CS_JG},`;
									analysis += `\"H_JG\": ${H_JG},`;
									analysis += `\"G_JG\": ${G_JG},`;
									analysis += `\"K_JG\": ${K_JG},`;
									analysis += `\"De_JG\": ${De_JG},`;
									analysis += `\"A_JG\": ${A_JG},`;
									analysis += `\"VW_JG\": ${VW_JG},`;
									analysis += `\"WK_JG\": ${WK_JG},`;
									analysis += `\"WP_JG\": ${WP_JG},`;
									analysis += `\"KC_JG\": ${KC_JG},`;
									analysis += `\"KDA_JG\": ${KDA_JG},`;
									analysis += `\"D_SUP\": ${D_SUP},`;
									analysis += `\"DT_SUP\": ${DT_SUP},`;
									analysis += `\"CS_zeroToTen_SUP\": ${CS_zeroToTen_SUP},`;
									analysis += `\"CS_SUP\": ${CS_SUP},`;
									analysis += `\"H_SUP\": ${H_SUP},`;
									analysis += `\"G_SUP\": ${G_SUP},`;
									analysis += `\"K_SUP\": ${K_SUP},`;
									analysis += `\"De_SUP\": ${De_SUP},`;
									analysis += `\"A_SUP\": ${A_SUP},`;
									analysis += `\"VW_SUP\": ${VW_SUP},`;
									analysis += `\"WK_SUP\": ${WK_SUP},`;
									analysis += `\"WP_SUP\": ${WP_SUP},`;
									analysis += `\"KC_SUP\": ${KC_SUP},`;
									analysis += `\"KDA_SUP\": ${KDA_SUP}`;
									analysis += '}]';
									
									var JSON_Data = JSON.parse(analysis);
									var fields = ['SummonerName', 'KDA', 'AvgKills', 'AvgDeaths', 'AvgAssists', 'TOP_played', 'JUNGLE_played', 'MID_played', 'ADC_played', 'SUPPORT_played', 'WinRate', 'VisionWards', 'WardsKilled', 'WardsPlaced', 'TowersKilled', 'InhibitorKills', 'DragonsKilled', 'RiftHeraldKilled', 'BaronKilled', 'KillContribution', 'TotalDamageDealtToChampions', 'TotalDamageTaken', 'TotalHeal', 'CCDuration', 'GoldEarned', 'AvgGameLength', 'topPlayedLength', 'midPlayedLength','junglePlayedLength','adcPlayedLength','supportPlayedLength','D_ADC','DT_ADC','CS_zeroToTen_ADC','CS_ADC','H_ADC','G_ADC','K_ADC','De_ADC','A_ADC','VW_ADC','WK_ADC','WP_ADC','KC_ADC','KDA_ADC','D_MID','DT_MID','CS_zeroToTen_MID','CS_MID','H_MID','G_MID','K_MID','De_MID','A_MID','VW_MID','WK_MID','WP_MID','KC_MID','KDA_MID','D_TOP','DT_TOP','CS_zeroToTen_TOP','CS_TOP','H_TOP','G_TOP','K_TOP','De_TOP','A_TOP','VW_TOP','WK_TOP','WP_TOP','KC_TOP','KDA_TOP','D_JG','DT_JG','CS_zeroToTen_JG','CS_JG','H_JG','G_JG','K_JG','De_JG','A_JG','VW_JG','WK_JG','WP_JG','KC_JG','KDA_JG','D_SUP','DT_SUP','CS_zeroToTen_SUP','CS_SUP','H_SUP','G_SUP','K_SUP','De_SUP','A_SUP','VW_SUP','WK_SUP','WP_SUP','KC_SUP','KDA_SUP'];
									json2csv({ data: JSON_Data, fields: fields }, function(err, csv) {
										if (err) 
											console.log(err);
										fs.writeFileSync(csvPath_all, csv);
									});
								}
								*/
								
								
								playersAnalyzed[index]++;

								console.log(`Analyzed ${playersAnalyzed[index]} VS total number ${players.length}`);
								log += `Analyzed ${playersAnalyzed[index]} VS total number ${players.length}\n`;
							}

							getLeagueData(playerId, 10);
							
							if (--playerIndex){
								console.log(`current playerIndex: ${playerIndex}`);
								getPlayerData(playerIndex);
							}
							else{
								console.log("Proceeding to the next division because of playerIndex");
								log += `Proceeding to the next division\n`;
								if(!divisionAnalyzingStatus[++index]){
									leagueDivisionData(index);
								}
								return;
							}
						//  decrement i and call myLoop again if i > 0
						}, playerIntervalTime)
					})(players.length);
				}
			}
			else{
				console.log("Analysis done, exporting log");
				log += `Analysis done`;
				fs.writeFileSync('log.txt', log);
				process.exit();
			}
		}
		leagueDivisionData(0);
	}
});







//Gather  5 division league data in a tier folder

//store ids in 5 arrays

//Big Loop of 5
	//Big Loop of all ids in this arrays
		//grabMatch
		//Analyze
		//append analysis to according csv file
		//Set timeout 20000
	