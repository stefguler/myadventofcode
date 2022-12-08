"use strict";
exports.__esModule = true;
var _00_readInput_1 = require("./00_readInput");
var rucksackItems = (0, _00_readInput_1.syncReadFile)('./day3File.txt');

//lets go...
var getRucksackDuplicate = function (compartements) {
    try {
        console.log("get duplicate compartements", compartements)
        var comparementsA = compartements[0].split('');
        var comparementsB_1 = compartements[1].split('');
        var intersection = comparementsA.filter(function (x) { return comparementsB_1.includes(x); });

        if (intersection.length !== 0) {
            console.log("intersection full: ", intersection);
            console.log("intersection: ", intersection[0]);
            return intersection[0];
        }
    }
    catch (_a) {
        console.log("something went badly wrong: ", compartements.length);
        return null;
    }
    // immplement what if nothing is there
    console.log("no intersection ", intersection);
    return null;
};
var getCompartements = function (items) {

    var mid = (items.length) / 2;
    var compartementLeft = items.slice(0, mid);
    var compratementRight = items.slice(mid, items.length);
    var comparements = [compartementLeft, compratementRight];
    console.log("compartements", comparements);
    return comparements;
};

var getRucksackDuplicateValue = function (duplicate) {
    console.log("duplicate ", duplicate)
    if (duplicate !== null) {
        if (duplicate === duplicate.toUpperCase()) {
            var score = duplicate.charCodeAt(0) - 38;
            console.log("score:", score);
            return score;
        }
        else {
            var score = duplicate.charCodeAt(0) - 96;
            console.log("score:", score);
            return score;
        }
    }
    else {

        return 0;
    }
};
var runProgramm = function (rucksackItems) {
    var result = 0;
    console.log(rucksackItems.length)
    for (var i = 0; i < rucksackItems.length; i++) {
        console.log("rucksack position: ", i)
        console.log("rucksack: ", rucksackItems[i])
        var score = getRucksackDuplicateValue(getRucksackDuplicate(getCompartements(rucksackItems[i])));
        result += score;
        console.log("result after iteration: ", result)
    }
    console.log(result);
    return result;
};

runProgramm(rucksackItems);