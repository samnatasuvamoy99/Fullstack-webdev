// print a file asyn nature
// it is a javascript asyn  code

let fs = require("fs"); // fs is a extranal libary search google node js fs
 
function print( err , data){
        if( err){
           // err=> there was an error readfile this file
            // status => 201,file not found 
             // metadata:{ permission "define"};
             
           console.log("file not found");
        }
        else{
           console.log(data);
        }
}

fs.readFile("a.txt" , "utf-8" , print) //byte , hex
 // asynchonously 

// print two file
 fs.readFile("b.txt" , "utf8" , print);// asynchonously 
  
 console.log("done!")


// how readfile function reprents........
function readFile( filepath , encoding , op){
         // read file 
         op("Error!" ,"a.txt -> print under you written")
}
