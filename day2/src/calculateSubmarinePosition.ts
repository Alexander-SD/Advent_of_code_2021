import { Direction } from "./helpers";

export const calculateSubmarinePosition = (input: string) => {
    const inputArray: string[] = input.split(' ');
    let bufferArray: string[] = [];
    let horizontalPosition: number = 0;
    let depth: number = 0;
    let aim: number = 0;
    
    for (let i = 0; i < inputArray.length - 1; i = i + 2) {
        bufferArray = inputArray.slice(i, i + 2);  
        if (bufferArray[0] === Direction.Forward) {
            horizontalPosition = horizontalPosition + parseInt(bufferArray[1]);
            depth = depth + (horizontalPosition * aim);
        } else if (bufferArray[0] === Direction.Down) {
            aim = aim + parseInt(bufferArray[1]);
        } else if (bufferArray[0] === Direction.Up) {
            aim = aim - parseInt(bufferArray[1]);
        }
    }
    console.log(horizontalPosition, depth, aim);
    
    return horizontalPosition * depth;
}