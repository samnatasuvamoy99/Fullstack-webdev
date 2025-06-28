   function  setTimeoutPromisified( duration){
         return new Promise( function(resolve){
                setTimeout( resolve , duration);
                 // settimeout => promisified settimeout fn
         }); 
   }

    function callback( ){
           console.log(" Hi my name  is suvamoy ")
    }
   setTimeoutPromisified( 2000) . then(callback);