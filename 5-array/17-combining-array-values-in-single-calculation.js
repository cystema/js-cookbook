//reduce method with callback function

const reducerFunction = function(accumulator, element){
    const newTotal = accumulator + element;
    return newTotal;
};

const numbers = [1,2,3,4,5,6,7];
const total = numbers.reduce(reducerFunction, 0);
console.log(total); //sum of all numbers 