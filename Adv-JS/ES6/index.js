// let age = 24;
// let name = "sajin";
// console.log(`My age is ${age} Years Old
//  and My name is ${name}`)

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)
// console.log(...numbersCombined)

//... spread operator used to expand iterable objects (array, string) in various contest

// let num=[1,2,3]
// const copy=[...num]
// console.log(copy)
// num.push(4)
// console.log(copy)

// function sum(x,y,z){
//     return x+y+z
// }
// const args=[1,2,3]
// console.log(sum(...args))

// let array=[1,2,3,4,8,9,12]
// let b=[]
// let evenArray =array.map(num=>num % 2==0);
// b.push(evenArray)
// console.log(b)

// const add = (a,b) => a+b
// console.log(add(5,6))

let a=5;
let b=10;

const add=()=>{
    return a+b
}
console.log(add())