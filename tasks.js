'use strict';

//Вторая задача

const rain = Math.random();
console.log(Math.round(rain));


if (rain <= 1 ) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!: ', 'Дождя нет!');
    }


//Третья задача min265

let math = 85;
let russian = 78;
let informatics = 95;
let sum = math + russian + informatics;
console.log('sum: ', sum);
let min = 265;
let total = min - sum;
console.log('min: ', min);


const student = prompt('Какоя общий результат по экзамену?');
if (student >=265) {
    alert('Поздравляю, вы поступили на бюджет!');
} else {
    alert(`Вам нехватило ${total} балов`);
}



//Четвертая задача 
const atm = 1000 % 100;
const user = prompt('Какую суммы вы хотите снять?');

if (atm === 100 && atm % 100) {
    console.log('Банкомат выдаст деньги');
} else {
    console.log('денег нет');
}



