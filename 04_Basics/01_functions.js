// Functions in Js

function sayName(){
    console.log("A");
    console.log("j");
    console.log("a");
    console.log("y");
}

sayName    // This is called function Reference

sayName()   // This is called function execution(Calling)

function addTwoNumbers(number1, number2){     // At the time of function defenition after function name inside paranteses '()' anything we write is called parameter

    console.log(number1 + number2);
}

addTwoNumbers(3, 1)    // At the time of calling a function we give some values in Parenteses '()' are called arguments

// Example 2nd :-
function addTwoNumbers2(num1, num2){
    return num1 + num2
}

const result = addTwoNumbers2(3, 7)

console.log("Result: ", result);

// Example 3rd:- 
function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Ajay"));

// Note:- If we don't pass any value inside above function calling argument, then it will show undefined.

// Example 4th:- 
function loginUserMessage1(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage1());   // No value is passed in the argument it will show undefined

// Important Note:- if(username === undefined) and if(!username) both if statement are equal, both will shows the username is undefined.

// Example 5th:- 
function loginUserMessage2(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage2("Hitesh"));

// Note:- In above example we can that username value is already initialized in the function parameter, hence it will not go on the if statement.

// Note:- if we pass another value in the in argument at the time of function calling then the parameter value will be overwrite  by new value.