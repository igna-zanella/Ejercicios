
const prompt = require("prompt-sync")()

function promedio() {
    let primerValor = parseFloat(prompt("Ingrese un número para promediar: "))
    let segundoValor = parseFloat(prompt("Ingrese otro número para promediar: "))
    let tercerValor = parseFloat(prompt("Ingrese un último número para promediar: "))
    
    if ( isNaN(primerValor) || isNaN(segundoValor) || isNaN(tercerValor)) {
        console.log("No ingresó un número. Por favor, vuelva a intentarlo.")
    } else {
    let resultado = ((primerValor + segundoValor + tercerValor) / 3)
    console.log("El promedio es: " + resultado)
    }
}
promedio()

