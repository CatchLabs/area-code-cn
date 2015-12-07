
var fs = require('fs');
var path = require('path');
var json1 = require('./unordered_area_code.json');
var json2 = require('./area_code_key.json');

var result;
result = json2.map(function (v) {
    return {
        area: v, 
        area_code: json1[v]
    };
});
console.log(result);
fs.writeFileSync('area_code.json', JSON.stringify(result));

