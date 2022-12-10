"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
var pairList = (0, _00_readInput_1.syncReadFile)("./day4File.txt");
var getSections = function (pairList) {
    //split the string info into sections
    var pairs = pairList.split(",");
    var firstSections = pairs[0].split("-");
    var secondSections = pairs[1].split("-");
    //create two new arrays to use the include functions later
    var firstArr = [];
    var secondArr = [];
    for (var i = parseInt(firstSections[0]); i <= parseInt(firstSections[1]); i++) {
        firstArr.push(i);
    }
    for (var i = parseInt(secondSections[0]); i <= parseInt(secondSections[1]); i++) {
        secondArr.push(i);
    }
    //push both arrays in a new array with first & second array
    var sections = [firstArr, secondArr];
    return sections;
};
var getIntersection = function (arr1, arr2) {
    var intersection = arr1.filter(function (x) { return arr2.includes(x); });
    return intersection;
};
var isAlreadyCovered = function (arr1, arr2) {
    var notIncludedFound = false;
    for (var i = arr2[0]; i <= arr2.at(-1); i++) {
        if (!arr1.includes(i)) {
            notIncludedFound = true;
            break;
        }
    }
    if (!notIncludedFound)
        return true;
    for (var i = arr1[0]; i <= arr1.at(-1); i++) {
        if (!arr2.includes(i)) {
            return false;
        }
    }
    return true;
};
var runProgram = function (list) {
    var result = 0;
    for (var i = 0; i < list.length; i++) {
        var sections = getSections(list[i]);
        var hasIntersection = getIntersection(sections[0], sections[1]).length > 0;
        hasIntersection ? result++ : result;
    }
    console.log(result);
    return result;
};
runProgram(pairList);
