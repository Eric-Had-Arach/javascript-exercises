const reverseString = function(cadena) {
    let arreglo = cadena.split('');
    let nuevaCadena = '';
    let indiceArreglo = 0;
    for(let i = cadena.length-1; i>=0; i--) {
        arreglo[indiceArreglo] = cadena[i];
        indiceArreglo++;
    }
    nuevaCadena = arreglo.join('');
    return nuevaCadena;
};

// Do not edit below this line
module.exports = reverseString;
