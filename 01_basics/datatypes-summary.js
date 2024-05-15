// Primitive (Call by value means that all the changes are made in their copy)

// 7 Types : String,Number,Boolean,null,undefined,Symbol(to make a value unique),BigInt //

// Javascript is a dynamically typed language which means that data types of variables are determined by the value they hold at runtime.
const score = 100 // I have not told js that i am storing a number in score
const scoreValue = 100.3 // there is no float datatype this is number datatype only
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34567889034n // bigInt Example

// Reference(Non Primitive) - These are those for which a reference is allocated in the memory

// Types: Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];// array example
let myObj ={
    name:"ishaan",
    age: 23,
} // Object example that is anything in curly braces in an object

// Functions can be defined in many types here is an example of variable function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof id);


//++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory : Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "ishaanoberoi"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
}

let userTwo = userOne

userTwo.email = "ishaan@google.com" // this is the way to access objects 

console.log(userOne.email);
console.log(userTwo.email);