
// Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
// La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

const prompt = require("prompt-sync")()


const texto = prompt("Hablale al loro: ")

function loro() {
    return (texto + ", ").repeat(5)
    
}

console.log(loro(texto))
