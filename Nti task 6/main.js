// Task 1
function task1() {
x = 10;
}
task1();
console.log(x);
// Output: 10. The variable x becomes a global variable automatically because it wasn't declared.

// Task 2
function task2() {
"use strict";
try {
y = 20;
} catch (err) {
console.log(err.message);
}
}
task2();
// Output: y is not defined

// Task 3
function task3() {
"use strict";
try {
var localvar = "test";
delete localvar;
} catch (err) {
console.log(err.message);
}

const obj = { prop: "value" };
delete obj.prop;
console.log(obj);
}
task3();
// Output 1: Delete of an unqualified identifier in strict mode / Cannot delete property
// Output 2: {}

// Task 4
/*
Output:
undefined
10
Explanation: The variable declaration var x is hoisted to the top with a default value of undefined.
When logged before assignment, it prints undefined. Afterwards, it prints 10.
*/
console.log(x);
var x = 10;
console.log(x);

// Task 5
/*
Case 1 Output: "Hi"
Reason: Function declarations are fully hoisted with their implementation, so sayHi() can be called before its definition.

Case 2 Output: TypeError: sayBye is not a function
Reason: var sayBye is hoisted as undefined. Calling undefined() throws a TypeError before it reaches the assignment.
*/

// Task 6
/*
Output: ReferenceError: Cannot access 'a' before initialization
Explanation: Variables declared with let are hoisted, but they remain in the Temporal Dead Zone
from the start of the block until the code reaches their declaration. Accessing them in TDZ throws an error.
*/

// Task 7
/*
Output:
1
2
2
Explanation:

var n = 1 sets global n to 1.

demo() function executes: inside demo(), var n = 2 overwrites the global n (since n isn't declared with a keyword inside, it uses the outer n).

The last console.log prints 2 because global n was reassigned inside demo().
*/
var n = 1;
function demo() {
n = 2;
console.log(n);
}
console.log(n);
var n = 2;
console.log(n);
demo();
console.log(n);

// Task 8
function testVarScope() {
if (true) {
var count = 100;
}
console.log(count); // Output: 100 (Accessible outside block, function-scoped)
}
testVarScope();

// Task 9
function testBlockScope() {
if (true) {
let a = 10;
const b = 20;
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
}
testBlockScope();

// Task 10
var myVar = 10;
var myVar = 20; // Allowed

let myLet = 10;
// let myLet = 20; // SyntaxError: Identifier 'myLet' has already been declared

// Task 11
const student = { name: "Ali", age: 20, city: "Cairo" };

student.age = 21;
console.log(student);

student.grade = "A";
console.log(student);

delete student.city;
console.log(student);

try {
student = { name: "Ahmed" };
} catch (err) {
console.log(err.message);
}

// Task 12
const nums = [1, 2, 3];
nums.push(4);        // Allowed (mutating array)
nums[0] = 99;        // Allowed (mutating element)
console.log(nums);

try {
// nums = [5, 6, 7]; // Not allowed: Assignment to constant variable.
} catch (err) {
console.log("Reassignment not allowed");
}

// Task 13
var a;   // Valid (initialized to undefined)
let b;   // Valid (initialized to undefined)
// const c; // Invalid: SyntaxError: Missing initializer in const declaration

// Task 14
/*
Output in browser window:
window.g1 -> "var global"
window.g2 -> undefined
window.g3 -> undefined
Explanation: Variables declared with var at the top level become properties of the window object.
Variables declared with let and const do not attach to window.
*/

// Task 15
const handlers = {};
for (let i = 0; i < 3; i++) {
handlers["fn" + i] = function () {
return "index: " + i;
};
}
console.log(handlers.fn0()); // Output: index: 0
console.log(handlers.fn2()); // Output: index: 2
/*
Explanation: Changing var to let creates a new block-scoped i binding for each iteration of the loop,
preserving the correct value inside each closure.
*/

// Task 16
const welcome = name =>` Welcome, ${name}!`;
console.log(welcome("Ahmed"));

// Task 17
const fullInfo = (first, last, age) =>` ${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));

// Task 18
const multiply = (a, b) => a * b;

const addAndPrint = (a, b) => {
console.log(`Numbers: ${a}, ${b}`);
return a + b;
};
console.log(multiply(4, 5));
console.log(addAndPrint(4, 5));

// Task 19
const product = {
title: "Laptop",
price: 15000,
inStock: true,
brand: "Dell"
};

const { title, price, inStock } = product;
console.log(title, price, inStock);

// Task 20
const techList = ["HTML", "CSS", "JS", "React"];
const [firstItem, secondItem] = techList;
console.log(firstItem, secondItem);

// Task 21
const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;

console.log(greet("yousef", "Welcome"));
console.log(greet("yousef"));
console.log(greet());

// Task 22
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// Task 23
const mergedArr = [...[1, 2], ...[3, 4, 5]];
console.log(mergedArr);

const originalArr = [10, 20, 30];
const copyArr = [...originalArr];
copyArr.push(40);
console.log("Original:", originalArr);
console.log("Copy:", copyArr);

// Task 24
const user = { name: "yousef", age: 22 };
const contact = { email: "yousef@nti.com", age: 23 };

const mergedObj = { ...user, ...contact };
console.log(mergedObj);
/*
Explanation: age: 23 wins because properties spread later override earlier properties with the same key.
*/

// Task 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
return a + b + c + d;
}

console.log(total(...values));

// Task 26
/*
Output: "yousef"
Explanation: Objects are assigned by reference. person2 points to the exact same object in memory as person1.
Mutating person2.name updates the reference shared with person1.
*/

// Task 27
const original = {
name: "Mona",
details: { city: "Cairo" }
};

const shallowCopy = { ...original };
shallowCopy.name = "Nour";
shallowCopy.details.city = "Alex";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
/*
Explanation:

original.name remains "Mona" because primitive properties are value-copied.

original.details.city changed to "Alex" because shallow copy copies object references for nested objects.
*/

// Task 28
const origObj = {
name: "Mona",
details: { city: "Cairo" }
};

const deepCopy = structuredClone(origObj);
deepCopy.details.city = "Giza";

console.log("Original:", origObj.details.city); // Output: Cairo
console.log("Deep Copy:", deepCopy.details.city); // Output: Giza

// Task 29
const dataToSave = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(dataToSave));

const retrievedData = localStorage.getItem("userdata");
const parsedData = JSON.parse(retrievedData);

console.log("Type:", typeof parsedData);
console.log("Values:", parsedData);

localStorage.removeItem("userdata");

// Task 30
const APP_CONFIG = {
name: "MyApp",
version: "1.0.0",
features: ["auth"],
api: {
baseUrl: "https://api.example.com",
timeout: 3000
}
};

APP_CONFIG.api.timeout = 5000;
APP_CONFIG.features.push("dashboard");

try {
APP_CONFIG = {};
} catch (err) {
console.log("Reassignment failed:", err.message);
}

console.log(APP_CONFIG);

// Task 31
const createCard = (title, price = 0, ...tags) => {
return {
title,
price,
tags,
label: `${title} ${price} EGP`
};
};

const card1 = createCard("Laptop", 15000, "tech", "dell", "sale");
const card2 = createCard("Mouse");

console.log(card1);
console.log(card2);

// Task 32
const students = [
{ name: "Omar", grade: 80 },
{ name: "Mona", grade: 90 },
{ name: "Ali", grade: 70 }
];

students.forEach(({ name, grade }) => {
console.log(`${name} scored ${grade}`);
});