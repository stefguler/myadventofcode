"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
var rucksackItems = (0, _00_readInput_1.syncReadFile)('./day3File.txt');
//lets go...
var getRucksackDuplicate = function (compartements, position) {
    try {
        var comparementsA = compartements[0].split('');
        var comparementsB_1 = compartements[1].split('');
        var intersection = comparementsA.filter(function (x) { return comparementsB_1.includes(x); });
        if (intersection !== undefined) {
            return intersection.join('')[0];
        }
    }
    catch (_a) {
        throw new Error("Intersection problem in finding intersection for compartements ".concat(compartements, ". Please review at position ").concat(position));
    }
    throw new Error("Intersection problem. No duplicate has been found which should not be possible. Please review ".concat(compartements, " at position ").concat(position));
};
var getCompartements = function (items, position) {
    try {
        var mid = (items.length) / 2;
        var compartementLeft = items.slice(0, mid);
        var compartementRight = items.slice(mid, items.length);
        var comparements = [compartementLeft, compartementRight];
        return comparements;
    }
    catch (_a) {
        throw new Error("compartement problem. Something went wrong spliting the comparements on ".concat(items, ". Please review at position: ").concat(position));
    }
};
var getRucksackDuplicateValue = function (duplicate, position) {
    try {
        if (duplicate !== null) {
            if (duplicate === duplicate.toUpperCase()) {
                var score = duplicate.charCodeAt(0) - 38;
                return score;
            }
            else {
                var score = duplicate.charCodeAt(0) - 96;
                return score;
            }
        }
        else {
            return 0;
        }
    }
    catch (_a) {
        throw new Error("Problem finding duplicate value for duplicate ".concat(duplicate, ". Please review data at position ").concat(position));
    }
};
var runProgramm = function (rucksackItems) {
    var result = 0;
    for (var i = 0; i < rucksackItems.length; i++) {
        var score = getRucksackDuplicateValue(getRucksackDuplicate(getCompartements(rucksackItems[i], i), i), i);
        result += score;
    }
    console.log(result);
    return result;
};
runProgramm(rucksackItems);
