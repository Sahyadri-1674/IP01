//  *** 
//Function Statement aka Function Declaration

function Hello(){
    console.log("Hello")
}


// ***
//Function Expression 

const sum = function (a,b){  // a,b => PARAMETERS
    return a+b;
}

console.log(sum(2,3));
// console.log(add(2,3)); // ReferenceError 



//ANONYMOUS FUNCTION 
// function () {

// }

//Name Function Expression 
const multiply = function mult(a,b){
    return a*b;
}


//Object Constructor 
function Student(name,age,branch){
    this.name = name,
    this.age = age,
    this.branch = branch
}

let stud1 = new Student("Prasad",20,"IT")
stud1.clg = "TSEC"
stud1.getName = function(){
    return stud1.name;
}
console.log(stud1);
console.log(stud1.clg);
console.log(stud1.getName());


//Callback functions

const calculator = (num1,num2,operation) => {
    return operation(num1,num2);
}

const addition = (num1,num2) => {
    return num1+num2;
}

console.log(calculator(2,1,addition))


//Higher Order Functions

let radius = [1,2,3,4];

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

Array.prototype.calculate = function(logic) {
    let output = [];

    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }

    return output;
}


console.log(radius.calculate(area));
console.log(radius.calculate(circumference));




