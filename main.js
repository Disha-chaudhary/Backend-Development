//var let const 
// declarations and initialization

//var a;//declare karna
//var a = 12; //declaration and initialization

//added in window
// can be redeclared with same name and no error
// var is function scoped
//var a = 13;


//const discount = 12; //const value can never be changed

//var doesnot respect blocks

// {
//     var b = 12;
// }

//Temporal dead zone - uthna area jitne mein js ko pata 
// to hai ki variable exist karta hai par wo aapko value
// nahi de sakta

//  console.log(a);
//  var a = 12;

//Hoisting
//ek variable ko jab js mein bante hai to wo variable
//do hisso mei toot jata hai and uska declare part upar
//chala jata hai and uska initialization part n


//DATA TYPES
//12 harsh true [] {} () null undefined
//primitives and  reference datatypes
// let a =12;
// let b=a;

// let a = [1,2,3,4];
// let b = a;
// 1. NUMBER
// let age = 19;
// let price = 99.5;
// let temperature = -5;

// console.log(typeof age); // number
// console.log(typeof price); // number
// console.log(10 / 0); // Infinity
// console.log("hello" * 2); // NaN
// console.log(Number.isNaN(NaN)); // true
// console.log(0.1 + 0.2); // 0.30000000000000004

// // 2. STRING
// let firstName = "Disha";
// let city = 'Mathura';
// let course = `Computer Science`;

// console.log(typeof firstName); // string
// console.log("Hello" + " " + "Disha"); // Hello Disha

// let name = "Disha";
// let studentAge = 19;
// console.log(`My name is ${name} and I am ${studentAge} years old.`);

// let word = "hello";
// word[0] = "H";
// console.log(word); // hello

// word = "H" + word.slice(1);
// console.log(word); // Hello

// // 3. BOOLEAN
// let isLoggedIn = true;
// let hasPermission = false;

// console.log(typeof isLoggedIn); // boolean
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(5 === 5); // true
// console.log(5 === "5"); // false

// if (isLoggedIn) {
//     console.log("Welcome back!");
// } else {
//     console.log("Please log in.");
// }

// // 4. UNDEFINED
// let score;

// console.log(score); // undefined
// console.log(typeof score); // undefined

// let user = {
//     name: "Disha"
// };

// console.log(user.age); // undefined

// function greet() {
//     console.log("Hello");
// }

// let result = greet();
// console.log(result); // undefined

// // 5. NULL
// let selectedUser = null;

// console.log(selectedUser); // null
// console.log(typeof selectedUser); // object

// let loggedInUser = null;
// loggedInUser = { name: "Disha" };
// console.log(loggedInUser);

// // undefined vs null
// let a;
// let b = null;

// console.log(a); // undefined
// console.log(b); // null

// // 6. BIGINT
// let bigNumber = 123456789012345678901234567890n;

// console.log(typeof bigNumber); // bigint
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// let bigA = 9007199254740993n;
// let bigB = 2n;

// console.log(bigA + bigB); // 9007199254740995n
// console.log(10n + 20n); // 30n
// console.log(10n + BigInt(20)); // 30n

// // 7. SYMBOL
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 === id2); // false
// console.log(typeof id1); // symbol

// let id = Symbol("id");

// let symbolUser = {
//     name: "Disha",
//     [id]: 101
// };

// console.log(symbolUser[id]); // 101

// // 8. OBJECTS
// let student = {
//     name: "Disha",
//     age: 19,
//     city: "Mathura"
// };

// console.log(student.name); // Disha
// console.log(student["age"]); // 19

// student.age = 20;
// student.email = "disha@example.com";

// console.log(student.age); // 20
// console.log(student.email); // disha@example.com

// // Nested object
// let studentDetails = {
//     name: "Disha",
//     address: {
//         city: "Mathura",
//         state: "Uttar Pradesh"
//     }
// };

// console.log(studentDetails.address.city); // Mathura

// // 9. ARRAYS
// let marks = [85, 90, 78, 92];

// console.log(marks[0]); // 85
// console.log(marks[1]); // 90
// console.log(marks.length); // 4
// console.log(typeof marks); // object
// console.log(Array.isArray(marks)); // true

// let data = ["Disha", 19, true, null];

// let users = [
//     { name: "Disha", age: 19 },
//     { name: "Aman", age: 20 }
// ];

// console.log(users[0].name); // Disha
// console.log(users[1].age); // 20

// let numbers = [10, 20, 30];
// numbers.push(40);
// console.log(numbers); // [10, 20, 30, 40]

// numbers.pop();
// console.log(numbers); // [10, 20, 30]

// // 10. FUNCTIONS
// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20)); // 30
// console.log(typeof add); // function

// let greetUser = function () {
//     console.log("Hello!");
// };

// greetUser();

// let multiply = (a, b) => a * b;
// console.log(multiply(3, 4)); // 12

// // 11. PRIMITIVE VALUE COPYING
// let x = 10;
// let y = x;

// y = 20;

// console.log(x); // 10
// console.log(y); // 20

// // 12. OBJECT REFERENCE COPYING
// let objA = { score: 10 };
// let objB = objA;

// objB.score = 20;

// console.log(objA.score); // 20
// console.log(objB.score); // 20

// // Creating a shallow copy
// let original = { score: 10 };
// let copy = { ...original };

// copy.score = 20;

// console.log(original.score); // 10
// console.log(copy.score); // 20

// // 13. DYNAMIC TYPING
// let value = 10;
// console.log(typeof value); // number

// value = "Hello";
// console.log(typeof value); // string

// value = true;
// console.log(typeof value); // boolean

// // 14. TYPE CONVERSION
// let stringAge = "19";

// console.log(Number(stringAge)); // 19
// console.log(typeof Number(stringAge)); // number

// console.log(String(123)); // "123"
// console.log(Boolean(1)); // true
// console.log(parseInt("25", 10)); // 25
// console.log(parseFloat("3.5")); // 3.5
// console.log(Number("hello")); // NaN

// // 15. TYPE COERCION
// console.log("5" + 2); // "52"
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false

// // 16. TRUTHY AND FALSY VALUES
// console.log(Boolean("")); // false
// console.log(Boolean("Hi")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

// if ("hello") {
//     console.log("Runs");
// }

// if (0) {
//     console.log("Does not run");
// }

// if ([]) {
//     console.log("This runs");
// }

// // 17. TYPEOF OPERATOR
// console.log(typeof 42); // number
// console.log(typeof "hello"); // string
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof 10n); // bigint
// console.log(typeof Symbol()); // symbol
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof function () {}); // function

// // Correct way to check arrays
// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray({})); // false

//functiomms

// 1. Basic function
function greet() {
    console.log("Hello!");
}
greet();

// 2. Parameters
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// 3. Function expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));

// 4. Arrow function
const divide = (a, b) => a / b;
console.log(divide(20, 4));

// 5. Default parameter
function welcome(name = "Guest") {
    console.log("Welcome, " + name);
}
welcome("Disha");
welcome();

// 6. Function with condition
function checkEven(n) {
    if (n % 2 === 0) {
        return "Even";
    }
    return "Odd";
}
console.log(checkEven(8));
console.log(checkEven(7));