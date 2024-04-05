// const num = [1, 2, 3, 4, 5, 6, 7];
// const evenNumbers = num.filter((numb) => numb % 2 === 0);
// console.log(evenNumbers);

// let fruits=["Apple","Orange","Grapes","Apple"]
// const index=fruits.lastIndexOf("Apple")
// console.log(index)

// let arr=[1,2,3]
// let obj={
//     a:1,
//     b:2
// }

// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))


//!array destructing is a conveniemt way to extract values from an arrray. and assign them to variable in consise and readable manner

var arr=["1",2,3]
var [a,b,c,d=4] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(d)

