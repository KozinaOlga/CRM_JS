'use strict';


// Первая задача
//let income = 200000;
//let result = 0;

/*
const user = Number(prompt('Какой у вас доход?'));

if (income < 15000) {
    result = Math.trunc(income * 0.13);
} else if (income >= 15000 && income < 50000) {
    result = Math.trunc(income * 0.2);
} else if (income >= 50000) {
    result = Math.trunc(income * 0.3);
}
console.log(result);

*/
//вторая задача

let income = 100000;
let result = 0;

if (income < 15000) {
    result = Math.trunc(income * 0.13); 
} 

if ((income >= 15000) && income < 50000) {
    result = Math.trunc(((income - 15000) * 0.2) + (15000 * 0.13));
}

if (income >= 50000) {
    result = Math.trunc(((income - 65000) * 0.3) + (50000 * 0.2) + (15000 * 0.13));
}

console.log(result);