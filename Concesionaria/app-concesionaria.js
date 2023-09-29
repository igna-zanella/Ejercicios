
const autos = require("./autos")

const concesionaria = {
    autos: autos,
    buscarAuto(patenteDada) {
        for (let i = 0; i < autos.length; i++) {
            
            if (autos[i].patente === patenteDada ) {
                return console.log("El auto existe en nuestra base de datos")
            } else {
                console.log("No se econtró ningún auto con esa patente")
            }
        }
    }, 
    venderAuto(patenteVendido){
        for (let i = 0; i < autos.length; i++) {
           
            if (autos[i].patente === patenteVendido ) {
                autos[i].vendido = "Vendido"
                return console.log("El auto " + autos[i].patente + " se encuentra vendido")
            } else {
                console.log("No se econtró ningún auto con esa patente")
            }
        }
   }
}

// console.log(concesionaria.autos[0].patente)
// console.log(concesionaria.buscarAuto("APL123"))
console.log(concesionaria.venderAuto("APL123"))
console.log(autos)
// console.log(vendido.venderAuto())