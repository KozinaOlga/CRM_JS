'use strict';


const calcCurrencyConverter = (priceEuro) => {
    let resultMoney = priceEuro;

    resultMoney *= 1.2;
    resultMoney *= 73;
    return resultMoney;
};

console.log(calcCurrencyConverter(300));

    // const result = `${euro}` * 1.2 * 73;

//const rub = calcCurrencyConverter();
//console.log(rub);



