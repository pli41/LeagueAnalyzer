var https = require('https');
var fs = require('fs');
var json2csv = require('json2csv');
var path = require('path');

var summoner_name_original = "xPLzzZx";
var summoner_id = '';

var apiKey = ["79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832"];




var getSummonerIdByName = function(name, callback1){
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
				summoner_id = jsonData[summoner_name_trimmed]['id'];
				
				if(callback1){
					callback1(jsonData[summoner_name_trimmed]['id']);
				}
			});
		});
		
		request_ID.end();
		request_ID.on("error", function(err){
			console.log(`request ID error: ${err}`);
		});
		
	};

var getLeagueById = function(){
	var options = {
		host: "na.api.pvp.net",
		path: `/api/lol/na/v2.5/league/by-summoner/${summoner_id}?api_key=${apiKey[0]}`,
		method: "GET"
	};
		
	https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/24229424
		
	var responseBody ='';
	var request = https.request(options, function(response){
		response.on("data", function(data){
			//console.log(`Data Received: ${data}`);
			responseBody+= data;
		});
		
		response.on("end", function(){
			console.log("request league ends");
			
			saveLeagueData(responseBody);
		});
	});

	request.end();
	request.on("error", function(err){
		console.log(`request ID error: ${err}`);
	});
}

var saveLeagueData = function(jsonString){
	var numberOfnewEntryAdded = 0;
	var numberOfexistedEntry = 0;
	var numberOfAllEntries = 0;
	
	var json = JSON.parse(jsonString);
	
	var tier = json[summoner_id][0].tier;
	
	numberOfAllEntries = json[summoner_id][0].entries.length;
	console.log(`Total number of summoners waiting to be processed: ${numberOfAllEntries}`);
	
	for(var i = 0; i < json[summoner_id][0].entries.length; i++){
		var entry = json[summoner_id][0].entries[i];
		
		var summonerName = entry.playerOrTeamName;
		var summonerId = entry.playerOrTeamId;
		var division = entry.division;
		
		console.log(`${i} current summoner: ${summonerName}(${summonerId}) at ${tier} ${division}`);
		
		var path = `../PlayerData/Leagues/${tier}/${division}/LeagueData.json`
		
		var data = '';
		var fileExisted = true;
		try{
			data = fs.readFileSync(path).toString();
		}
		catch(e){
			if(e instanceof Error){
				if (e.code === 'ENOENT') {
					console.log('File not found! Create New File');
					fileExisted = false;
					
				} else {
					throw e;
				}
			}
		}
		
		if(fileExisted){
			//check existed
			var dataExisted = false;
			var playerArray = JSON.parse(data).Players;
			
			for(var j = 0; j < playerArray.length; j++){
				if(playerArray[j].summonerId === summonerId){
					dataExisted = true;
					
				}
			}
			
			if(!dataExisted){
				data = data.substring(0, data.length-2);
				data += ',';
				data += `{\"summonerName\": \"${summonerName}\", \"summonerId\": \"${summonerId}\"}`;
				data += ']}';
				
				if(JSON.parse(data)){
					console.log(`data with id ${summonerId} added to league json file ${path}`);
					fs.writeFileSync(path, data);
					numberOfnewEntryAdded++;
				}		
				else{
					console.log('parse failed');
				}
				
			}
			else{
				console.log("Data existed");
				numberOfexistedEntry++;
			}
		}
		else{
			data += '{\"Players\":[';
			data += `{\"summonerName\": \"${summonerName}\", \"summonerId\": \"${summonerId}\"}`;
			data += ']}';
			if(JSON.parse(data)){
				console.log(`data with id ${summonerId} added to league json file ${path}`);
				fs.writeFileSync(path, data);
				numberOfnewEntryAdded++;
			}
			else{
				console.log('parse failed');
			}
		}
		//console.log(`processed data: ${data}`);
	}
	console.log(`
	
		Total number of new entries: ${numberOfnewEntryAdded}
		Total number of existed entries: ${numberOfexistedEntry}
		Total number of entries: ${numberOfAllEntries}
	
	`);
};

getSummonerIdByName(summoner_name_original.toLowerCase(), getLeagueById);









