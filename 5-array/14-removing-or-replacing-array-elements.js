const numbers = [1,2,3,4,5,6];

const possix = numbers.indexOf(6);

const numbers_slice = [...numbers.slice(0,possix),...numbers.slice(possix+1)];