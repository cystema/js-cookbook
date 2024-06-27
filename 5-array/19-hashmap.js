const products = new Map();

products.set('P1', 'P1 Name');
products.set('P2', 'P2 Name');

//Get
products.get('P2');

//Delete
products.delete('P2');

//Size
console.log(products.size);


//Always use set(). never =.

//Create Array from Hashmap
const arraynew = Array.from(products); 