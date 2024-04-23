let score = "30abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan (Not a Number)
// true => 1; false => 0;

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// Converting Number to String
console.log("--Converting Number to String--")
let someNumber = 100

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)