//concat an empty string
const someNum = 32;
const someStr = someNum + '';

//toString
const someStr2 = someNum.toString();

//utility
const newNum = 1234.1234;
const fixedStr = someNum.toFixed(2); //2 decimal points, 1234.12
const precisionStr = someNum.toPrecision(5); //5 signifiact digits, 1234.0
const scientificStr = someNum.toExponential(2); //2 decimal plates, 1.23e+3

//for locale specific or formatting needs,
const formatter = new Intl.NumberFormat('en-US',{style:'currency', currency:'USD'});
const nextNum = 234.35;
const moneyStr = formatter.format(nextNum);