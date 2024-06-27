function testEven(num){
    return num %2 === 0;    
}

const numbers = [1,2,3,4,5,6];
let result = numbers.some(testEven); //some elements
result = numbers.every(testEven); //every element


