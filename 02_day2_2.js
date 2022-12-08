"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
var gamesList = (0, _00_readInput_1.syncReadFile)('./day2File.txt');
console.log(gamesList);
var evaluateScore = function (input) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        var gamescore = evaluateGamescore(input[i]);
        var shape = evaluateShape(input[i]);
        var handscore = evaluateHandscore(shape);
        result += (handscore + gamescore);
    }
    console.log("result: ", result);
    return result;
};
var evaluateShape = function (input) {
    switch (input[2]) {
        //loss
        case "X":
            if (input[0] === "A") {
                return "Z";
            }
            else if (input[0] === "B") {
                return "X";
            }
            else if (input[0] === "C") {
                return "Y";
            }
        //draw
        case "Y":
            if (input[0] === "A") {
                return "X";
            }
            else if (input[0] === "B") {
                return "Y";
            }
            else if (input[0] === "C") {
                return "Z";
            }
        //win
        case "Z":
            if (input[0] === "A") {
                return "Y";
            }
            else if (input[0] === "B") {
                return "Z";
            }
            else if (input[0] === "C") {
                return "X";
            }
        default: return "";
    }
};
var evaluateHandscore = function (input) {
    var score = 0;
    switch (input) {
        case "X":
            score = 1;
            break;
        case "Y":
            score = 2;
            break;
        case "Z":
            score = 3;
            break;
        default: -1;
    }
    return score;
};
var evaluateGamescore = function (input) {
    switch (input[2]) {
        case "X": return 0;
        case "Y": return 3;
        case "Z": return 6;
        default: return -1;
    }
};
evaluateScore(gamesList);
