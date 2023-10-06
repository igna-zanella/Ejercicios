
// Encontrar un valor máximo dentro de un array de números.

const prompt = require("prompt-sync")()

function maximo([n1, n2, n3]) {
  lista = [n1, n2, n3]
  console.log(typeof lista[0])
  return Math.max(...lista)
}

console.log(maximo([4, 5, 8]))

// Función con prompt
console.log("Función entrando números por teclado para encontrar el valor máximo")
function maximoPrompt() {
  let numeros = prompt("Ingrese números separados por un espacio: ")
  let listaPrompt = numeros.split(" ").map(Number)

  // console.log(Math.max(...listaPrompt))
  console.log("Su lista ingresada fue: " + listaPrompt + " y el número máximo es " + Math.max(...listaPrompt))
  console.log(typeof listaPrompt[0])
}

maximoPrompt()
