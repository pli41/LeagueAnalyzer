var https = require('https');
var fs = require('fs');
var json2csv = require('json2csv');
var path = require('path');
var MyJSON2CSV = require("./MyJSON2CSV.js");

var summoner_name_original = "Andybendy";
var summoner_id = '';

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2",'55c0033d-23b5-4cb6-8104-e0d5311073b2'];

var matchIntervalTime = 500;
var playerIntervalTime = 15000;
var requestCount = 0;

var getSummonerIdByName = function(name, callback1){
		var summoner_name_escaped= encodeURI(name);
		var jsonData = "";
		var options_ID = {
			host: "na.api.pvp.net",
			path: `/api/lol/na/v1.4/summoner/by-name/${summoner_name_escaped}?api_key=${apiKey[0]}`,
			method: "GET"
		};
		
		var request_ID_response ='';
		var request_ID = https.request(options_ID, function(response){
			response.on("data", function(data){
				//console.log(`Data Received: ${data}`);
				request_ID_response += data;
			});
			
			response.on("end", function(){
				console.log("request ID ends");
				console.log(`request ID response: ${request_ID_response}`);
				jsonData = JSON.parse(request_ID_response);
				MyJSON2CSV.MyJSON2CSV(jsonData,'SummonerIdByName',null,null,null);
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
		return jsonData;
	};

var getLeagueById = function(){
	var options = {
		host: "na.api.pvp.net",
		path: `/api/lol/na/v2.5/league/by-summoner/${summoner_id}?api_key=${apiKey[0]}`,
		method: "GET"
	};
		
	//https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/24229424
		
	var responseBody ='';
	var request = https.request(options, function(response){
		response.on("data", function(data){
			//console.log(`Data Received: ${data}`);
			responseBody += data;
		});
		
		response.on("end", function(){
			console.log("request league ends");
			jsonData = JSON.parse(responseBody);
			MyJSON2CSV.MyJSON2CSV(jsonData,'leagueByID',null,null,null);
		});
	});

	request.end();
	request.on("error", function(err){
		console.log(`request ID error: ${err}`);
	});
}


getSummonerIdByName(summoner_name_original.toLowerCase(), getLeagueById);









