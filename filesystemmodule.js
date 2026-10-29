const fs = require('node:fs');
fs.readFile('file.txt','utf8',(err,data)=>{
console.log(err,data)
})

const a = fs.readFileSync('file.txt') // Used when we intentionally want to block execution until the file is read.
console.log(a.toString())

fs.writeFile('file.txt',"This is a data",()=>{
    console.log("Written to the file")
})

fs.appendFile


console.log("finished  reading file")