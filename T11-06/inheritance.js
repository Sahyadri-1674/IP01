class Car {
    constructor(brand) {
      this.carname = brand;
    }
    getCar() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.getCar() + ',the model name is ' + this.model;
    }
  }
  
  let myCar = new Model("Honda", "City");
  console.log(myCar.show());




  function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  let person1 = new Person('Prasad','Arote',20)
  console.log(person1.name());