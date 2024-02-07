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
        discount = amoutGoods * countThreePercent;
        //скидка на товар 3%
        //console.log(discount);
        amoutGoods -= discount; //общая сумма корзины за минусом скидки
        //console.log(amoutGoods);
    } 
    
    if (amoutGoods > 30000) {
        discount = (amoutGoods - 30000) * countFifteenPercent; //скидка 15%
        amoutGoods -= discount;
        //console.log(discount);
    } 
    
    if (promotionalCode === 'MEHTED') {
        discount = amoutGoods * countTenPercent; //скидка в 10%
        amoutGoods -= discount;
        //console.log(amoutGoods);
    } 
    
    else if (promotionalCode === 'G3H2Z1' && (discount = ((amoutGoods * countThreePercent) + ((amoutGoods - 30000) * countFifteenPercent) > 2000))) {
        amoutGoods -= 500;
        //console.log(discount);
        //console.log(amoutGoods);
    } 
    
    return amoutGoods;
}

const res = calculate(40000, 11, 'G3H2Z1');

console.log(res);

