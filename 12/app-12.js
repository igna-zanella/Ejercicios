
// Necesitamos una función productoria que reciba un array de números y devuelva
// su productoria. La productoria es el resultado de multiplicar todos sus elementos
// entre ellos.
// Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.

function productoria([n1,n2,n3]) {
    let lista = [n1, n2, n3]
    return lista[0] * lista[1] * lista[2]
}

console.log("El resuldato de la productoría es: " + productoria([1,4,7]))
