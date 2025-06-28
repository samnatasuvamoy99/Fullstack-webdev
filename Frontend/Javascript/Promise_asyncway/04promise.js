//"A Promise in JavaScript is an object that represents the 
// eventual completion (or failure) of an asynchronous operation
//  and its resulting value. Promises are used to handle asynchronous
//  operations more effectively than traditional callback functions, providing a cleaner and more 
// manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers."
// "

// promisified version 

/*function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback) */


// another method make own settimeout obj..........
 function waitFor3S( resolve){
           setTimeout( resolve , 3000);
 }
 function main() {
        console.log("main is called")
 }

 waitFor3S(main)
