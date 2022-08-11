const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arreglo) {
	let resultado = 0;
    for(let valor of arreglo) {
        resultado += valor;
    }
    return resultado;
};

const multiply = function(arreglo) {
    let resultado = 1;
    for(let valor of arreglo) {
        resultado *= valor;
    }
    return resultado;
};

const power = function(base, exponente) {
	let resultado = 1;
    for(let i = 1; i <= exponente; i++) {
        resultado *= base;
    }
    return resultado;
};

const factorial = function(num) {
	let resultado = 1;
    for(let i = num; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
