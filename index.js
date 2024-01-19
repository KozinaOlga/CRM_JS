'use strict';
// const nameOfProdact = 'Утюг Atlanta ATH-5537 фиолетовый';
// const quantityOfProdact = 20;
// const prodactOfCategory = 'Техника для дома';
// const priceOfProdact = 750;

// console.log(nameOfProdact);

let quantityOfGoods = 20;
let priceOfGoods = 750;


const total = quantityOfGoods * priceOfGoods;
console.log(total);

const nameOfProdact = prompt('Какое наименование товара вам нужно?', 'Утюг Atlanta ATH-5537 фиолетовый');
const quantityOfProdact = Number(prompt('Какое количество товара у вас есть?', '20'));
console.log(typeof quantityOfProdact);

const prodactOfCategory = prompt ('Какая категория данного товара? ', 'Техника для дома');
const priceOfProdact = Number(prompt('Какая цена товара ', `${total} деревянных`));
console.log(typeof priceOfGoods);

const totalText = `На складе ${quantityOfProdact} единиц товара `;
const newTotalText = totalText.concat(`${nameOfProdact} на сумму ${total} деревянных.`);

console.log(newTotalText);








