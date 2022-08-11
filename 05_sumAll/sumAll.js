const sumAll = function (num1, num2) {
    let resultado = 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    if (num1 <= num2) {
        for(let i = num1; i <= num2; i++) {
            resultado += i;
        }
        return resultado;
    }
    if (num1 > num2) {
        for(let i = num1; i >= num2; i--) {
            resultado += i;
        }
        return resultado;
    }
};

// Do not edit below this line
module.exports = sumAll;
