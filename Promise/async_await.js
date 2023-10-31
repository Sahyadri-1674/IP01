//async always returns a promise.
//Even if you return suppose a string then too the async function will wrap this value (string here) inside a promise and return a promise.

//async await are used to handle Promises.

// async function getData(){
//   return "Hello"
// }

// const dataPromise = getData();
// dataPromise.then(res => console.log(res));


//************   await */
//await can only be used in async function.

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("Promise 1 resolved");
    },10000);
}) ;

