// Installation Node.js v22.14.0, npm 10.9.2, code runner extention to see output in vs code.
// 1. How does JavaScript code execute?
//   JavaScript is a programming language. When we write JavaScript code, the JavaScript engine reads and executes our code."
//    three simple terms:
// - JavaScript Engine: The program that executes JavaScript.
// - Parsing: The engine reads the code and checks its structure and syntax.
// - Execution: The engine runs the instructions.

console.log("Start");

console.log("I am learning JavaScript");

console.log("End");

2. Variables in JavaScript
"A variable is like a box used to store data."
var name = "Rahul";

let age = 22;

const city = "Bangalore"; 

// (const city = "Bangalore";
// city = "Mysore"; // Error_

console.log(name);
console.log(age);
console.log(city);

// var Older way to declare variables
// let Value can be changed
// const Cannot be reassigned

// 3. Data types
// "Data types tell us what kind of value we are storing."
// String: "Hello"
// Number:  25, 99.5
// Boolean:  true, false
// Undefined: Variable declared without a value
// Null: Intentionally empty value
// Object:  {name: "Rahul"}

let name = "Rahul";
let age = 22;
let salary = 25000;
let isStudent = true;
let city;
let address = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);

// 4. Variable mutation and type coercion
// A. Variable mutation: Tell students: "Mutation here simply means changing the value stored in a variable."
let marks = 70;

marks = 85;

console.log(marks);

// B. Type coercion
// "Sometimes JavaScript automatically converts one data type into another. This is called type coercion."
console.log("10" + 5);
console.log("10" - 5);
console.log(10 + 5);

// "10" + 5 → string concatenation.
// "10" - 5 → JavaScript converts "10" into a number.
//  10 + 5 → normal addition.

// 5. Boolean logic
// "Boolean means only two possible values: true or false."
let age = 22;
console.log(age > 18); 
console.log(age < 18);
console.log(age == 22);

three logical operators:
 && = AND – both conditions must be true |
 || = OR – at least one condition must be true |
  ! =  NOT – reverses true/false |

let age = 22;
let hasID = true;

console.log(age >= 18 && hasID);
Explain: The person must be 18 or older AND have an ID.

  6. String built-in methods

"A string is a collection of characters. JavaScript provides built-in methods to work with strings."

let message = "Hello JavaScript";

Method	Example	Output
length = 	message.length	16
toUpperCase()= message.toUpperCase()	HELLO JAVASCRIPT
toLowerCase()= message.toLowerCase()	hello javascript
trim()= 	" Hello ".trim()	Hello
includes()= 	message.includes("Java")	true
slice()= 	message.slice(0, 5)	Hello
replace()= 	message.replace("Hello", "Hi")	Hi JavaScript


7. JavaScript arrays and operations
"An array is used to store multiple values in a single variable." & Array indexing starts from zero.

let shoppingList = ["Milk", "Bread", "Eggs", "Rice"];

console.log(shoppingList);

let fruits = ["Apple", "Banana", "Mango"];

Basic array operations

// Add at the end
fruits.push("Orange");

// Remove from the end
fruits.pop();

// Add at the beginning
fruits.unshift("Grapes");

// Remove from the beginning
fruits.shift();

// let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);

console.log(fruits.includes("Mango"));

console.log(fruits.indexOf("Banana"));

console.log(fruits);

Operation	Purpose
push() =	Add item at the end
pop()	= Remove last item
unshift() =	Add item at the beginning
shift() =	Remove first item
includes() =	Check whether an item exists
indexOf() =	Find an item's position
length	Count the items


8. Give students one small practical activity
Ask students to create a file called day1-practice.js.

  Task: Student Information

let studentName = "Anjali";
let age = 21;
let course = "JavaScript";
let isEnrolled = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Enrolled:", isEnrolled);

// Change the age
age = 22;

console.log("Updated Age:", age);

// Check age
console.log(age >= 18);

// String operations
console.log(studentName.toUpperCase());
console.log(studentName.length);

// Array operations
let subjects = ["HTML", "CSS", "JavaScript"];

subjects.push("React");

console.log(subjects);
console.log(subjects.length);



Ask them to change the name, age, course and subjects and observe the output.

  











