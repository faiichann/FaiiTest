import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

const minValue = (input:number[]) => {
    let minSum : number = 0;
    let indexCheck: number;
    const maxNum = Math.max(input[0],input[1],input[2],input[3],input[4]);
    for (let i=0; i<5; i++){
        indexCheck = input[i];
        if(indexCheck != maxNum){
            minSum = minSum + indexCheck;
        }
    }
return minSum;
}

const maxValue = (input:number[]) => {
    let maxSum : number = 0;
    let indexCheck: number;
    const minNum = Math.min(input[0],input[1],input[2],input[3],input[4]);
    for (let i=0; i<5; i++){
        indexCheck = input[i];
        if(indexCheck != minNum){
            maxSum = maxSum + indexCheck;
        }
    }
return maxSum;
}

let arrayInput: number[] = [];

const inputArrayNumber = () => {
    rl.question("Input array of number :", function (answer) {

      while (arrayInput.length === 5) {
        return console.log(minValue(arrayInput), maxValue(arrayInput))
      }
        arrayInput.push(parseInt(answer))
        console.log("Your Array Is :" + arrayInput)
        inputArrayNumber();
    });
  };

  inputArrayNumber()