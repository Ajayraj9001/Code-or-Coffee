// Singleton

const tinderUser1 = new Object() 
 // Singleton Object
const tinderUser = {}  // Non Singleton Object

// Note:- We can declare an object in above both ways

tinderUser.id = "796abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// More operationson tinderuser
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   // Here every the key value pair will come itself in array

// Important Note:- The above tinderuser's output values datatype will always be an array type, hence here we can perform loops and other operations as well

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // This will check that the corresponding property is exist in the object or not

// Objects in a Object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jown",
            lastname: "dao"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// Important Note:- If there are many object inside object, then we can access those objects by using dot '.' operators in each object hirarichy like (.fullname.firstname)

// Combining two or more objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = { obj1, obj2, obj3 }  // - This is wrong way to combine

// 1st way of combining
const obj4 = Object.assign(obj1, obj2, obj3)

// 2nd best way of combining
const obj5 = Object.assign({}, obj1, obj2, obj3)     // This is the correct way of combining two or more objects

// 3rd way of combining - using spread all three objects in a single object
const obj6 = {...obj1, ...obj2, ...obj3}

console.log(obj4);
console.log(obj5);
console.log(obj6);

// Note:- above all three methods of combining two or more arrays will give the result, but the best way of combining arrays are 2nd and 3rd way.

// Accessing Data from Database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@google.com"
    },
    {
        id: 3,
        email: "d@microsoft.com"
    }
]    // All values comes in array of objects

// Important Note:- When value are coming from database then values will always comes in array of objects

users[1].email
