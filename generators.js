

function * genFunc(){

    console.log("Before yield 1")

    yield 1;

    console.log("before yield 2 and after yield 1");

    let x =  yield 2;

    console.log("x:",x);

    console.log("before yield 3 and after yield 2");

    yield 3;

}

const myFun = genFunc();

console.log(myFun.next());
console.log(myFun.next());
console.log(myFun.next(6));
console.log(myFun.next());