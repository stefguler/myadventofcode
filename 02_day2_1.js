"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
var gamesList = (0, _00_readInput_1.syncReadFile)('./day2File.txt');
console.log(gamesList);
var evaluateScore = function (input) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        var handscore = evaluateHandscore(input[i][2]);
        var gamescore = evaluateGamescore(input[i]);
        result += (handscore + gamescore);
    }
    console.log("result: ", result);
    return result;
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
    var score = 0;
    switch (input[0]) {
        case "A":
            if (input[2] === "Y") {
                score = 6;
            }
            else if (input[2] === "X") {
                score = 3;
            }
            else if (input[2] === "Z")
                score = 0;
            break;
        case "B":
            score = 2;
            if (input[2] === "Y") {
                score = 3;
            }
            else if (input[2] === "X") {
                score = 0;
            }
            else if (input[2] === "Z")
                score = 6;
            break;
        case "C":
            score = 3;
            if (input[2] === "Y") {
                score = 0;
            }
            else if (input[2] === "X") {
                score = 6;
            }
            else if (input[2] === "Z")
                score = 3;
            break;
        default: -1;
    }
    return score;
};
evaluateScore(gamesList);
