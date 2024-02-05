'use strict';

//const amount = 30000; //сумму превышающия 30000

//let goods = 0; //кол-во товара в корзине
let discount = 0;
const countThreePercent = 0.03; // скидка 3%
const countFifteenPercent = 0.15; // скидка 15%
const countTenPercent = 0.1; // скидка 10%


const calculate = (totalGoods, quantityItems, promotionalCode) => {
    let amoutGoods = totalGoods;
    if (quantityItems > 10) {
        discount = amoutGoods * countThreePercent; //скидка на товар 3%
        console.log(discount);
        amoutGoods -= discount;
        console.log(amoutGoods);
    }

    if (amoutGoods > 30000) {
        discount = (amoutGoods - 30000) * countFifteenPercent;
        amoutGoods -= discount;
        console.log(amoutGoods);
    }

    if (promotionalCode === 'MEHTED') {
        discount = amoutGoods * countTenPercent;
        amoutGoods -= discount;
        console.log(amoutGoods);
    }

    if (promotionalCode === 'G3H2Z1' && (amoutGoods - discount) > 2000) {
        discount = amoutGoods - 500;
        console.log(amoutGoods);
    }

    return totalGoods;
}

const res = calculate(20000, 16, 'G3H2Z1');

console.log(res);
