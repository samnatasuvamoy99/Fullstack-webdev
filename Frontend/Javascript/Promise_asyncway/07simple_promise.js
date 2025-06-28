function random(resolve) { // resolve is also a function 
          setTimeout(resolve, 3000); // affter 3s resolve funtion print with out settimeout resolve print with out no time out ............
}

let p = new Promise(random);// promise mean supposed to return u something eventually
 





// using the eventual value returned by the promise 
function callback(){
        console.log("promise succed ");
}

p.then( callback); // when promise is ended then call back then 