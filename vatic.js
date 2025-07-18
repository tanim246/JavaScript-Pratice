//Template Literals / Vatic Syntax --> ` ${} `

const name = "Muhammad Tanim";
const age = "20 year"
console.log(`My name is ${name}`)
console.log(`My age ${age}`)

// Terminal Result --> 
// My name is Muhammad Tanim
// My age 20 year

// Destructuring -->
const student = {
    name: "Muhammad Tanim",
    institute:"Moulvibazar Polytechnic Institute",
    dipartment:"Electronice Technology",
    session:"21-22",
}

const {institute,session} = student
console.log(institute,", session:",session )
// Terminal Result --> 
// Moulvibazar Polytechnic Institute , session: 21-22