function numberIsEven(newnum){
    return newnum%2 ===0;
}

const numbers = [1,2,3,4,5,6];
const evens = numbers.filter(numberIsEven);

let newevens = numbers.filter(number => number%2 === 0);