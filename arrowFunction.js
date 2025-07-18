// Arrow Function  Mathods
 
// practice No: 01
const sumNumber =(x,y) => {
    let sum =x+y;
    console.log(sum)
}
sumNumber(10,30)
//Terminal Result --> 40


// practice No: 02
const add = (a,b)=>{
    return a * b
}
const result =add(50,30)
console.log(result)
// Terminal Result --> 1500


// spread oparetor ...

const person = {
    name:"tanim",
    age:20
}
const updatePerson = {
    ...person,
    phone:"01646471206",
}
console.log(updatePerson)
// Terminal Result --> 
// { name: 'tanim', age: 20, phone: '01646471206' }  