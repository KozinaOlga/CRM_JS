'use strict';
/*
const str = 'Hello Word';
const newStr = str.replace('Hello Word','Привет мир');
console.log('newStr: ', newStr);
*/

const getReplace = string => {

    string = 'привет Mир';
    string = string.replace(string[7], 'м');

    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    
    return newString;
};

const result = getReplace('newString');
console.log(result);







