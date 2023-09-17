
const prompt = require("prompt-sync")()

function anterior() {
    let x = prompt("Ingrese un número para restarle una unidad: ")
    let resultado = --x
    console.log("El resultado es: " + resultado)
}
anterior()

function triple() {
    let x = prompt("Ingrese un número para triplicarlo: ")
    let resultado = x * 3
    console.log("El resultado es: " + resultado)
}
triple()

function anteriorDelTriple() {
    let x = prompt("Ingrese un número para triplicarlo y restarle una unidad: ")
    let resultado = (x * 3) - 1
    console.log("El resultado es: " + resultado)
}
anteriorDelTriple()