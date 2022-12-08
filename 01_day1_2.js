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
    var sumArray = [];
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== "") {
            sum += parseInt(caloriesList[i]);
        }
        else {
            sumArray.push(sum);
            sum = 0;
        }
    }
    sumArray.sort().reverse();
    console.log("resultArr: ", sumArray);
    var result = sumArray.slice(2, 5).reduce(function (a, b) { return a + b; });
    console.log("result: ", result);
    return result;
};
getMaxCalories(caloriesList);
