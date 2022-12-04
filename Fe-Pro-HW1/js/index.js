// alert('Hello');


// Number Data


let numberValue1 = 30;
let numberValue2 = 100;
let numberValue3 = -2;
let floatValue = 1.25;

console.log('test_result1', numberValue1 * numberValue3);
console.log('test_result2',numberValue2 / floatValue); 
console.log('Sum1', numberValue1 * numberValue3 + numberValue2 / floatValue);

// console.log('Max value', Number.MAX_VALUE);
// console.log('Min value', Number.MIN_VALUE);


// Text Data 

let Name = 'Alec';
let SecondName = "Baldwin";

console.log(SecondName + ' ' + Name);

document.write(SecondName + ' ' + Name + "<br/>");
document.write('<br/>' + Name);
document.write("<br/>");
document.write(SecondName);


// Boolean Data 


let trueCountry = 'uk';
let falseCountry = 'ru';
let uk = prompt('Are You live in true country:' );
let ru = prompt('Are You live in true country:' );
let res = trueCountry == uk;
let res2 = falseCountry == ru;
console.log('Is your country true?', res);
console.log('Is your country true?', res2);

// ===============

let x = 21;
let y = 35;
console.log('Value1', x > 20 && y > 30);

let a = 19;
let b = 35;
console.log('Value2', a > 20 && b > 30);

let r = 5;
let t = 100;
console.log('Value2', r > 20 || t > 30);

