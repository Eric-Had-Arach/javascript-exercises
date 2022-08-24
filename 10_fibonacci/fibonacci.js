const fibonacci = function(posicion) {
    const serie = [1, 1];
    if (typeof posicion === 'string') {
        posicion = Number(posicion);
        if (isNaN(posicion)) {
            return 'OOPS';
        }
    }
    if (posicion <= 0) {
        return 'OOPS';
    }
    if (posicion === 1) {
        return serie[0];
    }
    if (posicion === 2) {
        return serie[1];
    }
    if (posicion >= 3) {
        for (let i = 2; i < posicion; i++) {
            serie.push(serie[i-2] + serie[i-1]);
            if (i === posicion - 1) {
                return serie[i];
            }
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
