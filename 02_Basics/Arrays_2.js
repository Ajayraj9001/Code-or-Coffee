const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat - merge two arrays and return a new array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// Spread operator '...'
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// Spread out any level(3, 4, 5) of arrays or infinity level arrays in a single arrays using .flat(infinity) method, here instead of infinity we can also define the level of array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9, 10], 11], 9]  // This is 3 level array

const usable_another_array = another_array.flat(3)   //we can also use .flat(infinity) but this is not correct way when we know the level of array
console.log(usable_another_array);

// Important Note:- Array method used in Data Scrapping 
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Ajay Raj"));
console.log(Array.from({name: "Ajayraj"}));   // Interesting Case :- Because here we need to give weather we want to make keys an array or we want values as an array, otherwise it will shows an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // Array.of() is used to return new set of elements(variables, arrays) array from the above variables or arrays that has been defined already