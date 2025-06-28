// promisified  version  of read  file here .........

 const fs = require("fs");
  console.log("-------top of the file----------")

function readTheFile(sendTheFinalValueHere ,senderror){
            console.log("readthefile called")
           // do u thing , whenever u have the final value , call senthevaluehere("finalvalue");
        fs.readFile("acopy.txt" , "utf-8", function(err , data){
                if(err){
                        senderror(err);
                }
                else{
                    sendTheFinalValueHere(data);  
                }
               
        })
           
  }

  
  function readFile(){
       // read the fileand return its value
        console.log("setTheFinalvalueHere is called ")
          return new Promise( function( resolve , reject){
                readTheFile(resolve,reject);
          });
  }

  const p = readFile();

  function callback( contents){
          console.log(contents);
  }
  p.then(callback);

  //eventually callback move  into the readFile function obj... under the hood....