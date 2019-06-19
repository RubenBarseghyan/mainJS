//JavaScript Factory Functions vs Constructor Functions vs Classes

//class

class Car {
  drive(){
    console.log('I drive method of class');
  }
}

let car = new Car();
car.drive();//I drive
console.log(car, 'object created class');

//Constructor
function ConstructorCar(){}
ConstructorCar.prototype.drive = function(){
  console.log('i drive method of function Cunstruction added by prototype');
}

let carConst = new ConstructorCar();
carConst.drive();
console.log(carConst, 'object created by function Constructor');

// factory
const proto = {
  drive(){
    console.log('method drive of object proto');
  }
}

function factoryCar(){
  return Object.create(proto)
}

const carFactory = factoryCar();
carFactory.drive();
console.log(carFactory, 'object creted by function factory which retun object');

//In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory function.

const person1 = {
  name:'ruben',
  age: 15,
  saySome(){
    console.log('hello ruben')
  }
}

console.log(person1, 'person1');


const person2 = Object.create(person1);//new object generate from the object which mention in parametr
//new empty object __proto__refers to persin 1
console.log(person2, 'person2');
console.log(person2 instanceof person1);


// instanceof is a prototype identity check.
// NOT a type check.

// That means it lies across execution contexts,
// when prototypes are dynamically reassigned,
// and when you throw confusing cases like this
// at it:

function foo() {}
const bar = { a: 'a'};

foo.prototype = bar;

// Is bar an instance of foo? Nope!
console.log(bar instanceof foo); // false

// Ok... since bar is not an instance of foo,
// baz should definitely not be an instance of foo, right?
const baz = Object.create(bar);

// ...Wrong.
console.log(baz instanceof foo); // true. oops.
