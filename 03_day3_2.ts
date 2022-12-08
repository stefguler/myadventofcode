import { syncReadFile } from "./00_readInput";

const rucksackItems: string[] = syncReadFile('./day3File.txt');

//lets go...
//throw new Error(`Problem finding duplicate value for duplicate ${duplicate}. Please review data at position ${position}`);

const makeGroups = (rucksackItems: string[]): string[][] => {

  let newGroup: string[] = [];
  let groupArray: string[][] = [];
  let counter: number = 0;
  for (let i: number = 0; i < rucksackItems.length; i++) {

    try {
      if (counter < 3) {
        newGroup.push(rucksackItems[i]);
        counter++;
      } else {
        groupArray.push(newGroup);
        newGroup = [rucksackItems[i]];
        counter = 1;
      }

    } catch {

      throw new Error(`Problem in grouping. Check at at iteration ${i}. Current newGroup: ${newGroup}, existing groupArray: ${groupArray}`);
    }
  }

  groupArray.push([rucksackItems.at(-1), rucksackItems.at(-2), rucksackItems.at(-3)])
  return groupArray;
}

const getIntersection = (rucksackGroup: string[]): string => {
  
  const arr1Split: string[] = rucksackGroup[0].split('');
  const arr2Split: string[] = rucksackGroup[1].split('');
  const arr3Split: string[] = rucksackGroup[2].split('');
  const intersectionOfTwo: string[] = arr1Split.filter(x => arr2Split.includes(x));
  const intersectionOfThree: string[] = intersectionOfTwo.filter(x => arr3Split.includes(x));
  return intersectionOfThree[0];

}

const getIntersectionValue = (intersection: string, position: number): number => {
  try {
      if (intersection === intersection.toUpperCase()) {
        return intersection.charCodeAt(0) - 38;
      } else {
        return intersection.charCodeAt(0) - 96;       
      }
  } catch {

    throw new Error(`Problem finding duplicate value for duplicate ${intersection}. Please review data at position ${position}`);

  }
}


const runProgramm = (rucksackItems: string[]): number => {
  let result: number = 0;
  const rucksackGroups: string[][] = makeGroups(rucksackItems)

  rucksackGroups.forEach((elements: string[], idx:number) => {
    result += getIntersectionValue(getIntersection(elements), idx)
  });
  console.log(result);
  return result;
  
}


runProgramm(rucksackItems);
