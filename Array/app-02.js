
const prompt = require("prompt-sync")()

// create an array with objects inside
let myArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ]
  
  //add an object to an array
  myArray.push({name: 'Carlitos', age: 33})

  console.log(myArray)

  let myNewArray = []; // initialize an empty array

  let myObject = { name: "Juan", age: 35 }; // create an object
  
  myNewArray.push(myObject); // add the object to the array
  
  console.log(myNewArray); // Output: [{ name: "John", age: 25 }]

  let fruits = ['apple', 'banana', 'orange', 'kiwi'];


// Removing an item from the array at index 2 and storing the removed item in a variable
let removedItem = fruits.splice(2, 1);

console.log(removedItem); // Output: ['orange']
console.log(fruits); // Output: ['apple', 'banana', 'kiwi']

function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  saludar("Pipo"); // Output: ¡Hola, Pipo!
  saludar("Pipi"); // Output: ¡Hola, Pipi!

  let saludo = prompt("Dime tu nombre: ")
  saludar(saludo)
