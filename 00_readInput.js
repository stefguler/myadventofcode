"use strict";
exports.__esModule = true;
exports.syncReadFile = void 0;
var _a = require('fs'), readFileSync = _a.readFileSync, fsPromises = _a.promises;
function syncReadFile(filename) {
    var contents = readFileSync(filename, 'utf-8');
    var arr = contents.split(/\r?\n/);
    console.log(arr);
    return arr;
}
exports.syncReadFile = syncReadFile;
