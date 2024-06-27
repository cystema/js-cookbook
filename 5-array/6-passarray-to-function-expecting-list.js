const numbers = [1,2,3,4,5,6,7,8];

const maxnnum = Math.max(numbers); // NaN

//However
const newmaxnum = Math.max(...numbers); //8
const anothermaxnum = Math.max(12,34,56,...numbers,346); //346