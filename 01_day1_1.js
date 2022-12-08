"use strict";
exports.__esModule = true;
var _a = require('fs'), readFileSync = _a.readFileSync, fsPromises = _a.promises;
function syncReadFile(filename) {
    var contents = readFileSync(filename, 'utf-8');
    var arr = contents.split(/\r?\n/);
    console.log(arr);
    return arr;
}
var caloriesList = syncReadFile('./day1File.txt');
var getMaxCalories = function (input) {
    var max = 0;
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== "") {
            sum += parseInt(caloriesList[i]);
        }
        else {
            console.log("sum after TT: ", sum);
            if (sum > max)
                max = sum;
            sum = 0;
            console.log("new max: ", max);
        }
    }
    console.log("result: ", max);
    return max;
};
getMaxCalories(caloriesList);
