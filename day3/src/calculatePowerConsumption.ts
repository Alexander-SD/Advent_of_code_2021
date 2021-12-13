export const calculatePowerConsuption = (input: string) => {
    const inputArray: string[] = input.split(' ');
    let buffer: any;
    let countZeros: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let countOnes: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let gammaRate: string = '';
    let epsilonRate: string = '';

    // Calculating counters
    for (let i = 0; i < inputArray.length; i++) {
        buffer = inputArray[i];
        for (let b = 0; b < buffer.length; b++) {
            if (buffer[b] === '0') {
                countZeros[b]++;
            } else if (buffer[b] === '1') {
                countOnes[b]++;
            }
        }
    }

    for (let z = 0; z < countZeros.length; z++) {
        for (let n = 0; n < countOnes.length; n++) {
            if (n === z) {
                if (countZeros[z] > countOnes[n]) {
                    gammaRate = gammaRate.concat('', '1');
                    epsilonRate = epsilonRate.concat('', '0');
                } else {
                    gammaRate = gammaRate.concat('', '0');
                    epsilonRate = epsilonRate.concat('', '1');
                }
            }
        }
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}