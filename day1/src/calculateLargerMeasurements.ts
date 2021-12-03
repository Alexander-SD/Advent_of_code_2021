export const calculateLargerMeasurements = (input: string) => {
    const inputArray: string[] = input.split(' ');
    const outputArray: number[] = [];
    let countOfIncreases: number = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
        outputArray[i] = parseInt(inputArray[i])
        if (i > 0) {
            if (outputArray[i] > outputArray[i - 1]) {
                countOfIncreases++
            }
        }
    }
    
    return countOfIncreases;
}