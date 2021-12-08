import fs from 'fs';
import { calculatePowerConsuption } from './calculatePowerConsumption';


fs.readFile('puzzleInput.txt', 'utf8', (err, data) => {
    if (err) throw err
    else {
        const puzzleInput = data.replace(/\n/g, ' ');

        const powerConsumption = calculatePowerConsuption(puzzleInput);

        console.log(`Power Consumption of the submarine is ${powerConsumption}`);
    }
});

