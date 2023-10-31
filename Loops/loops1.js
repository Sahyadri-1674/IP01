

let obj1 = {
    username:"prasad",
    email:"prasadarote27@gmail.com",
    branch:"IT",
    clg:"TSEC"
}

let arr1 = [10,20,30,40,50];

// for(let key in obj1){
//     console.log(key,": ",obj1[key]);
// }

// for(let i in arr1){
//     console.log(i);
// }

// for(let val of arr1){
//     console.log(val);
// }

console.log(Object.keys(obj1));
for(let key of Object.keys(obj1)){
    console.log(key);
}

