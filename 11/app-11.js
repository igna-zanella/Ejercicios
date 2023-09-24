
// Escribí una función factorial, la misma debe recibir un número y calcular el factorial
// del mismo. El factorial de un número n es el resultado de multiplicar todos los números enteros positivos menores o iguales que n.


const prompt = require('prompt-sync')()

function factorial () {
  console.log("Fórmula Factorial: n! = n*(n-1)!")
  var numeroN = parseInt(
    prompt('Ingrese un número para obtener su factorial: ')
  )
  var resultado = 1
  for (let index = numeroN; index >= 1; index--) {
    resultado = resultado * index
  }
  console.log('El resultado del factorial de ' + numeroN + ' es ' + resultado)
}
factorial()
// for (let index = 1; index <= numeroN; index++) {
//     const resultado = index * (index - 1);
//     var resultadoFinal = resultado * numeroN
//     console.log(resultado)
//     console.log(resultadoFinal)
