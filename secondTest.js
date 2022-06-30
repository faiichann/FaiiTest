"use strict";
exports.__esModule = true;
var readline = require("node:readline");
var process_1 = require("process");
var rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
var minValue = function (input) {
    var minSum = 0;
    var indexCheck;
    var maxNum = Math.max(input[0], input[1], input[2], input[3], input[4]);
    for (var i = 0; i < 5; i++) {
        indexCheck = input[i];
        if (indexCheck != maxNum) {
            minSum = minSum + indexCheck;
        }
    }
    return minSum;
};
var maxValue = function (input) {
    var maxSum = 0;
    var indexCheck;
    var minNum = Math.min(input[0], input[1], input[2], input[3], input[4]);
    for (var i = 0; i < 5; i++) {
        indexCheck = input[i];
        if (indexCheck != minNum) {
            maxSum = maxSum + indexCheck;
        }
    }
    return maxSum;
};
var arrayInput = [];
var inputArrayNumber = function () {
    rl.question("Input array of number :", function (answer) {
        while (arrayInput.length === 5) {
            return console.log(minValue(arrayInput), maxValue(arrayInput));
        }
        arrayInput.push(parseInt(answer));
        console.log("Your Array Is :" + arrayInput);
        inputArrayNumber();
    });
};
inputArrayNumber();
