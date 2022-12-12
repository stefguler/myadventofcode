"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
//load data
var list = (0, _00_readInput_1.syncReadFile)("./day6File.txt");
var runProgram = function (list) {
    var left = 0;
    var right = 0;
    var current_string = "";
    while (right < list.length - 1) {
        if (current_string.length === 4) {
            console.log(right);
            return right;
        }
        if (current_string.includes(list[right])) {
            current_string = "";
            left += 1;
            right = left;
        }
        else {
            current_string += list[right];
            right += 1;
        }
    }
};
// runProgram("bvwbjplbgvbhsrlpgdmjqwftvncz");
// runProgram("nppdvjthqldpwncqszvftbrmjlhg");
// runProgram("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")
// runProgram("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")
runProgram(list[0]);
