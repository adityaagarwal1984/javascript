// in this file i have wrtten an practise all the basics of the js which are just need to develop the foundation of my web devlepment journey


// console.log('Hello, World!');

// console.log(parseInt("aditya"));
 let fruits=["apple","banana","mango"];
// console.log(fruits);
// console.log(fruits[0]);
// Using for...of to iterate over the array
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// Using for...in to iterate over the array indices
// for (const index in fruits) {
//     console.log(index, fruits[index]);}


// Using forEach to iterate over the array
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// Using map to create a new array with the length of each fruit name
const fruitLengths = fruits.map(function(fruit) {
    return fruit.length;
});
console.log(fruitLengths);
    
//searching in array
let names = ['aditya', 'saurabh', 'sahil', 'sagar', 'sahil'];
console.log(names.indexOf('sahil')); // 2
console.log(names.lastIndexOf('sahil')); // 4