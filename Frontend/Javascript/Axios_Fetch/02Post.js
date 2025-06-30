// post
const axios = require('axios');
async function main(){
//request config

       const response = await  axios.get("https://httpdump.app/dumps/494dca00-d7ef-4880-8b88-a331f93e7776",{
    
         headers:{ // handel the error

         "Authorization":" Bearer 123 "
         },
       },
      );
      
               // it will call promise then convert async using await.
             console.log(response.data); // await responce .text();
     }

main() 



// other method POST 
//change request method
// send body 
// send header or error
// 
 /*
const axios = require('axios')  // this the declaration of axois
async function main(){
       const response = await axios.post("https://httpdump.app/dumps/494dca00-d7ef-4880-8b88-a331f93e7776",{

         username:"suavmoy samanta", //body
            password:"12344", //body

         headers:{ // handel the error

         "Authorization":" Bearer 123 "
         } 
})
              // responce the data
             console.log(response.data); // Logs the fetched todo list (array of objects)
     }

main();
*/


// get request you can not send the body]
 // post request you can send the body



 