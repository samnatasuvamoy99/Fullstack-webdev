function waitfor3s( resolve){ // resolve == main
              setTimeout( resolve ,3000);
}

function setTimeoutPromisified() {
       return new Promise(waitfor3s);
}

function main (){
           console.log("main is called")
}

setTimeoutPromisified() . then(main); // proimse based approach

setTimeout( main , 3000); // callback based approach