#json-quotes

Parse the quotes(") that in json string content to '\"';

Some json string like: '"title":"Where is the "sp" office?"' 
parse to:'"title":"Where is the \"sp\" office?"' 

##Usage

###Install

npm install json-quotes --save

###Use

	var jsonQuotes=require('json-quotes');
	console.log(jsonQuotes('{"title":"Where is the "sp" office?","time1":"07-07-2015","time2":"08-15","from":"Web"}'))

	console ---> {"title":"Where is the \"sp\" office?","time1":"07-07-2015","time2":"08-15","from":"Web"}