const userEmail = []

if (userEmail) {
    console.log("Got user Email.com");
} else {
    console.log("Don't have user email");
}

/* Falsy Values:- 

false, 0, -0, BigInt 0n, empty string(""), null, undefined, NaN

*/

/* Truthy Values:- 

Zero inside string("0"), 'false', " ", [], {}, Empty_Function(function(){})

*/

// Check Array is empty or not:-
if(userEmail.length === 0) {
    console.log("Array is Empty");
}

// Check Object is Empty or Not:-
