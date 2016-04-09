//Get division from stdin
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');
var https = require('https');
var json2csv = require('json2csv');
var tierToAnalyze = '';
var legalTier = false;

var currentTime = Date.now();

var log = '';

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2"];


var requestCount = 0;

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
				log += `Analyzing division ${division}\n`;
				if(!divisionAnalyzingStatus[index]){
					divisionAnalyzingStatus[index] = true;
					var players = jsonData.Players;
					var analyzeDivisionSuccess = false;
				
					(function getPlayerData (playerIndex) {          
						setTimeout(function () {
							var playerData = players[playerIndex-1];
							var playerId = playerData.summonerId;
							console.log(`\n${playersAnalyzed[index]} Analyzed ; ${players.length-playersAnalyzed[index]} to go`)
							console.log(`Current summoner: ${playerId} in ${division}`);
							
							log += `\n${playersAnalyzed[index]} Analyzed ; ${players.length-playersAnalyzed[index]} to go\n`;
							log += `Current summoner: ${playerId}\n`;
							
							var getSummonerMatchList = function(summonerId, number){
					
				
					
								var rankedQueues = 'TEAM_BUILDER_DRAFT_RANKED_5x5';
								var seasons = 'SEASON2016';
								
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
										
										if(jsonData.status){
											console.log(`Error getting matchlist, status code: ${jsonData.status.status_code}`);
											
											log += `Error getting matchlist, status code: ${jsonData.status.status_code}\n`;
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
											path:`/api/lol/na/v2.2/match/${matchID}?api_key=${apiKey[matchIDArray.length%apiKey.length]}`,
											method: "GET"
										};
										
										console.log(`/api/lol/na/v2.2/match/${matchID}?api_key=${apiKey[matchIDArray.length%apiKey.length]}`);
										
										var request_Match = https.request(options, function(response){
											var receivedData = '';
											response.on("data", function(data){
												receivedData += data;
											});
											
											response.on("end", function(){
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
								
								}, 1500);
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
								var gatherVisionControlData = function(match, participantID){
									//wardingValue += match.participants[participantID-1].stats.wardsPlaced;
									//wardingValue += match.participants[participantID-1].stats.wardsKilled * 2;
									wardingValue += match.participants[participantID-1].stats.visionWardsBoughtInGame;
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
								var gatherTowerKills = function(match, participantID){
									total_Towerkills += match.participants[participantID-1].stats.towerKills;
								}
								
								
								//crowd control time
								var control_Duration = 0;
								var gatherControlDuration = function(match, participantID){
									control_Duration += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
								}
								
								
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
											getPlayerData(playerIndex);
											return;
										}
										else{
											if(identity.player.summonerId === parseInt(playerId)){
												participantID = identity.participantId;
												summonerName = identity.player.summonerName;
											}
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
									log += `file Existed\n`;
									log += `Data of ${summonerName}(${playerId}) is added\n`;
									
									console.log(`Data of ${summonerName}(${playerId}) is added`);
									data += `\n\"${summonerName}\",${KDA.toFixed(2)},${(totalKills/10).toFixed(2)},${(totalDeaths/10).toFixed(2)},${(totalAssists/10).toFixed(2)},${topPlayed},${junglePlayed},${midPlayed},${adcPlayed},${supportPlayed},${winRate},${wardingValue},${total_Towerkills},${dragonSlained},${riftHeraldSlained},${baronSlained},${KillContribution},${(control_Duration/60).toFixed(2)},${avgDuration}`;
									console.log(`${data}`);
									log += `${data}\n`;
									fs.writeFileSync(csvPath, data);
								}
								else{
									console.log('File not found! Create New File');
									log += `File not found! Create New File\n`;
									//format data
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
									analysis += `\"VisionControl\": ${wardingValue},`;
									analysis += `\"TowersKilled\": ${total_Towerkills},`;
									analysis += `\"DragonsKilled\": ${dragonSlained},`;
									analysis += `\"RiftHeraldKilled\": ${riftHeraldSlained},`;
									analysis += `\"BaronKilled\": ${baronSlained},`;
									analysis += `\"KillContribution\": ${KillContribution},`;
									analysis += `\"CCDuration\": ${(control_Duration/60).toFixed(2)},`;
									analysis += `\"AvgGameLength\": ${avgDuration}`;
									analysis += '}]';
									
									var JSON_Data = JSON.parse(analysis);
									var fields = ['SummonerName', 'KDA', 'AvgKills', 'AvgDeaths', 'AvgAssists', 'TOP_played', 'JUNGLE_played', 'MID_played', 'ADC_played', 'SUPPORT_played', 'WinRate', 'VisionControl', 'TowersKilled', 'DragonsKilled', 'RiftHeraldKilled', 'BaronKilled', 'KillContribution', 'CCDuration', 'AvgGameLength'];
									json2csv({ data: JSON_Data, fields: fields }, function(err, csv) {
										if (err) 
											console.log(err);
										console.log(csv);
										log += `${csv}\n`;
										fs.writeFileSync(csvPath, csv);
									});
								}
								
								//all csv
								if(fileExisted_all){
									console.log(`Data of ${summonerName}(${playerId}) is added to csv_all`);
									data_all += `\n\"${summonerName}\",${KDA.toFixed(2)},${(totalKills/10).toFixed(2)},${(totalDeaths/10).toFixed(2)},${(totalAssists/10).toFixed(2)},${topPlayed},${junglePlayed},${midPlayed},${adcPlayed},${supportPlayed},${winRate},${wardingValue},${total_Towerkills},${dragonSlained},${riftHeraldSlained},${baronSlained},${KillContribution},${(control_Duration/60).toFixed(2)},${avgDuration}`;
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
									analysis += `\"VisionControl\": ${wardingValue},`;
									analysis += `\"TowersKilled\": ${total_Towerkills},`;
									analysis += `\"DragonsKilled\": ${dragonSlained},`;
									analysis += `\"RiftHeraldKilled\": ${riftHeraldSlained},`;
									analysis += `\"BaronKilled\": ${baronSlained},`;
									analysis += `\"KillContribution\": ${KillContribution},`;
									analysis += `\"CCDuration\": ${(control_Duration/60).toFixed(2)},`;
									analysis += `\"AvgGameLength\": ${avgDuration}`;
									analysis += '}]';
									
									var JSON_Data = JSON.parse(analysis);
									var fields = ['SummonerName', 'KDA', 'AvgKills', 'AvgDeaths', 'AvgAssists', 'TOP_played', 'JUNGLE_played', 'MID_played', 'ADC_played', 'SUPPORT_played', 'WinRate', 'VisionControl', 'TowersKilled', 'DragonsKilled', 'RiftHeraldKilled', 'BaronKilled', 'KillContribution', 'CCDuration', 'AvgGameLength'];
									json2csv({ data: JSON_Data, fields: fields }, function(err, csv) {
										if (err) 
											console.log(err);
										fs.writeFileSync(csvPath_all, csv);
									});
								}
								
								
								
								playersAnalyzed[index]++;

								console.log(`Analyzed ${playersAnalyzed[index]} VS total number ${players.length}`);
								log += `Analyzed ${playersAnalyzed[index]} VS total number ${players.length}\n`;

								
								
								
							}

							getSummonerMatchList(playerId, 10);
							
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
						}, 20000)
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

		
		
		
		
		
		
		
		
		
		


























	