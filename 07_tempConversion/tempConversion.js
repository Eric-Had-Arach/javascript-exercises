const ftoc = function(tempFahrenheit) {
    let temperatura = ((tempFahrenheit - 32) * 5/9);
    if (Number.isInteger(temperatura)) {
        return temperatura;
    }else {
        return parseFloat(temperatura.toFixed(1));
    }
};

const ctof = function(tempCelsius) {
    let temperatura = (tempCelsius * 9/5 + 32);
    if (Number.isInteger(temperatura)) {
        return temperatura;
    }else {
        return parseFloat(temperatura.toFixed(1));
    }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
