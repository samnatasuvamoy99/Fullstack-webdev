// how to declaration arrow fun ........


   //function sum ( a,  b){
   // return a + b;
//}  //this the normal function declaration  


// arrow function 

/*
const sum  = ( a, b) =>{
     return a + b;
}

const ans = sum ( 1 ,2);
console.log(ans); 
  */


   // given  an array , give me back a new array in which every value is multiplied by 2,

   //[ 1, 2 ,3 ,4 ,5 ,6]
   //[2,4 ,6,8,10,12]
/*
   const input=[ 1, 2 ,3 ,4 ,5 ,6]

   //solution
   const newArray=[];

   for ( let i=0 ; i < input.size ; i++){
      newArray.push(input[i] * 2);
   }
   
   console.log(newArray);*/

   
   // other solution
     const input=[ 1, 2 ,3 ,4 ,5 ,6]

   function transformation (i){
         return i * 2;
   }
   
   const ans = input.map(transformation);
   console.log(ans);

