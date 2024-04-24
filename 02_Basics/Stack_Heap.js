// Stack(Primitive), Heap(Non - Primitive)

let myYoutubename = "Ajayraj9001dotcom"

let anothername = myYoutubename  // Here the copy variable will be change not original one

console.log(anothername);

// Heap(Non - Primitive)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ajay@google.com" // Here the Original(Reference) value will get change for userOne Variable

console.log(userOne.email);
console.log(userTwo.email);