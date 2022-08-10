const repeatString = function(cadena, repeticiones) {
    let nuevaCadena = '';
    if(repeticiones < 0) {
        return 'ERROR';
    }
    if(cadena === '') {
        return '';
    }
    for(let i=1; i<=repeticiones; i++) {
        nuevaCadena += cadena;
    }
    return nuevaCadena;
};

// Do not edit below this line
module.exports = repeatString;
