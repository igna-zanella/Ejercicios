
let lista = ["mi ", "nombres ", "es "]

const subLista = lista.reduce(function(acumulador, numero) {
         return acumulador + numero;
       }, "Hola, ");

console.log(subLista)

let listaOtra = ["01", "02", "03"]

const subListaOtra = listaOtra.map(function(numero) {
    return numero * 2;
  });

console.log(subListaOtra)

let listaOtraDos = [22, 85, 92, 61, 55, 2, 42, 23, 18, 0, 49]

const numerosPares = listaOtraDos.filter(function(numero) {
    return numero % 2 === 0;
  });

const listaRebanada = listaOtraDos.slice(2, 6)
console.log(listaRebanada)
console.log(numerosPares)

let listaOtraTres = [1, 2, 3, [4,[41, 42, 43], 5, 6]]


const subListaOtraTres = listaOtraTres.flat(2)

console.log(subListaOtraTres)

let listaOtraCuatro = ["Citroën","Chevrolet","BMW",]
listaOtraCuatro.unshift("Ford", "Mercedes Benz")

// console.log(listaOtraCuatro)

// listaOtraCuatro.shift()
console.log(listaOtraCuatro)
console.log(listaOtraCuatro.shift())

// const sumaTotal = numeros.reduce(function(acumulador, numero) {
//     return acumulador + numero;
//   }, 0);
//   console.log("Suma total obtenida con 'reduce':", sumaTotal);