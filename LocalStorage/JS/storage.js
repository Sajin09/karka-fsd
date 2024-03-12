localStorage.setItem("name","sajin")
let a=localStorage.getItem("name")
console.log(a)

let b=["a","b","c"];
localStorage.setItem("arr",JSON.stringify(b))
let c=JSON.parse(localStorage.getItem("arr"))
console.log(c)