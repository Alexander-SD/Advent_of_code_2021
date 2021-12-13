export const calculateLifeSupportRating = (input: string) => {
    let buffer: any;
    let countZeros: number[];
    let countOnes: number[];
    let oxygenGeneratorRating: string[] = input.split(' ');;
    let co2ScrubberRating: string[] = input.split(' ');;

    // Calculating Oxygen Generator Rating
    for (let x = 0; oxygenGeneratorRating.length > 0; x++) {
        if (oxygenGeneratorRating.length === 1) break;

        countZeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        countOnes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // Calculating counters
        for (let i = 0; i < oxygenGeneratorRating.length; i++) {
            buffer = oxygenGeneratorRating[i];
            for (let b = 0; b < buffer.length; b++) {
                if (buffer[b] === '0') {
                    countZeros[b]++;
                } else if (buffer[b] === '1') {
                    countOnes[b]++;
                }
            }
        }

        for (let z = 0; z < countZeros.length; z++) {
            if (z === x) {
                for (let n = 0; n < countOnes.length; n++) {
                    if (n === z) {
                        if (countZeros[z] > countOnes[n]) {
                            oxygenGeneratorRating = oxygenGeneratorRating.filter((input: string) => {
                                for (let i = 0; i < input.length; i++) {
                                    return input[x] === '0' && true;
                                }
                            });
                        } else if (countOnes[n] > countZeros[z] || countOnes[n] === countZeros[z]) {
                            oxygenGeneratorRating = oxygenGeneratorRating.filter((input: string) => {
                                for (let i = 0; i < input.length; i++) {
                                    return input[x] === '1' && true;
                                }
                            })
                        }
                        if (x === 0) {
                            if (countZeros[z] < countOnes[n] || countZeros[z] === countOnes[n]) {
                                co2ScrubberRating = co2ScrubberRating.filter((input: string) => {
                                    for (let i = 0; i < input.length; i++) {
                                        return input[x] === '0' && true;
                                    }
                                });
                            } else if (countOnes[n] < countZeros[z]) {
                                co2ScrubberRating = co2ScrubberRating.filter((input: string) => {
                                    for (let i = 0; i < input.length; i++) {
                                        return input[x] === '1' && true;
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    }

    // Calculating CO2 Scrubber Rating
    for (let x = 0; co2ScrubberRating.length > 0; x++) {
        if (co2ScrubberRating.length === 1) break;

        countZeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        countOnes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // Calculating counters
        if (x > 0) {
            for (let i = 0; i < co2ScrubberRating.length; i++) {
                buffer = co2ScrubberRating[i];
                for (let b = 0; b < buffer.length; b++) {
                    if (buffer[b] === '0') {
                        countZeros[b]++;
                    } else if (buffer[b] === '1') {
                        countOnes[b]++;
                    }
                }
            }
            //

            for (let z = 0; z < countZeros.length; z++) {
                if (z === x) {
                    for (let n = 0; n < countOnes.length; n++) {
                        if (n === z) {
                            if (countZeros[z] < countOnes[n] || countOnes[n] === countZeros[z]) {
                                co2ScrubberRating = co2ScrubberRating.filter((input: string) => {
                                    for (let i = 0; i < input.length; i++) {
                                        return input[x] === '0' && true;
                                    }
                                });
                            } else if (countOnes[n] < countZeros[z]) {
                                co2ScrubberRating = co2ScrubberRating.filter((input: string) => {
                                    for (let i = 0; i < input.length; i++) {
                                        return input[x] === '1' && true;
                                    }
                                })
                            }
                        }
                    }
                }
            }
        }
    }

    return parseInt(oxygenGeneratorRating.toString(), 2) * parseInt(co2ScrubberRating.toString(), 2);
}