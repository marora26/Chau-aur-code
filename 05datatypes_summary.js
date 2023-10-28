// Data Types -

// Call by value or call by reference

// 1. Primitive data types
// 7 types = String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 345563245787n;

// 2. Reference(Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array
let myObj = {
    name: "mayank",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);