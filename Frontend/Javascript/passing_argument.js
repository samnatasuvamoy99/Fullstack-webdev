// passing a functional arguments

function sum ( a , b){
   return a + b;
}
function multiply( a , b){
          return a* b;
}
 function substract ( a , b){
    return a -b;
 }
  function divide( a, b){
     return a/b;
  }

  // apply arguments
  function doOperation( a ,b , op){
         return op( a ,b);
  }

  console.log(doOperation(2 ,4 , multiply));