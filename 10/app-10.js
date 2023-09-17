
const prompt = require("prompt-sync")()

function esPar() {
  let numero = prompt("Ingrese un número: ");
  let resultado = numero % 2

  if (isNaN(resultado)) {
    console.log("No ingresó un número. Por favor, vuelva a intentarlo.");
  } else {
    if (resultado === 0) {
      console.log(true);
    } else {
      console.log(false);
      } 
    }
}

//   if (isNaN(resultado)) {
//     console.log("No ingresó un número. Por favor, vuelva a intentarlo.");
//   } else {
//     if (resultado === 0) {
//       console.log(numero + " es un número par.");
//     } else {
//       console.log(numero + " es un número impar");
//       } 
//     }
// }

esPar()

// var languages = {
//   english: "Hello!",
//   french: "Bonjour!",
//   notALanguage: 4,
//   spanish: "Hola!"
// };

// // print hello in the 3 different languages
// for (var i in languages){
//   if (typeof languages[i] === "string"){
//       console.log(languages[i]);
//   }
//   else ;
// }