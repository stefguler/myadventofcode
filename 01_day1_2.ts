import { resourceLimits } from "worker_threads";

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename: string): string[] {
  
  const contents = readFileSync(filename, 'utf-8');
  const arr: string[] = contents.split(/\r?\n/);
  
  console.log(arr); 
  
  return arr;
}

const caloriesList: string[] = syncReadFile('./day1File.txt');

const getMaxCalories = (input: string[]): number => {

  let sumArray: number[] = [];
  let sum: number = 0;

  for (let i:number = 0; i < input.length; i++) {


    if (input[i] !== "") {
      sum += parseInt(caloriesList[i]);

    } else {
      sumArray.push(sum);
      sum = 0;
    }
  }
  
  sumArray.sort().reverse();
  console.log("resultArr: ", sumArray);
  let result: number = sumArray.slice(2, 5).reduce(function (a, b) { return a + b; });
  console.log("result: ", result)
  return result;
}

getMaxCalories(caloriesList);



