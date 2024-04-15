// Creating Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls, cryptography, networking

    setTimeout(function() {
        console.log('Async task is comlete');
        resolve()
    }, 1000)
})

// Consuming Promise
promiseOne.then(function(){
    console.log("Promise Consumed");
})

// 2nd Promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

// 3rd Promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Forth Promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "ajayraj", password: "9876"})
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// Fifth Promise
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "9876"})
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Sixth Promise
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()