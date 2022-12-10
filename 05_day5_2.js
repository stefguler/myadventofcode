"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
//load data
var list = (0, _00_readInput_1.syncReadFile)("./day5File.txt");
//create the shipload object with the shipload interface logic
var shipload = {
    1: ["B", "P", "N", "Q", "H", "D", "R", "T"],
    2: ["W", "G", "B", "J", "T", "V"],
    3: ["N", "R", "H", "D", "S", "V", "M", "Q"],
    4: ["P", "Z", "N", "M", "C"],
    5: ["D", "Z", "B"],
    6: ["V", "C", "W", "Z"],
    7: ["G", "Z", "N", "C", "V", "Q", "L", "S"],
    8: ["L", "G", "J", "M", "D", "N", "V"],
    9: ["T", "P", "M", "F", "Z", "C", "G"]
};
var runProgram = function (list, load) {
    var amount;
    var from;
    var to;
    var init = getLastCratesString(load);
    for (var i = 0; i < list.length; i++) {
        if (list[i][6] !== " ") {
            amount = parseInt(list[i][5] + list[i][6]);
            from = parseInt(list[i][13]);
            to = parseInt(list[i][18]);
        }
        else {
            amount = parseInt(list[i][5]);
            from = parseInt(list[i][12]);
            to = parseInt(list[i][17]);
        }
        moveCrates(amount, from, to, load);
    }
    var result = getLastCratesString(load);
    console.log(result);
    return result;
};
//move crates logic to move the a certain amount of crates from lot x to another lot y
var moveCrates = function (amount, from, to, load) {
    load[to] = load[to].concat(load[from].splice(-amount, amount));
    return load;
};
// concat last items of each lot to the result string
var getLastCratesString = function (load) {
    var lastCratesString = "";
    for (var element in load) {
        lastCratesString = lastCratesString + load[element].at(-1);
    }
    return lastCratesString;
};
runProgram(list.slice(10), shipload);
