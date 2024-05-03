// Nested Scope:-
function one(){
    const username = "Ajay"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(username);
}

// Interesting Concept:-

function addone(num) {
    return num + 1
}

addone(7)

// Note:- In this case the addone(7) function will be called before function definition as well


// Another Way making function 
const addTwo = function(num) {
    return num + 2
}

addTwo(4)

// Note:- In this case the addTwo(4) function can't be called before the function declaration, there will show an error

