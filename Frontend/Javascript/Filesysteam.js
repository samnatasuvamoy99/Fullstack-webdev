let fs = require("fs"); // fs is a extranal libary search google node js fs


const contents= fs.readFileSync("a.txt" , "utf-8") //byte , hex
console.log(contents);

// read two file
 const read2 = fs.readFileSync("b.txt" , "utf8");
 console.log(read2);
