Part 1: String built-in methods

"A string is a collection of characters. JavaScript provides built-in methods to work with and manipulate strings."
let text = "Hello JavaScript";

1. charAt()
Returns the character at a particular position.
let name = "Rahul";

console.log(name.charAt(0));
console.log(name.charAt(2));
Explain: Position starts from 0.
2. charCodeAt()
Returns the Unicode number of a character.
  let letter = "A";

console.log(letter.charCodeAt(0));
Explain: Every character has a Unicode number. For example, capital A has the number 65.
3. concat()
Joins two or more strings.
  let firstName = "Rahul";
let lastName = "Kumar";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);

4. repeat()
Repeats a string the specified number of times.
  let word = "Hello ";

console.log(word.repeat(3));
5. includes()
Checks whether a particular word or character exists in a string.
  let message = "Welcome to JavaScript";

console.log(message.includes("JavaScript"));
console.log(message.includes("Python"));
6. match()
Finds matching text using a search pattern (regular expression).
  let message = "I love JavaScript";

console.log(message.match(/JavaScript/));
Explain: It finds the matching word in the string. If no match is found, it returns null.
  7. replace()
Replaces one word with another.
  let message = "I love Java";

console.log(message.replace("Java", "JavaScript"));
8. search()
Finds the position of a matching word or pattern.
  let message = "Hello JavaScript";

console.log(message.search("Java"));
Explain: It returns the starting position of the matching text. If it is not found, it returns -1.

Part 2: JavaScript Array methods
"An array stores multiple values in a single variable. Array methods help us add, remove, arrange and access those values."
let fruits = ["Apple", "Banana", "Mango"];
1. push()
Adds an item at the end of an array.
  fruits.push("Orange");

console.log(fruits);
2. pop()
Removes the last item from an array.
  fruits.pop();

console.log(fruits);
3. shift()
Removes the first item from an array.
  let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
4. unshift()
Adds an item at the beginning of an array.
  let fruits = ["Apple", "Banana", "Mango"];

fruits.unshift("Orange");

console.log(fruits);
5. splice()
Used to add, remove or replace items in an array.
  Example 1 – Remove an item:
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);
Explain:
- 1 means start at index 1 (Banana).
- Second 1 means remove one item.

  Example 2 – Add an item:let fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);
6. slice()
Used to take a portion of an array without changing the original array.
  let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
Explain:
- Start from index 1.
- Stop before index 3.
7. concat()
Joins two or more arrays.
  let boys = ["Rahul", "Arun"];
let girls = ["Priya", "Anjali"];

let students = boys.concat(girls);

console.log(students);
8. sort()
Arranges array items in order.
  Example – Alphabetical order:
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
Example – Numbers in ascending order:
let numbers = [40, 10, 100, 5];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);
For now, just tell students that the comparison function helps sort numbers correctly.
  9. Array iteration – forEach()
"Iteration means going through each item in an array one by one."
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
Explain:
- forEach() visits every item.
- fruit represents the current item.
- console.log() prints each item.










Quick revision table for students
String methods
Method	Simple meaning
charAt()	Get a character
charCodeAt()	Get Unicode number
concat()	Join strings
repeat()	Repeat a string
includes()	Check if text exists
match()	Find matching text
replace()	Replace text
search()	Find text position

Array methods
Method	Simple meaning
push()	Add at the end
pop()	Remove from the end
shift()	Remove from the beginning
unshift()	Add at the beginning
splice()	Add/remove/replace items
slice()	Get a portion
concat()	Join arrays
sort()	Arrange items
forEach()	Visit each item

Small classroom activity
Ask students to create array-practice.js and complete these tasks:
let subjects = ["HTML", "CSS", "JavaScript"];

// 1. Add "React" at the end.

// 2. Add "Python" at the beginning.

// 3. Remove the last subject.

// 4. Check whether "CSS" exists.

// 5. Print the number of subjects.

// 6. Print every subject using forEach().

// 7. Arrange subjects alphabetically.

Expected final practice: Students should use push(), unshift(), pop(), includes(), length, forEach() and sort().
















  
  
