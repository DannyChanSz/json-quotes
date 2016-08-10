var jsonQuotes =require('./');


console.log(jsonQuotes('{"title":"Where is the "sp" office?","time1":"07-07-2015","time2":"08-15","from":"Web"}'))

console.log(jsonQuotes('{"title":"Where is the \"sp\" office?","time1":"07-07-2015","time2":"08-15","from":"Web"}'))