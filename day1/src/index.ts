import {calculateLargerMeasurements} from './calculateLargerMeasurements';
import { calculateSumSlidingWindows } from './calculateSumSlidingWindow';
import {puzzleInput} from './puzzleInput';

const largerMeasurments = calculateLargerMeasurements(puzzleInput);
const sumSlidingWindows = calculateSumSlidingWindows(puzzleInput);

console.log(`Count of larger measurements is ${largerMeasurments}`);
console.log(`Count of larger sums of sliding windows is ${sumSlidingWindows}`);