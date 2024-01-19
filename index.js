'use strict';
const nameOfProdact = 'Утюг Atlanta ATH-5537 фиолетовый';
const quantityOfProdact = 20;
const prodactOfCategory = 'Техника для дома';
const priceOfProdact = 750;

console.log(nameOfProdact);

const total = quantityOfProdact * priceOfProdact;
console.log(total);

const user = prompt('Какое наименование товара вам нужно?', `${nameOfProdact}`);
const quantityOfGoods = Number(prompt('Какое количество товара у вас есть?', '20'));
console.log(typeof quantityOfGoods);

const categoryOfGoods = prompt ('Какая категория данного товара? ', `${prodactOfCategory}`);
const priceOfGoods = Number(prompt('Какая цена товара ', `${total} деревянных`));
console.log(typeof priceOfGoods);

const totalText = `На складе ${quantityOfProdact} единиц товара `;
const newTotalText = totalText.concat(`${nameOfProdact} на сумму ${total} деревянных.`);

console.log(newTotalText);








