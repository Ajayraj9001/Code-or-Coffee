// if 
const isUserloggedIn = true

if( 2 != 3 ) {
    console.log("executed");
}

// <, >, <=, >=, ==, ===, !==

// Note:- for to go inside if statement condition should be true always.

// Note:- '===' is called strict check, it also checks the type of value of both side in if statement.

// Example 1:-
const temprature = 41

if ( temprature === 40 ) {
    console.log("less then 50");
}
else {
    console.log("temprature is greater then 50");
}
console.log("Executed");

// Example 2:-
const score = 200

if(score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);   // -> This code will not be execited anymore the 'power' variable is defined inside the if statement only

// Note:- 'var' keyword is a Global variable but we will not be using 'var' keyword in JS any where.

// Example 3:- 
const balance = 1000

if (balance > 500) console.log("Right");   // We can also write if statement in single line as well

// Note:- any function or code written in single line without using scope called Implicit Statement(Scope).

// Example 4:- Multiple if/else conditions
const balance1 = 800

if ( balance1 < 400) {
    console.log("less then 400");
} else if (balance1 < 580) {
    console.log("less then 580");
} else if (balance1 < 750) {
    console.log("less then 750");
} else {
    console.log("less then 1000");
}

// Example 5:- online shopping based example

const userLoggedIn = true
const debitCard = true
const loggenInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard && 2 == 2) {  // This is 'and &&' operator, here all three left, right and middle conditions should be true to run if statement
    console.log("Allow to buy course");

}

if (loggedInFromEmail || loggedInFromEmail) {  // This is called 'or &&' operator, here atleast one statement should be true execute the if statement
    console.log("User logged in");
}

