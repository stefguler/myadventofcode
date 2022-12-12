import { syncReadFile } from "./00_readInput";

//load data
const list: string[] = syncReadFile("./day6File.txt");

const runProgram = (list: string) => {
  let left: number = 0;
  let right: number = 0;
  let current_string: string = "";

  while (right < list.length - 1) {
    if (current_string.length === 14) {
      console.log(right);
      return right;
    }

    if (current_string.includes(list[right])) {
      current_string = "";
      left += 1;
      right = left;
    } else { 
      current_string += list[right];
      right += 1;
    }
  }
};

// runProgram("bvwbjplbgvbhsrlpgdmjqwftvncz");
// runProgram("nppdvjthqldpwncqszvftbrmjlhg");
// runProgram("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")
// runProgram("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")
// runProgram("mjqjpqmgbljsphdztnvjfqwrcgsmlb")
// runProgram("bvwbjplbgvbhsrlpgdmjqwftvncz")
runProgram("nppdvjthqldpwncqszvftbrmjlhg")
runProgram(list[0]);
