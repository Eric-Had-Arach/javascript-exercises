//ignorar mayúsculas y minúsculas
//ignorar signos de puntuación y espacios

const palindromes = function (cadena) {
    const cadenaMinusculas = cadena.toLowerCase();
    let arregloSinSimbolos = [];
    let copiaArregloSinSimbolos = [];
    let arregloInvertido = [];
    for (let valor of cadenaMinusculas) {
        if ((valor.charCodeAt() >= 97 && valor.charCodeAt() <= 122) ||
            (valor.charCodeAt() === 225 || valor.charCodeAt() === 233 || 
             valor.charCodeAt() === 237 || valor.charCodeAt() === 243 || 
             valor.charCodeAt() === 250)) {
            arregloSinSimbolos.push(valor);
            copiaArregloSinSimbolos.push(valor);    
        }
    }
    arregloInvertido = copiaArregloSinSimbolos.reverse();
    for (let i = 0; i < arregloSinSimbolos.length; i++) {
        if (arregloSinSimbolos[i] !== arregloInvertido[i]) {
            return false;
        }
    }
    return true;
};

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
