"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
var rucksackItems = (0, _00_readInput_1.syncReadFile)('./day3File.txt');
//lets go...
//throw new Error(`Problem finding duplicate value for duplicate ${duplicate}. Please review data at position ${position}`);
var makeGroups = function (rucksackItems) {
    var newGroup = [];
    var groupArray = [];
    var counter = 0;
    for (var i = 0; i < rucksackItems.length; i++) {
        try {
            if (counter < 3) {
                newGroup.push(rucksackItems[i]);
                counter++;
            }
            else {
                groupArray.push(newGroup);
                newGroup = [rucksackItems[i]];
                counter = 1;
            }
        }
        catch (_a) {
            throw new Error("Problem in grouping. Check at at iteration ".concat(i, ". Current newGroup: ").concat(newGroup, ", existing groupArray: ").concat(groupArray));
        }
    }
    groupArray.push([rucksackItems.at(-1), rucksackItems.at(-2), rucksackItems.at(-3)]);
    return groupArray;
};
var getIntersection = function (rucksackGroup) {
    var arr1Split = rucksackGroup[0].split('');
    var arr2Split = rucksackGroup[1].split('');
    var arr3Split = rucksackGroup[2].split('');
    var intersectionOfTwo = arr1Split.filter(function (x) { return arr2Split.includes(x); });
    var intersectionOfThree = intersectionOfTwo.filter(function (x) { return arr3Split.includes(x); });
    return intersectionOfThree[0];
};
var getIntersectionValue = function (intersection, position) {
    try {
        if (intersection === intersection.toUpperCase()) {
            return intersection.charCodeAt(0) - 38;
        }
        else {
            return intersection.charCodeAt(0) - 96;
        }
    }
    catch (_a) {
        throw new Error("Problem finding duplicate value for duplicate ".concat(intersection, ". Please review data at position ").concat(position));
    }
};
var runProgramm = function (rucksackItems) {
    var result = 0;
    var rucksackGroups = makeGroups(rucksackItems);
    rucksackGroups.forEach(function (elements, idx) {
        result += getIntersectionValue(getIntersection(elements), idx);
    });
    console.log(result);
    return result;
};
runProgramm(rucksackItems);
