import { syncReadFile } from "./00_readInput";

const rucksackItems: string[] = syncReadFile('./day3File.txt');

//lets go...

const getRucksackDuplicate = (compartements: string[], position: number): string | null => {

  try {
    const comparementsA = compartements[0].split('')
    const comparementsB = compartements[1].split('')
    const intersection = comparementsA.filter(x => comparementsB.includes(x));

    if (intersection !== undefined) {
      return intersection.join('')[0];
    }

  } catch {

    throw new Error(`Intersection problem in finding intersection for compartements ${compartements}. Please review at position ${position}`);

  }

  throw new Error(`Intersection problem. No duplicate has been found which should not be possible. Please review ${compartements} at position ${position}`);

}

const getCompartements = (items: string, position: number): string[] => {

  try {
    const mid: number = (items.length) / 2;
    const compartementLeft = items.slice(0, mid);
    const compartementRight = items.slice(mid, items.length);
    const comparements: string[] = [compartementLeft, compartementRight]
    return comparements;
  }
  catch {
    throw new Error(`compartement problem. Something went wrong spliting the comparements on ${items}. Please review at position: ${position}`);

  }

}

const getRucksackDuplicateValue = (duplicate: string | null, position: number): number => {
  try {
    if (duplicate !== null) {
      if (duplicate === duplicate.toUpperCase()) {
        return duplicate.charCodeAt(0) - 38;
      } else {
        return duplicate.charCodeAt(0) - 96;
      }
    } else {
      return 0;
    }

  } catch {

    throw new Error(`Problem finding duplicate value for duplicate ${duplicate}. Please review data at position ${position}`);

  }
}

const runProgramm = (rucksackItems: string[]): number => {

  let result: number = 0;

  for (let i: number = 0; i < rucksackItems.length; i++) {
    let score: number = getRucksackDuplicateValue(getRucksackDuplicate(getCompartements(rucksackItems[i], i), i), i);
    result += score;
  }
  console.log(result)
  return result;

}

runProgramm(rucksackItems);

