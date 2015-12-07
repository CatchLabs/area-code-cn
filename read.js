
var fs = require('fs');
var path = require('path');
var raw = fs.readFileSync(path.join(path.dirname(__filename), 'a.txt')).toString();
var matches = [];
var regex = /\s*(.+?\s*\d+)/g;
var match = regex.exec(raw);
while (match) {
    matches.push(match[1]);
    match = regex.exec(raw);
}
var result = {};
matches.forEach(function (v, k) {
    var s = /(.+?)\s*(\d+)/.exec(v);
    result[s[1]] = '+' + parseInt(s[2]);
});

console.log(result);
fs.writeFileSync('unordered_area_code.json', JSON.stringify(result));

