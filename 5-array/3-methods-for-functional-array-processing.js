const numbers = [1, 2, 3, 4, 5];

//Change every arary element - map()
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8, 10]

//See if all elements meet a specific condition - every()
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);  // Output: true

//See if at least one elements meets a condtion - some()
const hasOdd = numbers.some(num => num % 2 !== 0);
console.log(hasOdd);  // Output: true

//Find array elements matching your criteria - filter()
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // Output: [2, 4]

//Reorder an array - sort()
const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits);  // Output: ['apple', 'banana', 'cherry', 'date']

// Sorting numbers
numbers.sort((a, b) => a - b);  // For numerical sort
console.log(numbers);  // Output: [1, 2, 3, 4, 5]

//Use all the values of an array in one calculation - reduce()
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);  // Output: 15

// Another example: Finding the maximum value
const max = numbers1.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);

console.log(max);  // Output: 5

