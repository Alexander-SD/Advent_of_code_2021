import {calculateSubmarinePosition} from './calculateSubmarinePosition';
import {puzzleInput} from './puzzleInput';

const submarinePosition = calculateSubmarinePosition(puzzleInput);

console.log(`Position of the submarine is ${submarinePosition}`);