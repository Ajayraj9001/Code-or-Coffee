// IIFE:- Immediately Invoked Function Expression(IIFE)

// IIFE:- When we don't want to polut our important function by outside global variables or functions then we use IIFE, and immediately execute the function.

(function chai(){
    console.log(`DB CONNECTED`);
})();   // In IIFE we need to use semicolen ; to stop the function execution

// Note:- Here in the above code we used 2 Parenthese '()()', 1st for function definition and 2nd for function execution is called IIFE, it will immediately invoke the function without getting inttrupted by global variables. 

// IIFE:- To avoid the global variables and functions polution we uses IIFE.

// IIFE using Arrow function:- 
( () => {
    console.log(`DB 2 CONNECTED`);
})();

// Note:- Putting a semicolen ';' is must at the end of function execution in IIFE function.

// Another Example of IIFE function
( (name) => {  // Here will give parameter
    console.log(`DB CONNECTED THREE ${name}`);
})('hitesh')  // Here will give argument

// Note:- The above IIFE is also called non-named IIFE, because we used Arrow function in the above IIFE.

// Note:- The first IIFE we made is called named IIFE, there we have given a specific name called chai() to the IIFE function.

