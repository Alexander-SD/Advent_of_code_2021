"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateLargerMeasurements_1 = require("./calculateLargerMeasurements");
const puzzleInput_1 = require("./puzzleInput");
const result = (0, calculateLargerMeasurements_1.calculateLargerMeasurements)(puzzleInput_1.puzzleInput);
console.log(`Count of larger measurements is ${result}`);
