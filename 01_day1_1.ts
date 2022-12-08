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

  let max: number = 0;
  let sum: number = 0;

  for (let i:number = 0; i < input.length; i++) {


    if (input[i] !== "") {
      sum += parseInt(caloriesList[i]);

    } else {
      console.log("sum after TT: ", sum)
      if (sum > max) max = sum;
      sum = 0;
      console.log("new max: ", max)
    }
  }
  
  console.log("result: ", sum);
  return max;
}

getMaxCalories(caloriesList);



