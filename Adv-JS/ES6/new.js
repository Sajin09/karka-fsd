// // Iterating over an array
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//   console.log(element);
// }

// // Iterating over a string
// const str = "Hello";
// for (const char of str) {
//   console.log(char);
// }

// // Iterating over a Map
// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// for (const [key, value] of map) {
//   console.log(key, value);
// }

// // Iterating over a Set
// const set = new Set([1, 2, 3, 4, 5]);
// for (const element of set) {
//   console.log(element);
// }


// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
//   for (const key in obj) {
//     console.log(key + ': ' + obj[key]);
//   }
  
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(key + ': ' + obj[key]);
//     }
//   }

let myobj={
    tamil:89,
    english:90,
    maths:98,
    science:97,
    socialscience:93
}
const total=Object.values(myobj).reduce((accumulator,number)=>{
    return accumulator + number
},0)
console.log(total)