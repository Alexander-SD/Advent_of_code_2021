"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLargerMeasurements = void 0;
const calculateLargerMeasurements = (input) => {
    const inputArray = input.split(' ');
    const outputArray = [];
    let countOfIncreases = 0;
    for (let i = 0; i < inputArray.length; i++) {
        outputArray[i] = parseInt(inputArray[i]);
        if (i > 0) {
            if (outputArray[i] > outputArray[i - 1]) {
                countOfIncreases++;
            }
        }
    }
    return countOfIncreases;
};
exports.calculateLargerMeasurements = calculateLargerMeasurements;
