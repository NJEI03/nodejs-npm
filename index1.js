const generateSillyName=require("sillyname");
const fs= require("fs");
const readLine=require("readline");
const sillyName= generateSillyName();
// console.log(sillyName)
console.log(" WELCOME TO SILLY NAME GENERATOR")


const inputOutput = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
})
inputOutput.question("What is your name?\n", (name)=>{
    console.log(`Hey ${name}, your silly name is ${sillyName}`)
})
