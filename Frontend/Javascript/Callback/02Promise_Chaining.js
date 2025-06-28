// promise chaining

 function setTimeoutPromisified ( duration){
           return new Promise( function (resolve){
                    setTimeout( resolve , duration)
           });
 }

 setTimeoutPromisified( 1000 ). then(function(){
       console.log(" HI");

       return setTimeoutPromisified(2000) . then( function(){
              console.log(" My name is suvamoy samanta");

              return setTimeoutPromisified( 3000). then( function(){

                 console.log("Currently studying B.tech in CSE");
              })
        })        
 })
 