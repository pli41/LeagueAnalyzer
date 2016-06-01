var fs = require('fs');

function MyJSON2CSV(obj,parent_name,rownum,colname,id){
	var csvPath = `../PlayerData/CSV/${parent_name}.csv`;
	var newdata = '';
	if(obj.constructor == Array){
		var data = '';
		try{
			data = fs.readFileSync(csvPath).toString();
			//console.log(data);
		} catch(e) {
			if(e instanceof Error){
				if (e.code === 'ENOENT') {
					fileExisted = false;
				} else {
					throw e;
				}
			}
		}
		var row_count = data.split('\r\n').length - 1;
		var start_row = (row_count-2>0)?(row_count-2):0;
		for(var i = 0; i < obj.length; i++){
			newdata = MyJSON2CSV(obj[i],parent_name,start_row++,colname,id);
		}
	} else if(obj && typeof obj === 'object'){
		var fileExisted = true;
		var write_in;
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				var data = '';
				var val = obj[key];
			    console.log(val,key,parent_name,rownum,colname,id);
			    if(val.constructor == Array || (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean')){
					if(val.constructor == Array){
						var new_id = (Math.random()+1).toString(36).substr(2, 5);
						write_in = new_id;
					} else {
						write_in = val;
					}
					//add col in current csv
					try{
						data = fs.readFileSync(csvPath).toString();
						//console.log(data);
					} catch(e) {
						if(e instanceof Error){
							if (e.code === 'ENOENT') {
								fileExisted = false;
							} else {
								throw e;
							}
						}
					}
					if(!fileExisted){
						data = `${parent_name}\r\n${id}\r\n`;
						try{
							fs.writeFileSync(csvPath, data);
						} catch(e) {
							if(e instanceof Error){
								if (e.code === 'ENOENT') {
									fileExisted = false;
								} else {
									throw e;
								}
							}
						}
						console.log("The file was saved!"); 
						fileExisted = true;
					}
					var rowidx = 0;
					var prev_rowEnd = -2;
					var track_rowStart;
					var track_rowEnd;
					var track_indx;
					var track_rownum;
					var track_colname;
					var inject;
					var rowEnd = data.search('\r\n');
					var head_str = data.substring(0,rowEnd);
					var head = head_str.split(',');
					var head_length = head.length;
					var content = data.substring(rowEnd+2);
					rowEnd = content.search('\r\n');
					var newcontent = content;
					if(!rownum){
						track_rownum = 0;
					} else {
						track_rownum = rownum;
					}
					if(!colname){
						track_colname = key;
					} else {
						track_colname = colname + '_' + key;
					}
					if(head.indexOf(track_colname)==-1){
						head_str += `,${track_colname}\r\n`;
					} else {
						head_str += '\r\n';
						track_indx = head.indexOf(track_colname);
					}
					while(content.search('\r\n') != -1){
						//console.log("writing content");
						//rowEnd = content.search('\r\n');
						if(head.indexOf(track_colname)==-1){
							if(rowidx == track_rownum){
								inject = `,${write_in}`;
								newcontent = newcontent.substring(0,rowEnd) + inject + newcontent.substring(rowEnd);
								rowEnd += inject.length;
								track_rowStart = prev_rowEnd+2;
								track_rowEnd = rowEnd;
								var row = newcontent.substring(track_rowStart,track_rowEnd).split(',');
								row[0] = (row[0]=="")?id:row[0];
								inject = row.join(',');
								newcontent = newcontent.substring(0,track_rowStart) + inject + newcontent.substring(track_rowEnd);
								rowEnd += inject.length;
							} else {
								//console.log('add ,');
								newcontent = newcontent.substring(0,rowEnd) + ',' + newcontent.substring(rowEnd);
								rowEnd += 1;
							}
						} else {
							track_rowStart = prev_rowEnd+2;
							track_rowEnd = rowEnd;
							var row = newcontent.substring(track_rowStart,track_rowEnd).split(',');
							if(row.length < head_length){
								for(var i=0;i<head_length-row.length-1;i++){
									newcontent = newcontent.substring(0,rowEnd) + ',' + newcontent.substring(rowEnd);
									rowEnd += 1;
								}
							}
							if(rowidx == track_rownum){
								console.log(rowidx,track_rownum);
								row[0] = (row[0]=="")?id:row[0];
								row[track_indx] = write_in;
								inject = row.join(',');
								newcontent = newcontent.substring(0,track_rowStart) + inject + newcontent.substring(track_rowEnd);
								rowEnd += inject.length;
							}
						}
						prev_rowEnd = rowEnd;						
						content = newcontent.substring(rowEnd+2);
						rowEnd = rowEnd + 2 + content.search('\r\n');
						rowidx += 1;
					}
					//console.log(head_str);
					///console.log(newcontent);
					newdata = head_str + newcontent;
					try{
							fs.writeFileSync(csvPath, newdata);
						} catch(e) {
							if(e instanceof Error){
								if (e.code === 'ENOENT') {
									fileExisted = false;
								} else {
									throw e;
								}
							}
						}
					console.log("The file was saved!"); 
					if(val.constructor == Array){
						MyJSON2CSV(val,track_colname,null,null,new_id);
					} else {
						//return;
						//continue;
					}	
				} else if(val && typeof val === 'object'){
					var newcolname = colname?(colname + '_' + key):(key);
					newdata = MyJSON2CSV(val,parent_name,rownum,newcolname,id);
				} else {
					console.log("undefined or null");
				}
			}
		}
		console.log("Row END"); 
		try{
			if(newdata.slice(-4) != '\r\n\r\n'){
				fs.writeFileSync(csvPath, newdata + '\r\n');
			} else { 
				fs.writeFileSync(csvPath, newdata);
			}
		} catch(e) {
			if(e instanceof Error){
				if (e.code === 'ENOENT') {
					fileExisted = false;
				} else {
					throw e;
				}
			}
		}
	} else {
		console.log("undefined or null or primitive");
	}
	return newdata;
}


var jsontorun = fs.readFileSync(`match_timeline.json`).toString();
var combinedMatchString = '{\"match\":[' + jsontorun + ']}';
//var matchJsontorun = JSON.parse(combinedMatchString);
var matchJsontorun = JSON.parse(jsontorun);
MyJSON2CSV(matchJsontorun,'main',null,null,0)
console.log("DONE");