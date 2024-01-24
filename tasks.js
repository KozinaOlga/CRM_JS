'use strict';

//Вторая задача

const rain = Math.random();
console.log(Math.round(rain));


if (rain >= 0.5 ) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!: ', 'Дождя нет!');
    }

//второй вариает второй задачи
const rain_ = (Math.random() >= 0.5 ? console.log('Пошёл дождь. Возьмите зонт!') : console.log('Дождя нет!'));



//Третья задача min265

let math = 85;
let russian = 78;
let informatics = 95;
const sum = math + russian + informatics;
console.log('sum: ', sum);

//один вариант
const student = prompt('Какоя общий результат по экзамену?');
if (student >=265) {
    alert('Поздравляю, вы поступили на бюджет!');
} else {
    alert(`Вам нехватило ${total} балов`);
}

//второй вариант
const user = sum >=265 ? alert('Поздравляю, вы поступили на бюджет!') : alert(`Вам нехватило балов`);




//Четвертая задача 

let atm = 520;
const users = prompt('Какую суммы вы хотите снять?');

if (atm % 100 === 0) {
    console.log('Банкомат выдаст деньги');
} else {
    console.log('денег нет');
}





