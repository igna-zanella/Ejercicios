
class Personaje {
    nombre;                 // Propiedad sin definir (undefined)
    tipo = "Jugador/a";      // Propiedad definida
    vidas = 5;            // Propiedad definida con 5 vidas restantes
   energia = 10;          // Propiedad definida con 10 puntos de energía
  
    constructor(nombre, tipo, vidas) {
      this.nombre = nombre;   // Modificamos el valor de la propiedad nombre
      //this.tipo = tipo;   // Modificamos el valor de la propiedad nombre
      //this.vidas = vidas;   // Modificamos el valor de la propiedad nombre
      console.log(`¡Bienvenido/a, ${this.nombre}!`);
    }
}

const mario = new Personaje("Mario"); 
const luigi = new Personaje("Luigi"); 
const peach = new Personaje("Peach"); 
console.log(mario)
console.log(luigi)
console.log(peach)


class Characters {
    name = "Manz";           // ES2020+
  
    constructor() {
      this.name = "Manz";    // ES2015+
      console.log("Constructor: " + this.name);
    }
  
    metodo() {
      console.log("Método: " + this.name);
    }
  }
  
  const c = new Characters(); // 'Constructor: Manz'
  
  c.name;     // 'Manz'
  c.metodo(); // 'Método: Manz'