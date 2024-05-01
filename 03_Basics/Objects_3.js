// Object De-structuring

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// If we want to show the an specific value of an object, then we use the below way.
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// Note:- The above way of destructuring an object is called object destructuring

// Object Json format(API)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]