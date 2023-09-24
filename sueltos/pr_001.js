const prompt = require("prompt-sync")()


// Interview question callback functions - High order functions
function add(a,b) {
    return a + b;
}

function divide(a,b) {
    return a / b;
}

function calculate(x, y, operation) {
    return operation(x,y);
}

console.log(calculate(2, 2, add))
console.log(calculate(2, 2, divide))


// Static method in a class
class Car {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    static comparePrice(a, b) {
        if (a.price > b.price)
         return `${a.name} costs more`
        else if (b.price > a.price)
         return `${b.name} costs more`
        else return `both same price`
    }
}

const audi = new Car("Audi", 10)
const tata = new Car("Tata", 9)
const ford = new Car("Ford", 9)


// function addNewCar() {

    var nname = prompt("Enter car brand: ");
    var pprice = parseInt(prompt("Enter price: "));
      
   const fiat = new Car(nname, pprice);
//    return new Car(nname, pprice);
    
//   }
//   console.log(addNewCar())
//   const fiat = new Car("Fiat", 44)
console.log(Car.comparePrice(fiat, audi))

// JS clean code in an Object
const jugador21 = {
    nombre: "",
    apellido: "",
    edad: "24",
    equipo: "River Plate",
    activo: "En actividad"
}

// let apellido = jugador21.apellido
// let edad = jugador21.edad

let { apellido, edad } = jugador21

jugador21.nombre = prompt("Ingrese el nombre: ")
apellido = prompt("Ingrese el apellido: ")
edad = prompt("Ingrese la edad: ")

// console.log(apellido, edad)
console.log(jugador21.nombre + " " + apellido)
console.log(edad)

class Person {
    constructor(fname, lname, brithdate) {
      this.firsName = fname;
      this.lastName = lname;
      this.dov = brithdate;
    }
  }
    
  let person1 = new Person("Alifa", "Elham", "12-07-2000");
  let person2 = new Person("Mazdul", "Prodhan", "07-03-2000");
  
  function addNewPerson() {
    let ffname = prompt("Enter your firstname: ");
    let llname = prompt("Enter your lastname: ");
    let ddov = prompt("Enter your date of birth: ");
  
    return new Person(ffname, llname, ddov);
  }
  console.log(addNewPerson())

