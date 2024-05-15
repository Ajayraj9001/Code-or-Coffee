/* 1. Primitive Data Type:- (7 types) String, Number, Boolean, null, undefined, Symbol. */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // Because Symbol always gives a unique value, that's why it will show false

const bigNumber = 9823949050938209n 
 // After putting 'n' at the end of the number will be treated as bigInteger value. 

/* 2. Reference Type(Non Primitive):- Array, Objects, Functions. */

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name : "Ajay Raj",
    age : 25
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof bigNumber);
console.log(typeof myObj);