// filtering
// what if i tell u , given an input array , give me back all the even value from it 

const arr =[ 1, 2, 3,4,5];/*
const newArry=[];

for( let i=0; i < arr.length ;i++){
      if ( arr[i] % 2 ==0){
            newArry.push(arr[i])
      }
}
console.log( newArry);
*/

//filter function we are learning 

//solution
/*
function filterlogic (n){
  if ( n % 2 ==0){
    return true;
  }
  else{
     return false;
  }
    
}

 const ans = arr.filter(filterlogic);
 console.log(ans);
 */

 //other method
   const ans =arr.filter((n)=>{
  if ( n % 2 ==0){
    return true;
  }
  else{
     return false;
  }
    
});
console.log(ans);
