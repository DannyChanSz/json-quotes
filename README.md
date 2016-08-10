#json-quotes

For these unescaped double quote in property value of json, escape it by using escape character "\".

处理JSON属性值中未转义的双引号

From: '"title":"Where is the "sp" office?"' 

To:'"title":"Where is the \"sp\" office?"' 

##Usage

###Install

npm install json-quotes --save

###Use

	var jsonQuotes=require('json-quotes');
	console.log(jsonQuotes('{"title":"Where is the "sp" office?","time1":"07-07-2015","time2":"08-15","from":"Web"}'))

	console ---> {"title":"Where is the \"sp\" office?","time1":"07-07-2015","time2":"08-15","from":"Web"}