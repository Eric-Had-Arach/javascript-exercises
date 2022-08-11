const leapYears = function(anio) {
    if (anio % 4 === 0 && (anio % 100 !== 0 || (anio % 100 === 0 && anio % 400 === 0))) {
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
