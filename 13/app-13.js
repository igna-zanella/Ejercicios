
// ¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno,
// aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras
// que contienen información) podemos declarar funciones (estructuras que procesan
// información).
// Escribir las siguientes tres funciones:
// ● anterior: recibe un número como parámetro y devuelve ese número menos
// uno.
// ● triple: recibe un número como parámetro y devuelve el triple de ese
// número.
// ● anteriorDelTriple: recibe un número como parámetro y, utilizando las dos
// funciones anteriores, tendrá que devolver el número recibido multiplicado por
// 3 (tres) y al resultado restarle 1 (uno).


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