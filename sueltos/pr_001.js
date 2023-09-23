

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

const audi = new Car("Audi", 11)
const tata = new Car("Tata", 9)
const ford = new Car("Ford", 9)

console.log(Car.comparePrice(audi, ford))

// JS clean code in an Object
const prompt = require("prompt-sync")()
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



