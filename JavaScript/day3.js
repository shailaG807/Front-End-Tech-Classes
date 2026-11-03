JavaScript – Statements, Loops, Error Handling, Objects & Operators
1. JavaScript statements
"A statement is an instruction given to JavaScript to perform an action."
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
You are eligible to vote

Else if
Used when we have multiple conditions.

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 35) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

Output: Grade B
Explain: JavaScript checks conditions from top to bottom and executes the first matching block.
3. Loops and iteration
"A loop is used to execute the same block of code multiple times. Iteration means repeating an action or going through items one by one."
A. For loop
Use when we know how many times we want to repeat something.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
Output:
1
2
3
4
5
Explain the three parts:
- let i = 1 – starting point.
- i <= 5 – condition.
- i++ – increase by 1.
B. While loop
Repeats while the condition is true.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
Output: 1, 2, 3, 4, 5.
C. Do...while loop
Executes the code at least once, then checks the condition.
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
D. For...of loop
Used to go through array values.
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
Apple
Banana
Mango



Quick comparison
Loop	When to use
for	When the number of repetitions is known
while	Repeat while a condition is true
do...while	Execute at least once
for...of	Go through array values

4. Exception handling
"Sometimes errors happen while a program is running. Exception handling helps us handle those errors without suddenly stopping the whole program."
A. try
Contains the code that may cause an error.
B. catch
Runs when an error occurs in the try block.
C. finally
Runs whether an error occurs or not.
try {
    console.log("Start");

    let result = 10 / 0;

    console.log(undefinedVariable);

} catch (error) {
    console.log("Something went wrong");
} finally {
    console.log("Program completed");
}
output
Start
Something went wrong
Program completed
D. throw
Used to create our own error when a condition is not satisfied.
let age = 15;

try {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    console.log("Eligible");

} catch (error) {
    console.log(error.message);
}
output
Age must be 18 or above

Explain simply:
- try – try this code.
- catch – handle the error.
- finally – execute this at the end.
- throw – create an error ourselves.

5. JavaScript objects and properties
"An object is used to store related information about one thing in a single variable."

Real-life example: A student has a name, age, course and city.
let student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript",
    city: "Bangalore"
};

console.log(student);
Accessing object properties
Explain: Properties are the information stored inside an object.
console.log(student.name);
console.log(student.age);
console.log(student.course);

Updating and adding properties
student.age = 23;

student.email = "rahul@gmail.com";

console.log(student);

Objects and methods
"A method is a function stored inside an object."
let student = {
    name: "Rahul",
    course: "JavaScript",

    introduce: function() {
        console.log("Hello, my name is " + this.name);
    }
};

student.introduce();

Explain:
- introduce is a method.
- this.name refers to the name property of the current object.

6. JavaScript operators
"Operators are symbols used to perform operations on values and variables."
A. Basic operators
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

Operator	Meaning
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Remainder
**	Power


B. Assignment operators
Used to assign or update values.
let marks = 50;

marks += 10;

console.log(marks); // 60
Explain: marks += 10 means marks = marks + 10.
Operator	Meaning
=	Assign
+=	Add and assign
-=	Subtract and assign
*=	Multiply and assign
/=	Divide and assign

C. Comparison operators
Used to compare two values. The result is true or false.
let a = 10;
let b = 20;

console.log(a > b);  // false
console.log(a < b);  // true
console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true

Important difference:
console.log(5 == "5");  // true
console.log(5 === "5"); // false

Explain:
- == compares values after possible type conversion.
- === compares value and data type.

D. Logical operators

Used to combine conditions.

| Operator | Meaning |
|---|---|
| && | AND – both conditions must be true |
| || | OR – at least one condition must be true |
| ! | NOT – reverses the result |

let age = 22;
let hasID = true;

console.log(age >= 18 && hasID);

E. Bitwise operators – basic introduction
"Bitwise operators work with the binary (0 and 1) representation of numbers."
Operator	Name
&	AND
\|	OR
^	XOR
~	NOT
<<	Left shift
>>	Right shift

console.log(5 & 1);
console.log(5 | 1);
You can tell them that bitwise operators are used in lower-level number and bit operations. No need to go deeply into binary calculations in this beginner class.

  F. Ternary operator
"The ternary operator is a short way of writing a simple if/else condition."

condition ? valueIfTrue : valueIfFalse;

let age = 20;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

output: Eligible

Explain:
- If the condition is true, the first value is selected.
- Otherwise, the second value is selected.







