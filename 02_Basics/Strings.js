const name = "Ajay"
const repoCount = 50

// console.log(name + repoCount + "value");

// Important Note :- we have to use backtaxt ` ` for String to concatinate or doing String tasks in JS it is an convineient way of using Strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another Way of Declaring String in JS

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);  // This will return the type object of the above String

console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

// Additional methods of String Object in JS
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 5)    // We can give negetive values in slice 
console.log(anotherString);

// trim() method
const newStringOne = "  Ajay Raj Singh  "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace() method
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'));

// Dividing String into parts(Array)
console.log(gameName.split('-'));