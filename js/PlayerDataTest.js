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
 'KILLS': 5.49,
 'DEATHS': 6.18,
 'ASSISTS': 9.33,
 'VISIONWARDS': 5.90,
 'WARDSPLACED': 120.12,
 'WARDSKILLED': 15.19,
 'DRAGONS': 16.12,
 'BARONS': 2.93,
 'TOWERS': 8.59,
 'INHIBITORS': 1.76,
 'RIFTHERALD': 2.01,
 'GAMELENGTH': 2001.50,
 'BE': 3.78,
 'BE_CRIT': 5.27,
 'TARGETCONTROL': 2.61,
 'DTPM_GENERAL': 737.46,
 'DPM_GENERAL': 513.08,
 'H_GENERAL': 147.2,
 'GPM': 343.25,
 'GPM_CRIT': 402.07,
 'CS_zeroToTenPerMatch_ADC': 41.22,
 'CS_ADC': 4.19,
 'D_ADC': 560.73,
 'DT_ADC': 610.92,
 'H_ADC': 101.54,
 'CS_zeroToTenPerMatch_MID': 46.21,
 'CS_MID': 4.20,
 'D_MID': 633.05,
 'DT_MID': 610.11,
 'H_MID': 73.63,
 'CS_zeroToTenPerMatch_TOP': 46.05,
 'CS_TOP': 4.65,
 'D_TOP': 550.97,
 'DT_TOP': 875.08,
 'H_TOP': 156.68,
 'CS_zeroToTenPerMatch_JG': 5.61,
 'CS_JG': 1.85,
 'D_JG': 482.54,
 'DT_JG': 921.84,
 'H_JG': 247.97,
 'CS_zeroToTenPerMatch_SUP': 7.22,
 'CS_SUP': 1.09,
 'D_SUP': 317.00,
 'DT_SUP': 666.61,
 'H_SUP': 150.98
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
 'KILLS': 5.44,
 'DEATHS': 5.72,
 'ASSISTS': 8.64,
 'VISIONWARDS': 8.34,
 'WARDSPLACED': 125.36,
 'WARDSKILLED': 23.58,
 'DRAGONS': 15.70,
 'BARONS': 3.34,
 'TOWERS': 8.70,
 'INHIBITORS': 1.59,
 'RIFTHERALD': 2.31,
 'GAMELENGTH': 1977.85,
 'BE': 3.98,
 'BE_CRIT': 5.50,
 'TARGETCONTROL': 2.78,
 'DTPM_GENERAL': 720.16,
 'DPM_GENERAL': 535.10,
 'H_GENERAL': 152.43,
 'GPM': 354.97,
 'GPM_CRIT': 416.36,
 'CS_zeroToTenPerMatch_ADC': 51.64,
 'CS_ADC': 5.176738,
 'D_ADC': 575.1337,
 'DT_ADC': 584.8045,
 'H_ADC': 97.22983,
 'CS_zeroToTenPerMatch_MID': 52.84093,
 'CS_MID': 4.769194,
 'D_MID': 631.1428,
 'DT_MID': 607.8646,
 'H_MID': 81.85914,
 'CS_zeroToTenPerMatch_TOP': 52.06204,
 'CS_TOP': 5.18612,
 'D_TOP': 589.7158,
 'DT_TOP': 846.0083,
 'H_TOP': 146.6239,
 'CS_zeroToTenPerMatch_JG': 5.313088,
 'CS_JG': 2.086805,
 'D_JG': 462.8668,
 'DT_JG': 911.6442,
 'H_JG': 259.4577,
 'CS_zeroToTenPerMatch_SUP': 6.515254,
 'CS_SUP': 1.0459,
 'D_SUP': 293.3001,
 'DT_SUP': 632.5766,
 'H_SUP': 170.6871
};

