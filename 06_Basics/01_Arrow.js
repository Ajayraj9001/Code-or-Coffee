// Important Note:- In this code file we will be talking about Arrow function and this keyword.

// Note:- 'this' keyword can't be used inside an Arrow function 

// Taken an Object called user
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // Here 'this' keyword is used to refer current context(this Object's variables).
        console.log(this);   // This will print whole current context(variable's values and everything inside the Object)
        
    }
}

user.welcomeMessage()
user.username = "sam"   // Here current context(variable's) value got changed
user.welcomeMessage()

console.log(this);   // Here the keyword 'this' will return the empty object '{}'

// Example:- Simple function
function chai() {
    let username = "hitesh"
    console.log(this.username);
}

chai()

// Note:- above 'this' will not work in the function, it will work in Object only.

// Arrow Functions 1:-
const chai2 = () => {
    let username = "hitesh"
    console.log(this);
} 

chai2()

// Note:- above 'this' will return an empty object '{}'

// Arrow Function 2:- 
// 1st type:- Explicit Return 
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,5));

// Note:- When return keyword used in function is called Explicit Return.

// 2nd type:- Implicit Return
const addThree = (num1, num2) => num1 + num2

console.log(addThree(3, 2));

// Note:- Implicit return means parentheses '{}' not required, we also suppose return keyword not require, instead write the whole function in one line 

// 3rd type:- Implicit Return  
const addFour = (num1, num2) => (num1 + num2)

console.log(addFour(2,8));

// Important Note:- In parenthese '()' return keyword is not required and in curly braces '{}' return keyword is required. The above technique is way much used in React.

// 4th type:- Want to return Object
const addFive = (num1, num2) => ({username: "Ajay"})

console.log(addFive(3, 4));

// Important Note:- In the above 4th type of arrow function we have an Object to return thats why we used Parenthese '()' because without '()' the object cannot be returned.

