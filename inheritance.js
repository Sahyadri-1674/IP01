
class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    introduce(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Student extends Person {
    constructor(name,age,branch,clg){
        super(name,age);
        this.branch = branch
        this.clg = clg
    }

    getEducation(){
        console.log(`I am studying in ${this.clg} and my branch is ${this.branch}`);
    }
}


const p1 = new Person('Ajay',21);
p1.introduce();

const s1 = new Student('Atul',20,'IT','TSEC');
s1.introduce();
s1.getEducation();