goldDataArray = {
 'KDA_AVG': 2.73,
 'WINRATE_AVG': 48.85,
 'VISION_AVG': 10.55,
 'TARGETCONTROL_AVG': 54.64,
 'KILLCONTRIBUTION_AVG': 52.05,
 'KDA_CRIT': 4.10,
 'WINRATE_CRIT': 72.49,
 'VISION_CRIT': 25.21,
 'TARGETCONTROL_CRIT': 81.90,
 'KILLCONTRIBUTION_CRIT': 61.46,
 'KILLS': 5.34,
 'DEATHS': 5.35,
 'ASSISTS': 8.27,
 'VISIONWARDS': 10.16,
 'WARDSPLACED': 123.79,
 'WARDSKILLED': 29.30,
 'DRAGONS': 15.40,
 'BARONS': 3.67,
 'TOWERS': 9.19,
 'INHIBITORS': 1.72,
 'RIFTHERALD': 2.68,
 'GAMELENGTH': 1915.85,
 'BE': 4.38,
 'BE_CRIT': 6.44,
 'TARGETCONTROL': 3.07,
 'DTPM_GENERAL': 712.70,
 'DPM_GENERAL': 556.72,
 'H_GENERAL': 156.72,
 'GPM': 363.0175839,
 'GPM_CRIT': 434.6414259,
 'CS_zeroToTenPerMatch_ADC': 59.95434,
 'CS_ADC': 5.815613,
 'D_ADC': 655.2553,
 'DT_ADC': 572.5909,
 'H_ADC': 94.25504,
 'CS_zeroToTenPerMatch_MID': 57.04071,
 'CS_MID': 5.177813,
 'D_MID': 611.1606,
 'DT_MID': 604.8372,
 'H_MID': 78.37717,
 'CS_zeroToTenPerMatch_TOP': 56.27551,
 'CS_TOP': 5.610543,
 'D_TOP': 594.503,
 'DT_TOP': 858.05,
 'H_TOP': 152.0733,
 'CS_zeroToTenPerMatch_JG': 7.325333,
 'CS_JG': 2.242723,
 'D_JG': 500.6723,
 'DT_JG': 884.5847,
 'H_JG': 263.5943,
 'CS_zeroToTenPerMatch_SUP': 8.006389,
 'CS_SUP': 1.087654,
 'D_SUP': 268.9358,
 'DT_SUP': 646.7516,
 'H_SUP': 150.4234
};

platinumDataArray = {
 'KDA_AVG': 2.62,
 'WINRATE_AVG': 48.79,
 'VISION_AVG': 11.69,
 'TARGETCONTROL_AVG': 54.26,
 'KILLCONTRIBUTION_AVG': 51.92,
 'KDA_CRIT': 3.74,
 'WINRATE_CRIT': 73.72,
 'VISION_CRIT': 26.44,
 'TARGETCONTROL_CRIT': 79.06,
 'KILLCONTRIBUTION_CRIT': 60.64217406,
 'KILLS': 5.13,
 'DEATHS': 5.33,
 'ASSISTS': 8.08,
 'VISIONWARDS': 11.37,
 'WARDSPLACED': 125.75,
 'WARDSKILLED': 32.04,
 'DRAGONS': 14.81,
 'BARONS': 3.68,
 'TOWERS': 8.52,
 'INHIBITORS': 1.72,
 'RIFTHERALD': 2.80,
 'GAMELENGTH': 1875.84,
 'BE': 4.56,
 'BE_CRIT': 6.23,
 'TARGETCONTROL': 3.09,
 'DTPM_GENERAL': 711.53,
 'DPM_GENERAL': 549.106393,
 'H_GENERAL': 154.6209118,
 'GPM': 364.9824291,
 'GPM_CRIT': 422.4340578,
 'CS_zeroToTenPerMatch_ADC': 58.53614,
 'CS_ADC': 5.669069,
 'D_ADC': 620.6933,
 'DT_ADC': 594.6983,
 'H_ADC': 96.38024,
 'CS_zeroToTenPerMatch_MID': 58.08068,
 'CS_MID': 5.320488,
 'D_MID': 632.615,
 'DT_MID': 623.7903,
 'H_MID': 90.23448,
 'CS_zeroToTenPerMatch_TOP': 56.79487,
 'CS_TOP': 5.928681,
 'D_TOP': 548.1093,
 'DT_TOP': 839.3771,
 'H_TOP': 158.5227,
 'CS_zeroToTenPerMatch_JG': 7.685,
 'CS_JG': 2.233414,
 'D_JG': 479.1523,
 'DT_JG': 874.2897,
 'H_JG': 259.6069,
 'CS_zeroToTenPerMatch_SUP': 7.034375,
 'CS_SUP': 1.01271,
 'D_SUP': 280.3085,
 'DT_SUP': 610.5673,
 'H_SUP': 153.9793
};

