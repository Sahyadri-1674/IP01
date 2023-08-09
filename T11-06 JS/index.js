//loops 

let student = {
    name:"Prasad",
    course:"BE",
    branch:"IT"
}

for(let k in student){
    console.log("Keys:"+k);
}

let arr = [1,2,3,4]
let sqr = []
function func(value){
    sqr.push(value*value);
}
arr.forEach(func)

for(let v of sqr){
    console.log(v);
}

let dept = ["IT","Comps","Extc"]

for(let i =0;i<dept.length;i++){
    console.log(dept[i]);
}

let j = 1;
while(j<5){
    console.log(j)
    j++;
}

//Conditional Statements 
const n1 = 44

if(n1%2==0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}

let age = 20
age>18?console.log("You are eligible to drive"):console.log("You are not eligible to drive");




//Functions 

const greet = (person="Human") => {
    console.log("Hello "+person)
}
greet('Prasad')

const Sqr = n => n*n
console.log(Sqr(4))

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));

let show = function() {
    console.log('Anonymous function');
};

show();

const colours = ['red','yellow','purple','blue','green']

const changeColor = () => {
    // var randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = colours.shift();
    document.body.style.backgroundColor = color;
    colours.push(color)
}
setInterval(changeColor,5000)