const userEmail = []

if (userEmail) {
    console.log("Got user Email.com");
} else {
    console.log("Don't have user email");
}

/* Falsy Values:- 

false, 0, -0, BigInt 0n, empty string(""), null, undefined, NaN

*/

/* Truthy Values:- 

Zero inside string("0"), 'false', " ", [], {}, Empty_Function(function(){})

*/

// Check Array is empty or not:-
if(userEmail.length === 0) {
    console.log("Array is Empty");
}

// Check Object is Empty or Not:-
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

/* Nulliesh Coalescing Operator (??): null or undefined :=

Basically this operator will avoid getting the null or undefined value instead it will fetch the imediate first value after null or undefined, the value could be a number or a function or an array or an Object could also be there.

*/

let val1;
val1 = 5 ?? 10  // Here the priority goes the first value  
val2 = null ?? 10  // This will avoid the null value
val3 = undefined ?? 6   // This will take the 2nd value avoiding undefined :- the 2nd value here could a function fetching a value from database
val4 = null ?? 3 ?? 8   // Here this will take first imediate value after null(avoiding null) that is a number 

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Note:- Nulliesh Coalescing Operator(??) and Terniary Operator both are different, both operator's design and goal are also different

/* Terniary Operator:-

Simply works as true/false operator 

Syntax:- [ condition ? true : false ]

*/

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("More then 80");

