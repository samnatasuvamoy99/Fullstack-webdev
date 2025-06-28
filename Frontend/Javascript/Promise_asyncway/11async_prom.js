
    function promisfn( resolve){
             let c = 0;
                for( let i =0 ; i <  10000000000 ;  i++){
                   c++;
                }
                resolve("hi there suvamoy samanta ");
    }

 const p = new Promise(promisfn);

     function callback (){
              console.log(" this the asyn operation  for promise without settimeout fn ");
     }

 p.then(callback);