diamondDataArray = {
 'KDA_AVG': 2.86,
 'WINRATE_AVG': 48.96,
 'VISION_AVG': 16.83,
 'TARGETCONTROL_AVG': 56.23,
 'KILLCONTRIBUTION_AVG': 53.54,
 'KDA_CRIT': 4.84,
 'WINRATE_CRIT': 73.97,
 'VISION_CRIT': 34.39,
 'TARGETCONTROL_CRIT': 81.93,
 'KILLCONTRIBUTION_CRIT': 62.44,
 'KILLS': 4.82,
 'DEATHS': 4.97,
 'ASSISTS': 8.10,
 'VISIONWARDS': 15.2,
 'WARDSPLACED': 138.02,
 'WARDSKILLED': 38.63,
 'DRAGONS': 13.89,
 'BARONS': 4.04,
 'TOWERS': 8.79,
 'INHIBITORS': 1.54,
 'RIFTHERALD': 3.11,
 'GAMELENGTH': 1817.89,
 'BE': 4.94,
 'BE_CRIT': 6.82,
 'TARGETCONTROL': 3.31,
 'DTPM_GENERAL': 709.1328223,
 'DPM_GENERAL': 548.3649939,
 'H_GENERAL': 158.9198297,
 'GPM': 371.7610833,
 'GPM_CRIT': 436.9838794,
 'CS_zeroToTenPerMatch_ADC': 60.03946,
 'CS_ADC': 6.020369,
 'D_ADC': 609.9212,
 'DT_ADC': 573.2934,
 'H_ADC': 92.19754,
 'CS_zeroToTenPerMatch_MID': 62.52217,
 'CS_MID': 5.842995,
 'D_MID': 588.9385,
 'DT_MID': 631.8092,
 'H_MID': 87.65604,
 'CS_zeroToTenPerMatch_TOP': 60.09566,
 'CS_TOP': 6.116665,
 'D_TOP': 578.2164,
 'DT_TOP': 836.7498,
 'H_TOP': 162.1128,
 'CS_zeroToTenPerMatch_JG': 10.81146,
 'CS_JG': 2.217632,
 'D_JG': 484.9831,
 'DT_JG': 874.3494,
 'H_JG': 263.1379,
 'CS_zeroToTenPerMatch_SUP': 6.735376,
 'CS_SUP': 1.013749,
 'D_SUP': 250.5981,
 'DT_SUP': 621.9626,
 'H_SUP': 180.3654
};

