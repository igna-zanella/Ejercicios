
const prompt = require("prompt-sync")()

function anteriorDelTriple() {
    var primerValor = prompt("Ingrese un número para promediar: ")
    var segundoValor = prompt("Ingrese otro número para promediar: ")
    var tercerValor = prompt("Ingrese un último número para promediar: ")
    
    if ( isNaN(primerValor) || isNaN(segundoValor) || isNaN(tercerValor)) {
        console.log("No ingresó un número. Por favor, vuelva a intentarlo.")
    } else {
    let resultado = ((parseFloat(primerValor) + parseFloat(segundoValor) + parseFloat(tercerValor)) / 3)
    console.log("El promedio es: " + resultado)
    }
}
anteriorDelTriple()

