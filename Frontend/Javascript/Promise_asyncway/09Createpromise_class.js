
class promise2 {
            constructor(fn){
                  function afterDone(){
                     this.resolve();
                  }
                  fn(afterDone)
            }
            then(callback){
                this.resolve=callback;
            }
}  // this the main thing of the promise under the hood how promise work 

function readTheFile(resolve){
       setTimeout(function(){
            console.log( " callback based settimeout completed");
            resolve();
       } ,3000)
}

function setTimeoutPromisified(){
          return new promise2(readTheFile)
}

  let p = setTimeoutPromisified();
        function callback(){
            console.log("calback has been called");
        }

        p.then(callback);