import { syncReadFile } from "./00_readInput";

//load data
const list: string[] = syncReadFile("./day7File.txt");


const runProgram = (list: string[]) => {
  let dirArr: any[][] = [];
  let dirArrPos: number = 0;
  let current_dir_name: string;
  let current_dir: object;

  for(let i:number=0; i<list.length; i++) {
    console.log(list[i])

    if (list[i].slice(0,4) === "$ cd") {
      current_dir_name = list[i].slice(5);
      dirArrPos++;
      if (dirArrPos > dirArr.length && current_dir_name !== "..") dirArr.push([current_dir_name, 0 ])
      console.log("current dir arr: ", dirArr)
      console.log("moved $ cd to ", current_dir_name)
    } else if (list[i].slice(0,4) === "$ ..") {
      dirArrPos--;
      current_dir = dirArr[dirArrPos]
      console.log("moved $ cd .. to ", current_dir)
    }
    else if (Number.isInteger(parseInt(list[i]))){
      let size:number = parseInt(list[i].split(" ")[0]);
      dirArr[dirArrPos-1][1] += size;
      console.log("size enlarged: ", size)
      console.log("current dir size: ", dirArr[dirArrPos-1])
    }

  }

};

runProgram(list.slice(0, 100));
