const score = 400
console.log(score);

// We can Dedicatedlly define a value as a Number using new keyword
const balance = new Number(100)
console.log(balance);

// Can convert a number to String type
console.log(balance.toString().length);

// toFixed() Method for precision value
console.log(balance.toFixed(4));

// toPrecision() method
const otherNumber = 23.9874
console.log(otherNumber.toPrecision(3));

// toLocaleString() Method
const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//****************** Maths *****************

console.log("|<------------------ Maths Part 1 ---------------->|");

// There are tons of methods in Maths library or Object
console.log(Math);   // It will object type of Math

// abs() absolute value method
console.log(Math.abs(-4));  // Negetive value will be converted in positive value

// round() - gives values in round off
console.log(Math.round(4.6));

// ceil() - gives top value
console.log(Math.ceil(4.2));  // will give 5

// floor() - gives low value
console.log(Math.floor(4.9));  // gives 4 as low

// min() - gives a list's(array's) min value
console.log(Math.min(2,3,5,1,7));

// max() = gives a list's(array's) max value
console.log(Math.max(5,42,67,2,45,98));

// Important random() method - gives random values between 0 and 1 mostly decimal values
console.log(Math.random());

// Important Note
console.log((Math.random()*10) + 1);   // This will always gives value above 1
console.log((Math.random()*10) + 1);

// Important Note - If we want single low value without decimal 
console.log(Math.floor(Math.random()*10) + 1);


// ***************** Maths Part 2 ***************

console.log("|<------------------ Maths Part 2 ---------------->|");

// Q.1 Give random values between 10 and 20.

const min = 10
const max = 20

// Applied a formula
console.log(Math.floor(Math.random() * (max - min + 1) + min));

