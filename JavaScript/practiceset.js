1. Hoisting – 5 Questions

1.
  
console.log(a);
var a = 10;

2
console.log(name);
let name = "Neha";

3

display();

function display() {
    console.log("Hello Students");
}

4
console.log(x);
const x = 50;

5

var a = 10;

function test() {
    console.log(a);
    var a = 20;
}

test();

2. Scope – 5 Questions

1

let name = "Rahul";

function student() {
    console.log(name);
}

student();

2

function display() {
    let age = 22;
}

display();
console.log(age);

3

var a = 10;

if (true) {
    var a = 30;
}

console.log(a);

4

let a = 10;

if (true) {
    let a = 50;
    console.log(a);
}

console.log(a);

5

let city = "Bangalore";

function student() {
    let name = "Neha";
    console.log(city);
    console.log(name);
}

student();

3. Global, Function & Block Scope – 5 Questions

Q11. Global Scope

let college = "ABC College";

function display() {
    console.log(college);
}

display();
console.log(college);

Q12. Function Scope

function employee() {
    var salary = 25000;
    console.log(salary);
}

employee();
console.log(salary);

Q13. Block Scope

if (true) {
    let age = 25;
    console.log(age);
}

console.log(age);

Q14. Identify the output.

  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
console.log(b);
console.log(c);



1

let x = 100;

function test() {
    let y = 200;

    if (true) {
        let z = 300;
        console.log(x);
        console.log(y);
        console.log(z);
    }
}

test();

4. this Keyword – 5 Questions

1

let student = {
    name: "Neha",

    display: function() {
        console.log(this.name);
    }
};

student.display();

2

let employee = {
    name: "Rahul",
    age: 25,

    details: function() {
        console.log(this.age);
    }
};

employee.details();

3

let car = {
    brand: "BMW",

    show: function() {
        console.log(this.brand);
    }
};

car.show();

4

let person = {
    name: "Amit",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

person.greet();

5

let mobile = {
    brand: "Samsung",
    price: 20000,

    details: function() {
        console.log(this.brand);
        console.log(this.price);
    }
};

mobile.details();



