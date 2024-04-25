// Array :- Arrays always define square brackets, an array can have similier as well as different type of elements in it.

// Arrays also gives Prototyoe Access in it

const myArr = [0, 1, 3, 5, 6, 7]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 6, 7, 8)

console.log(myArr[3]);

// Array Methods
myArr.push(6)
myArr.push(9)
myArr.pop()  // pop() method will automatically removes the last element of array
myArr.unshift(9)  // will add element in start of array
myArr.shift()  //removes array's starting element

// Questionair Methods in JS Arrays
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

console.log(myArr);

// .join() method
const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);

// slice, splice
console.log("<------Slice & Splice------->");

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // splice manipulates the original array
console.log("C ", myArr);
console.log(myn2);