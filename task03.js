'use strict';

//const amount = 30000; //сумму превышающия 30000

let goods = 0; //кол-во товара в корзине
let discount = 0; // скидка



const calculate = (totalGoods, quantityItems, promotionalCode = null) => {
    let amoutGoods = totalGoods;
    if (quantityItems > 10) {
        const countThreePcocent = amoutGoods * 0.03; //скидка на товар 3%
        amoutGoods -= countThreePcocent; //стоимость товара - скидка
    }

    if (amoutGoods > 30000) {
        discount = (amoutGoods - 30000) * 0.15;
        console.log(discount);
    }

    if (promotionalCode === 'MEHTED') {
        discount = amoutGoods * 0.1;
        console.log(discount);
    }

    if (promotionalCode === 'G3H2Z1' && (amoutGoods - discount) > 2000) {
        discount = amoutGoods - 500;
        console.log(discount);
    }

    return totalGoods;
}

const res = calculate(50000, 5, 'G3H2Z1');

console.log(res);

