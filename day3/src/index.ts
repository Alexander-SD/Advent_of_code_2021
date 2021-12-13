import fs from 'fs';
import { calculateLifeSupportRating } from './calculateLifeSupportRating';
import { calculatePowerConsuption } from './calculatePowerConsumption';


fs.readFile('puzzleInput.txt', 'utf8', (err, data) => {
    if (err) throw err
    else {
        const puzzleInput = data.replace(/\n/g, ' ');

        const powerConsumption = calculatePowerConsuption(puzzleInput);
        const lifeSupportRating = calculateLifeSupportRating(puzzleInput);

        console.log(`Power Consumption of the submarine is ${powerConsumption}`);
        console.log(`Life Support Rating of the submarine is ${lifeSupportRating}`);
    }
});

