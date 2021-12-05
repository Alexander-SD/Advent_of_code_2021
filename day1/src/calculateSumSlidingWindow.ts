export const calculateSumSlidingWindows = (input: string) => {
    const inputArray: string[] = input.split(' ');
    const outputArray: number[] = [];
    let countOfIncreases: number = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
        outputArray[i] = parseInt(inputArray[i])
        if (i > 2) {
            if ((outputArray[i - 2] + outputArray[i - 1] + outputArray[i]) 
            > (outputArray[i - 3] + outputArray[i - 2] + outputArray[i - 1])) {
                countOfIncreases++;
            }
        }
    }
    
    return countOfIncreases;
}