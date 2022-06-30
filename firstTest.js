"use strict";
exports.__esModule = true;
var readline = require("node:readline");
var process_1 = require("process");
var rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
var arrayInput = [];
function findResult(array, value) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == value) {
                result.push("".concat(array[i], " + ").concat(array[j]));
            }
        }
    }
    return console.log(result.length !== 0 ? "Pair found is: ".concat(result, ", sum: ").concat(value) : "Pair not found");
}
var inputArrayNumber = function () {
    rl.question("Input array of number :", function (answer) {
        while (arrayInput.length === 4) {
            return outputAnswer();
        }
        arrayInput.push(parseInt(answer));
        console.log("Your Array Is :" + arrayInput);
        inputArrayNumber();
    });
};
var outputAnswer = function () {
    console.log("Your Array Is :" + arrayInput);
    rl.question("Input expect number : ", function (value) {
        console.log("---------------");
        console.log(findResult(arrayInput, parseInt(value)));
        console.log("---------------");
        rl.close();
    });
};
inputArrayNumber();
