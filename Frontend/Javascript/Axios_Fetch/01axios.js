// it will handle api request the backend  in the server
// it will handle api request
// axios and fetch

/*
function main(){
     fetch("https://jsonplaceholder.typicode.com/todos/").then(async(response)=>{
             const json = await response.json() ;   // it will call promise then convert async using await.
             console.log(json); // await responce .text();
     })
}
main() // call the function
*/

// another method

//post methid

 async function main(){
       const response = await fetch("https://jsonplaceholder.typicode.com/todos/"
      )
      
             const json = await response.json() ;   // it will call promise then convert async using await.
             console.log(json); // await responce .text();
     }

main() 


// using axois call ... it is a external laibrary very smart 
const axios = require('axios')  // this the declaration of axois
async function main(){
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
              // responce the data
             console.log(response.data); // Logs the fetched todo list (array of objects)
     }

main() 
