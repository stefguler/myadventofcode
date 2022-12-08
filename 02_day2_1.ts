import { syncReadFile } from "./00_readInput";

const gamesList: string[] = syncReadFile('./day2File.txt');

console.log(gamesList)

const evaluateScore = (input: string[]): number => {

  let result: number = 0;

  for (let i = 0; i < input.length; i++) {

    let handscore: number = evaluateHandscore(input[i][2]);
    let gamescore: number = evaluateGamescore(input[i]);
    result += (handscore + gamescore);
  }
  console.log("result: ", result)
  return result;
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
  let score: number = 0;

  switch (input[0]) {
    case "A":
      if (input[2] === "Y") {
        score = 6;
      } else if (input[2] === "X") {
        score = 3;
      } else if (input[2] === "Z")
        score = 0;
      break;
    case "B": score = 2;
      if (input[2] === "Y") {
        score = 3;
      } else if (input[2] === "X") {
        score = 0;
      } else if (input[2] === "Z")
        score = 6;
      break;
    case "C": score = 3;
      if (input[2] === "Y") {
        score = 0;
      } else if (input[2] === "X") {
        score = 6;
      } else if (input[2] === "Z")
        score = 3;
      break;
    default: -1;
  }

  return score
}

evaluateScore(gamesList);