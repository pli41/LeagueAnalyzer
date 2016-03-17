

	//Inputs
	var https = require('https');
	var fs = require('fs');
	var json2csv = require('json2csv');
	
	
	var summoner_name_original = 'cigar graves';
	var apiKey = ["79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832"];
	
	//deff4e7a-16c6-4144-9d31-0305f9b3d19f

	var getSummonerIdByName = function(name, callback1, callback2){
		var summoner_name_escaped= encodeURI(name);
		var options_ID = {
			host: "na.api.pvp.net",
			path: `/api/lol/na/v1.4/summoner/by-name/${summoner_name_escaped}?api_key=${apiKey[0]}`,
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
				console.log(`request ID response: ${request_ID_response}`);
				var jsonData = JSON.parse(request_ID_response);
				
				
				var summoner_name_trimmed = name.replace(/\s+/g, '');
				
				if(callback1){
					if(callback2){
						callback1(jsonData[summoner_name_trimmed]['id'], callback2);
					}
					else{
						callback1(jsonData[summoner_name_trimmed]['id']);
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
		//fs.writeFileSync('data.json', combinedMatchString);
		
		
		
		
		
		
		
		//KDA
		var totalKills = 0;
		var totalDeaths = 0;
		var totalAssists = 0;
		var gatherKDA_Data = function(match, participantID){
			console.log(`KDA participant ID is ${participantID}`);
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
		
		//format data
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
		
		
	}

	

	
	


	
	
	var summoner_name = summoner_name_original.toLowerCase();

	getSummonerIdByName(summoner_name, getSummonerMatchList, GetMatchData);

