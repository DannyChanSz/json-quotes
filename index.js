/*!
 * forwarded
 * Copyright(c) 2016 Danny Chan
 * MIT Licensed
 */


'use strict';

let jsonQuotes = function(json) {

    let n = json.length;
    let temp = new Array(n);
    

    for (let i = 0; i < n; i++) {
    	temp[i]=json[i];
    }

    for (let i = 0; i < n; i++) {
        if (temp[i] == ':' && temp[i + 1] == '"') {
            for (let j = i + 2; j < n; j++) {
                if (temp[j] == '"') {
                    if (temp[j + 1] != ',' && temp[j + 1] != '}'&& temp[j - 1] != '\\') {
                        temp[j] = '\\"';
                    } else if (temp[j + 1] == ',' || temp[j + 1] == '}') {
                        break;
                    }
                }
            }
        }
    }

    return temp.join("");

}



module.exports = jsonQuotes;
