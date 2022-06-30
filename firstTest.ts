import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

let arrayInput: number[] = [];

function findResult(array: number[], value: number) {
  let result: string[] = []
  for (let i = 0; i < array.length ; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] == value) {
        result.push(`${array[i]} + ${array[j]}`);
      }
    }
  }

return console.log(result.length !== 0 ? `Pair found is: ${result}, sum: ${value}` : "Pair not found")
}

const inputArrayNumber = () => {
  rl.question("Input array of number :", function (answer) {
    while (arrayInput.length === 4) {
      return outputAnswer()
    }
      arrayInput.push(parseInt(answer))
      console.log("Your Array Is :" + arrayInput)
      inputArrayNumber();
  });
};

const outputAnswer = () => {
  console.log("Your Array Is :" + arrayInput)
  console.log("---------------");
  rl.question("Input expect number : ", function (value) {
    console.log("---------------");
    console.log(findResult(arrayInput, parseInt(value) ));
    rl.close();
  });
}

inputArrayNumber();