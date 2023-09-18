
const prompt = require("prompt-sync")()

const segundos = 3600
var horas = parseFloat(prompt('Ingrese la cantidad de horas para convertir a segundos: '))

if ( isNaN(horas)) {
    console.log("No ingresó un número. Por favor, vuelva a intentarlo.")
} else {
    var resultado
resultado = horas * segundos
console.log("El resultado es: " + resultado + " segundos.")
}
