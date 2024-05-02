// Many arguments given for single parameter:- 
function calculateCartPrice(...num1){   // Here used Rest(Spread) Operator
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));  // There are many arguments given 

// Important Note:- Rest(Spread) Operator will return all the argument in single array even if we give one parameter as Rest operator ...num1.

// Passing Object in Function:- 

// Example 1:- 
const user = {
    username: "hitesh",
    price: 199
}

// Here we used anyobject for accessing any object in code
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// Important Note:- anyobject in the above example is used to access any object we want to access in the code, hence in function calling we need to pass the object name we want to access.

// Example 2:- 
function handleObject1(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject1({
    username: "sam",
    price: 399
})  // Directly passed object in function calling 

// Note:- Looking at above example, We can directly pass an object in function argument also.


// Passing Arrays in Function 
// Example 1:- Return second value from array
const myNewArray = [100, 200, 150, 290]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// Note:- we can pass any parameter in function parameter, but on function calling we need pass an specific array name has been initialized

// Example 2:- 
function returnSecondValue1(getArray){
    return getArray[1]
}

console.log(returnSecondValue1([11, 22, 33, 44]));  // We can directly also pass an array in arguments

// Note:- We can directly also pass an array in function argument