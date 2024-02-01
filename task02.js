'use strict';
/*
const str = 'Hello Word';
const newStr = str.replace('Hello Word','Привет мир');
console.log('newStr: ', newStr);
*/

const getReplace = string => {

    let str = 'привет Mир';
    str = str.replace(str[7], 'м');

    const newString = str.charAt(0).toUpperCase() + str.slice(1);
    
    return newString;
};

const result = getReplace();
console.log(result);







