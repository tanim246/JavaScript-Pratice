// const devs = ["Tanim","Deep","Saidul","Rimon","Jami","Uzzal"] //  Array
// devs.find((person)=>console.log(person))

//Find Syntax  --> [ES6]

const numbers = [23, 53, 23, 53, 12, 45, 23, 54, 15];
const find = numbers.find((n) => n > 12);
console.log(find);

// Terminal
// 23

// map --> [ES6]

const arrayOfObject = [
  {
    Name: "Tanim",
    Institute: "Moulvibazar Polytechnic Institute",
    Dipartment: "Electronice",
  },
  {
    Name: "Deep",
    Institute: "Moulvibazar Polytechnic Institute",
    Dipartment: "Electronice",
  },
  {
    Name: "Uzzal",
    Institute: "Moulvibazar Polytechnic Institute",
    Dipartment: "Computer",
  },
  {
    Name: "Rimon",
    Institute: "Moulvibazar Polytechnic Institute",
    Dipartment: "Computer",
  },
  {
    Name: "Rashida",
    Institute: "Moulvibazar Polytechnic Institute",
    Dipartment: "Computer",
  },
  {
    Name: "Oishi",
    Institute: "Moulvibazar Polytechnic Institute",
    Dipartment: "Computer",
  },
];
const studentsData = arrayOfObject.map((data) => console.log(data.Dipartment));

//Terminal 
// Electronice
// Electronice
// Computer
// Computer
// Computer                                    ute',
// Computer