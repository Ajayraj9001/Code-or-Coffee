// Dates
// The Date is Actually counted in JS from 1st january 1970 in miliseconds only

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
console.log(myDatej.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

// Note:- Date is an object in JavaScript

// Create Date
let myCreatedDate = new Date(2023, 0, 23)  // Month start from zero 0 in JS
let myCreatedDate1 = new Date(2023, 0, 23, 5, 4)

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

// TimeStamps in JS
let myTimeStamp = Date.now()

console.log(myTimeStamp);  // This will show the timeStamp in miliseconds from the Date has been initialized in programming was 1st Jan. 1970

console.log(myCreatedDate.getTime());     // This will show the time from the instance named myCreatedDate has been initialized in miliseconds

// Note:- Date and TimeStamp is used in making Quiz app and Airbnb like websites.

// Converting Miliseconds in Seconds - Devide by 1000
console.log(`Seconds From the Date Module added is ${Math.floor(Date.now()/1000)} seonds from 1st Jan. 1970`);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// getMonth() and getDay() both are methods

// Important :- toLocaleString() method in Date

// Note:- We can customize toLocaleString() method as we want, and inside toLocaleString() method we can define an object in JSON format or any format we want.

newDate.toLocaleString('default', {
    weekday: "long"
})