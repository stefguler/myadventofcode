import { syncReadFile } from "./00_readInput";

const gamesList: string[] = syncReadFile('./day2File.txt');

console.log(gamesList)

const evaluateScore = (input: string[]): number => {

  let result: number = 0;
  
  for (let i = 0; i < input.length; i++) {
    
    let gamescore: number = evaluateGamescore(input[i]);
    let shape: string = evaluateShape(input[i]);
    let handscore: number = evaluateHandscore(shape);
    result += (handscore + gamescore);
  }
  console.log("result: ", result)
  return result;
}

const evaluateShape = (input: string): string => {

  switch (input[2]) {
    //loss
    case "X": 
      if (input[0] === "A") {
        return "Z"
      } else if (input[0] === "B") {
        return "X"
      } else if (input[0] === "C") {
        return "Y"
      }
    //draw
    case "Y":
      if (input[0] === "A") {
        return "X"
      } else if (input[0] === "B") {
        return "Y"
      } else if (input[0] === "C") {
        return "Z"
      }
    //win
    case "Z":
      if (input[0] === "A") {
        return "Y"
      } else if (input[0] === "B") {
        return "Z"
      } else if (input[0] === "C") {
        return "X"
      }
    default: return "";
  }

}

const evaluateHandscore = (input: string): number => {
  let score: number = 0;

  switch (input) {
    case "X": score = 1;
      break;
    case "Y": score = 2;
      break;
    case "Z": score = 3;
      break;
    default: -1;
  }
  return score
}

const evaluateGamescore = (input: string): number => {

  switch (input[2]) {
    case "X": return 0;
    case "Y": return 3;
    case "Z": return 6;
    default: return -1;
  }

}

evaluateScore(gamesList);