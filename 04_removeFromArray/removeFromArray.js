const removeFromArray = function(arreglo, ...valores) {    
    for(let i=0; i<valores.length; i++) {
        for(let j=0; j<arreglo.length; j++) {
            if(arreglo[j] === valores[i]) {
                arreglo.splice(j, 1);
            }
        }
    }
    return arreglo;
};

// Do not edit below this line
module.exports = removeFromArray;