masterDataArray = {
 'KDA_AVG': 3.01,
 'WINRATE_AVG': 53.85,
 'VISION_AVG': 17.63,
 'TARGETCONTROL_AVG': 55.16,
 'KILLCONTRIBUTION_AVG': 53.72,
 'KDA_CRIT': 4.60,
 'WINRATE_CRIT': 78.98,
 'VISION_CRIT': 37.51,
 'TARGETCONTROL_CRIT': 80.53,
 'KILLCONTRIBUTION_CRIT': 63.55,
 'KILLS': 4.73,
 'DEATHS': 4.72,
 'ASSISTS': 7.98,
 'VISIONWARDS': 17.21,
 'WARDSPLACED': 138.88,
 'WARDSKILLED': 40.95,
 'DRAGONS': 12.48,
 'BARONS': 4.12,
 'TOWERS': 9.00,
 'INHIBITORS': 1.49,
 'RIFTHERALD': 3.38,
 'GAMELENGTH': 1756.21,
 'BE': 5.27,
 'BE_CRIT': 7.39,
 'TARGETCONTROL': 3.44,
 'DTPM_GENERAL': 728.6830523,
 'DPM_GENERAL': 552.7812422,
 'H_GENERAL': 172.9936269,
 'GPM': 379.7453191,
 'GPM_CRIT': 446.5143589,
 'CS_zeroToTenPerMatch_ADC': 61.99997,
 'CS_ADC': 6.184273,
 'D_ADC': 651.7377,
 'DT_ADC': 580.6486,
 'H_ADC': 100.0616,
 'CS_zeroToTenPerMatch_MID': 65.20282,
 'CS_MID': 6.106245,
 'D_MID': 623.9753,
 'DT_MID': 615.7327,
 'H_MID': 83.02311,
 'CS_zeroToTenPerMatch_TOP': 61.44952,
 'CS_TOP': 6.185975,
 'D_TOP': 563.8368,
 'DT_TOP': 855.0649,
 'H_TOP': 169.9538,
 'CS_zeroToTenPerMatch_JG': 9.99561,
 'CS_JG': 2.466477,
 'D_JG': 524.4744,
 'DT_JG': 904.1218,
 'H_JG': 285.8498,
 'CS_zeroToTenPerMatch_SUP': 7.458861,
 'CS_SUP': 1.013975,
 'D_SUP': 239.5489,
 'DT_SUP': 637.9768,
 'H_SUP': 173.4436
};

