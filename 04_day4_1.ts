import { syncReadFile } from "./00_readInput";

const pairList: string[] = syncReadFile('./day4File.txt')


let result:number = 0;

const pairs: string[] = pairList[0].split(',')
const firstSections: string[] = pairs[0].split('-')
const secondSections: string[] = pairs[1].split('-')

const firstArr: number[] = [];
const secondArr: number[] = [];


for (let i:number = parseInt(firstSections[0]); i<=  parseInt(firstSections[1]); i++ ) {
  firstArr.push(i)
}

for (let i:number = parseInt(secondSections[0]); i<=  parseInt(secondSections[1]); i++ ) {
  secondArr.push(i)
}

const intersection = firstArr.filter(x => secondArr.includes(x))




console.log("pairs", pairs)
console.log("first arr: ", firstArr)
console.log("second arr: ", secondArr)
console.log("intersection: ", intersection)