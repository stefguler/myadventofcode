import { syncReadFile } from "./00_readInput";

const pairList: string[] = syncReadFile("./day4File.txt");

const getSections = (pairList: string): number[][] => {

//split the string info into sections
const pairs: string[] = pairList.split(",");
const firstSections: string[] = pairs[0].split("-");
const secondSections: string[] = pairs[1].split("-");

//create two new arrays to use the include functions later
const firstArr: number[] = [];
const secondArr: number[] = [];

for (
  let i: number = parseInt(firstSections[0]);
  i <= parseInt(firstSections[1]);
  i++
) {
  firstArr.push(i);
}

for (
  let i: number = parseInt(secondSections[0]);
  i <= parseInt(secondSections[1]);
  i++
) {
  secondArr.push(i);
}

//push both arrays in a new array with first & second array
const sections: number[][] = [firstArr, secondArr]

return sections

}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {

    const intersection = arr1.filter(x => arr2.includes(x));
    return intersection

};


const isAlreadyCovered = (arr1: number[], arr2: number[]): boolean => {

  let notIncludedFound: boolean = false;
  
  for (let i:number = arr2[0]; i <= arr2.at(-1); i++) {

    if (!arr1.includes(i)) {
      notIncludedFound = true;
      break;
    }
  }

  if (!notIncludedFound) return true
  
    for (let i:number = arr1[0]; i <= arr1.at(-1); i++) {
      if (!arr2.includes(i)) {
        return false;
      }
    }

    return true

};

const runProgram = (list: string[]) => {
  let result: number = 0;

  for (let i:number = 0; i<list.length; i++) {
    const sections: number[][] = getSections(list[i])
    const hasIntersection: boolean = getIntersection(sections[0], sections[1]).length > 0
    hasIntersection ? result++ : result;
  }

  console.log(result);
  return result;

}

runProgram(pairList);