challengerDataArray = {
 'KDA_AVG': 3.16,
 'WINRATE_AVG': 56.83,
 'VISION_AVG': 20.87,
 'TARGETCONTROL_AVG': 55,
 'KILLCONTRIBUTION_AVG': 53.72,
 'KDA_CRIT': 4.87,
 'WINRATE_CRIT': 83.11,
 'VISION_CRIT': 39.84,
 'TARGETCONTROL_CRIT': 81.44,
 'KILLCONTRIBUTION_CRIT': 63.23,
 'KILLS': 5.03,
 'DEATHS': 4.51,
 'ASSISTS': 7.96,
 'VISIONWARDS': 21.05,
 'WARDSPLACED': 143.54,
 'WARDSKILLED': 42.98,
 'DRAGONS': 11.92,
 'BARONS': 4.39,
 'TOWERS': 10.11,
 'INHIBITORS': 1.60,
 'RIFTHERALD': 3.92,
 'GAMELENGTH': 1731.27,
 'BE': 5.59,
 'BE_CRIT': 7.62,
 'TARGETCONTROL': 3.75,
 'DTPM_GENERAL': 719.6077572,
 'DPM_GENERAL': 586.3033333,
 'H_GENERAL': 167.5259312,
 'GPM': 393.5036169,
 'GPM_CRIT': 460.729069,
 'CS_zeroToTenPerMatch_ADC': 64.00747,
 'CS_ADC': 6.48367,
 'D_ADC': 688.3789,
 'DT_ADC': 608.3339,
 'H_ADC': 109.4315,
 'CS_zeroToTenPerMatch_MID': 65.99967,
 'CS_MID': 6.28519,
 'D_MID': 645.2944,
 'DT_MID': 643.0063,
 'H_MID': 85.99746,
 'CS_zeroToTenPerMatch_TOP': 63.736,
 'CS_TOP': 6.446065,
 'D_TOP': 599.7133,
 'DT_TOP': 875.08,
 'H_TOP': 167.9741,
 'CS_zeroToTenPerMatch_JG': 14.59786,
 'CS_JG': 2.444959,
 'D_JG': 549.94,
 'DT_JG': 896.3726,
 'H_JG': 281.1807,
 'CS_zeroToTenPerMatch_SUP': 7.510244,
 'CS_SUP': 1.027085,
 'D_SUP': 263.1874,
 'DT_SUP': 635.4074,
 'H_SUP': 166.8783
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
		
		var gatherVersatilityData = function(match, participantID){
			if(match.participants[participantID-1].timeline.lane === 'TOP'){
				topPlayed ++;
				topTimelineNum ++;
				PlayedLength_TOP += match.matchDuration;
				D_TOP += match.participants[participantID-1].stats.totalDamageDealtToChampions;
				DT_TOP += match.participants[participantID-1].stats.totalDamageTaken;
				CS_TOP += match.participants[participantID-1].stats.minionsKilled;
				H_TOP += match.participants[participantID-1].stats.totalHeal;
				if(match.participants[participantID-1].timeline){
					if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
						CS_zeroToTen_TOP += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
					}
					else{
						topTimelineNum --;
					}
				}
				else{
					topTimelineNum --;
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
					}
				}
				
				if(match.participants[participantID-1].stats.winner){
					WIN_TOP++;
				}
				CC_TOP += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
			}
			else if(match.participants[participantID-1].timeline.lane === 'MIDDLE'){
				midPlayed ++;
				midTimelineNum ++;
				PlayedLength_MID += match.matchDuration;
				D_MID += match.participants[participantID-1].stats.totalDamageDealtToChampions;
				DT_MID += match.participants[participantID-1].stats.totalDamageTaken;
				CS_MID += match.participants[participantID-1].stats.minionsKilled;
				H_MID += match.participants[participantID-1].stats.totalHeal;
				if(match.participants[participantID-1].timeline){
					if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
						CS_zeroToTen_MID += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
					}
					else{
						midTimelineNum --;
					}
				}
				else{
					midTimelineNum --;
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
					}
				}
				
				if(match.participants[participantID-1].stats.winner){
					WIN_MID++;
				}
				CC_MID += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
			}
			else if(match.participants[participantID-1].timeline.lane === 'JUNGLE'){
				junglePlayed ++;
				jgTimelineNum ++;
				PlayedLength_JG += match.matchDuration;
				D_JG += match.participants[participantID-1].stats.totalDamageDealtToChampions;
				DT_JG += match.participants[participantID-1].stats.totalDamageTaken;
				CS_JG += match.participants[participantID-1].stats.neutralMinionsKilled;
				H_JG += match.participants[participantID-1].stats.totalHeal;
				
				if(match.participants[participantID-1].timeline){
					
					if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
						CS_zeroToTen_JG += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
					}
					else{
						jgTimelineNum --;
					}
				}
				else{
					jgTimelineNum --;
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
					}
				}
				if(match.participants[participantID-1].stats.winner){
					WIN_JG++;
				}
				CC_JG += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
			}
			else if(match.participants[participantID-1].timeline.lane === 'BOTTOM'){
				if(match.participants[participantID-1].timeline.role === 'DUO_SUPPORT'){
					supportPlayed ++;
					supTimelineNum ++;
					PlayedLength_SUP += match.matchDuration;
					D_SUP += match.participants[participantID-1].stats.totalDamageDealtToChampions;
					DT_SUP += match.participants[participantID-1].stats.totalDamageTaken;
					CS_SUP += match.participants[participantID-1].stats.minionsKilled;
					H_SUP += match.participants[participantID-1].stats.totalHeal;
					
					if(match.participants[participantID-1].timeline){
						
						if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
							CS_zeroToTen_SUP += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
						}
						else{
							supTimelineNum --;
						}
					}
					else{
						supTimelineNum --;
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
						}
					}
					if(match.participants[participantID-1].stats.winner){
						WIN_SUP++;
					}
					CC_SUP += match.participants[participantID-1].stats.totalTimeCrowdControlDealt;
				}
				else{
					adcPlayed ++;
					adcTimelineNum ++;
					PlayedLength_ADC += match.matchDuration;
					D_ADC += match.participants[participantID-1].stats.totalDamageDealtToChampions;
					DT_ADC += match.participants[participantID-1].stats.totalDamageTaken;
					CS_ADC += match.participants[participantID-1].stats.minionsKilled;
					H_ADC += match.participants[participantID-1].stats.totalHeal;
					
					if(match.participants[participantID-1].timeline){
						if(match.participants[participantID-1].timeline.creepsPerMinDeltas){
							CS_zeroToTen_ADC += match.participants[participantID-1].timeline.creepsPerMinDeltas.zeroToTen;
						}
						else{
							adcTimelineNum --;
						}
					}
					else{
						adcTimelineNum --;
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
		
		analysisJson[0].ADC = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].TOP = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].MID = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].SUP = {'ThisTier': {},'NextTier': {}};
		analysisJson[0].JG = {'ThisTier': {},'NextTier': {}};
		
		
		/*
		analysisJson.ADC.ThisTier = {[]};
		analysisJson.MID.ThisTier = {[]};
		analysisJson.TOP.ThisTier = {[]};
		analysisJson.JG.ThisTier = {[]};
		analysisJson.SUP.ThisTier = {[]};
		
		analysisJson.ADC.NextTier = {[]};
		analysisJson.MID.NextTier = {[]};
		analysisJson.TOP.NextTier = {[]};
		analysisJson.JG.NextTier = {[]};
		analysisJson.SUP.NextTier = {[]};
		*/
		
		/*
		analysisJson.ADC.ThisTier = {
			CS_zeroToTenPerMatch_ADC: CS_zeroToTenPerMatch_ADC_ThisTier,
			CS_ADC: CS_ADC_ThisTier,
			D_ADC: D_ADC_ThisTier,
			DT_ADC: DT_ADC_ThisTier,
			H_ADC: H_ADC_ThisTier,
			CS_zeroToTenPerMatch_MID: CS_zeroToTenPerMatch_MID_ThisTier,
			CS_MID: CS_MID_ThisTier,
			D_MID: D_MID_ThisTier,
			DT_MID: DT_MID_ThisTier,
			H_MID: H_MID_ThisTier
			
			
			
			
		};
		*/
		
		
		analysisJson[0].ADC.ThisTier.CS_zeroToTenPerMatch_ADC = CS_zeroToTenPerMatch_ADC_ThisTier;
		analysisJson[0].ADC.ThisTier.CS_ADC = CS_ADC_ThisTier;
		analysisJson[0].ADC.ThisTier.D_ADC = D_ADC_ThisTier;
		analysisJson[0].ADC.ThisTier.DT_ADC = DT_ADC_ThisTier;
		analysisJson[0].ADC.ThisTier.H_ADC = H_ADC_ThisTier;
		
		analysisJson[0].MID.ThisTier.CS_zeroToTenPerMatch_MID = CS_zeroToTenPerMatch_MID_ThisTier;
		analysisJson[0].MID.ThisTier.CS_MID = CS_MID_ThisTier;
		analysisJson[0].MID.ThisTier.D_MID = D_MID_ThisTier;
		analysisJson[0].MID.ThisTier.DT_MID = DT_MID_ThisTier;
		analysisJson[0].MID.ThisTier.H_MID = H_MID_ThisTier;
		
		analysisJson[0].TOP.ThisTier.CS_zeroToTenPerMatch_TOP = CS_zeroToTenPerMatch_TOP_ThisTier;
		analysisJson[0].TOP.ThisTier.CS_TOP = CS_TOP_ThisTier;
		analysisJson[0].TOP.ThisTier.D_TOP = D_TOP_ThisTier;
		analysisJson[0].TOP.ThisTier.DT_TOP = DT_TOP_ThisTier;
		analysisJson[0].TOP.ThisTier.H_TOP = H_TOP_ThisTier;
		
		analysisJson[0].JG.ThisTier.CS_zeroToTenPerMatch_JG = CS_zeroToTenPerMatch_JG_ThisTier;
		analysisJson[0].JG.ThisTier.CS_JG = CS_JG_ThisTier;
		analysisJson[0].JG.ThisTier.D_JG = D_JG_ThisTier;
		analysisJson[0].JG.ThisTier.DT_JG = DT_JG_ThisTier;
		analysisJson[0].JG.ThisTier.H_JG = H_JG_ThisTier;
		
		analysisJson[0].SUP.ThisTier.CS_zeroToTenPerMatch_SUP = CS_zeroToTenPerMatch_SUP_ThisTier;
		analysisJson[0].SUP.ThisTier.CS_SUP = CS_SUP_ThisTier;
		analysisJson[0].SUP.ThisTier.D_SUP = D_SUP_ThisTier;
		analysisJson[0].SUP.ThisTier.DT_SUP = DT_SUP_ThisTier;
		analysisJson[0].SUP.ThisTier.H_SUP = H_SUP_ThisTier;
		
		
		analysisJson[0].ADC.NextTier.CS_zeroToTenPerMatch_ADC = CS_zeroToTenPerMatch_ADC_NextTier;
		analysisJson[0].ADC.NextTier.CS_ADC = CS_ADC_NextTier;
		analysisJson[0].ADC.NextTier.D_ADC = D_ADC_NextTier;
		analysisJson[0].ADC.NextTier.DT_ADC = DT_ADC_NextTier;
		analysisJson[0].ADC.NextTier.H_ADC = H_ADC_NextTier;
		
		analysisJson[0].MID.NextTier.CS_zeroToTenPerMatch_MID = CS_zeroToTenPerMatch_MID_NextTier;
		analysisJson[0].MID.NextTier.CS_MID = CS_MID_NextTier;
		analysisJson[0].MID.NextTier.D_MID = D_MID_NextTier;
		analysisJson[0].MID.NextTier.DT_MID = DT_MID_NextTier;
		analysisJson[0].MID.NextTier.H_MID = H_MID_NextTier;
		
		analysisJson[0].TOP.NextTier.CS_zeroToTenPerMatch_TOP = CS_zeroToTenPerMatch_TOP_NextTier;
		analysisJson[0].TOP.NextTier.CS_TOP = CS_TOP_NextTier;
		analysisJson[0].TOP.NextTier.D_TOP = D_TOP_NextTier;
		analysisJson[0].TOP.NextTier.DT_TOP = DT_TOP_NextTier;
		analysisJson[0].TOP.NextTier.H_TOP = H_TOP_NextTier;
		
		analysisJson[0].JG.NextTier.CS_zeroToTenPerMatch_JG = CS_zeroToTenPerMatch_JG_NextTier;
		analysisJson[0].JG.NextTier.CS_JG = CS_JG_NextTier;
		analysisJson[0].JG.NextTier.D_JG = D_JG_NextTier;
		analysisJson[0].JG.NextTier.DT_JG = DT_JG_NextTier;
		analysisJson[0].JG.NextTier.H_JG = H_JG_NextTier;
		
		analysisJson[0].SUP.NextTier.CS_zeroToTenPerMatch_SUP = CS_zeroToTenPerMatch_SUP_NextTier;
		analysisJson[0].SUP.NextTier.CS_SUP = CS_SUP_NextTier;
		analysisJson[0].SUP.NextTier.D_SUP = D_SUP_NextTier;
		analysisJson[0].SUP.NextTier.DT_SUP = DT_SUP_NextTier;
		analysisJson[0].SUP.NextTier.H_SUP = H_SUP_NextTier;
		
		console.log(JSON.stringify(analysisJson));
		console.log(JSON.stringify(analysisJson[0].ADC.ThisTier));
		
		
		res.json(analysisJson);
		return;
		

	}

}



//var summoner_name = summoner_name_original.toLowerCase();

//getSummonerIdByName(summoner_name, getSummonerMatchList, GetMatchData);
	

