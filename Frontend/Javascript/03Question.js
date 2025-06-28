   function setTimeoutSync(timeout){
           let startTime= new Date();
           while(1){
                 let currentTime = new Date();
                 if ( currentTime.getTime() - startTime.getTime() > timeout){
                     break;
                 }
           }
   }
   setTimeoutSync(1000);
   console.log("suvamoy samanta")   // this is not a asyn js it is a syn js mind it loop will be working  in callsatk then print  callback queue satck into the web Apis;;;;;;