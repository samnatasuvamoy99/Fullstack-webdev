    // the real operation that we want to promisify
    function doAsynOp(resolve){
                setTimeout( resolve , 3000); // first arguments that you created call this into the callback function in the settimeout fun....
                   // and it is a old , callback based async function....
    }
   
   function setTimeoutPromisified (){
            return  new Promise(doAsynOp);
   }

   const p = setTimeoutPromisified(); // p is proxy into the asyn fun 

   function callback(){
            console.log(" This the mean under the hood how to promise work ")
   }


   p.then(callback)  // under the hood resolve  call callback funtion .....