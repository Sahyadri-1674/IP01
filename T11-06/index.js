const arr = [12,23,34,45]

let myIter = arr[Symbol.iterator]();

console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());

console.log(" ")
function * genFunc(){
    console.log("Before yield1");
    yield 1
    console.log("After yield 1 and before yield 2");
    yield 2 
    console.log("before final yield")
    yield "Finished"
}

const generator = genFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

