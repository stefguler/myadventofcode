import { resourceLimits } from "worker_threads";

const {readFileSync, promises: fsPromises} = require('fs');

export function syncReadFile(filename: string): string[] {
  
  const contents = readFileSync(filename, 'utf-8');
  const arr: string[] = contents.split(/\r?\n/);
  
  console.log(arr); 
  
  return arr;
}