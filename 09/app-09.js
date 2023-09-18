
const prompt = require("prompt-sync")()

function positivoNegativo() {
  let numero = prompt("Ingrese un número positivo o negativo: ");

  if (isNaN(numero)) {
    console.log("No ingresó un número. Por favor, vuelva a intentarlo.");
  } else if (numero == 0) {
      console.log("Cero es un número neutro.");
    } else if (numero > 0) {
        console.log(numero + " es un número positivo");
      } else {
        console.log(numero + " es un número negativo");
      }
    
  
}
positivoNegativo()