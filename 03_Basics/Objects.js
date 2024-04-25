// Singleton

// Using Symbol as object
const mySym = Symbol("key1")  // Here we declared the Symbol

// Object Literals
const JsUser = {
    name: "Ajay",
    "full name": "Ajay Raj Singh",  // This type of keys cannot be accessed by . method, hence we need to use [" "] method to access the value of the corresponding key
    [mySym]: "mykey1",
    age: 22,
    location: "jaipur",
    email: "ajay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing the objects
console.log(JsUser.email);   // This is not convienient way to access an object

console.log(JsUser["email"]);  // Right way of accessing an object's key or object

console.log(JsUser["full name"]);  
console.log(typeof JsUser["age"]);

// Important Note 1:- keys of objects are also String types

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

// Important Note 2:- Syntex of Using a Symbol in a Object is using Square '[mySym]'

// Adding values and Freezing an Object
JsUser.email = "ajay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ajay@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// Important Note 3:- For referencing the same Object in JS we use 'this' keyword, and we write 'this.' it will give all the properties inside an object are defined

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());