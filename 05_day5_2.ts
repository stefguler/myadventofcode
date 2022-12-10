import { syncReadFile } from "./00_readInput";

//load data
const list: string[] = syncReadFile("./day5File.txt");

//create interface for an object, that stores "crates" as values in an array that represents the storage lots as properties
interface Shipload {
  1: string[];
  2: string[];
  3: string[];
  4: string[];
  5: string[];
  6: string[];
  7: string[];
  8: string[];
  9: string[];
}

//create the shipload object with the shipload interface logic
const shipload: Shipload = {
  1: ["B", "P", "N", "Q", "H", "D", "R", "T"],
  2: ["W", "G", "B", "J", "T", "V"],
  3: ["N", "R", "H", "D", "S", "V", "M", "Q"],
  4: ["P", "Z", "N", "M", "C"],
  5: ["D", "Z", "B"],
  6: ["V", "C", "W", "Z"],
  7: ["G", "Z", "N", "C", "V", "Q", "L", "S"],
  8: ["L", "G", "J", "M", "D", "N", "V"],
  9: ["T", "P", "M", "F", "Z", "C", "G"],
};

const runProgram = (list: string[], load: Shipload) => {
  let amount: number;
  let from: number;
  let to: number;

  const init:string = getLastCratesString(load);

  for (let i: number = 0; i < list.length; i++) {
    if (list[i][6] !== " ") {
      amount = parseInt(list[i][5] + list[i][6]);
      from = parseInt(list[i][13]);
      to = parseInt(list[i][18]);
    } else {
      amount = parseInt(list[i][5]);
      from = parseInt(list[i][12]);
      to = parseInt(list[i][17]);
    }
    moveCrates(amount,from, to, load)
  }

  const result:string = getLastCratesString(load);
  console.log(result)
  return result

}

//move crates logic to move the a certain amount of crates from lot x to another lot y

const moveCrates = (amount:number, from:number, to:number, load:Shipload): Shipload => {
  load[to] = load[to].concat(load[from].splice(-amount, amount))
  return load
}

// concat last items of each lot to the result string
const getLastCratesString = (load:Shipload): string => {
  let lastCratesString: string = "";

  for (const element in load) {
    lastCratesString = lastCratesString + load[element].at(-1);
  }
  return lastCratesString;
};


runProgram(list.slice(10), shipload);
