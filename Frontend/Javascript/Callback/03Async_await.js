 function setTimeoutPromisified ( duration){
           return new Promise( function (resolve){
                    setTimeout( resolve , duration)
           });
 }

 async function  solve(){
       await setTimeoutPromisified(1000);
       console.log(" Hi");
       await setTimeoutPromisified(2000);
       console.log(" My name is suvamoy samanta");
       await setTimeoutPromisified(3000);
       console.log(" ooooo NOOOOOOOO");

 }

 solve();