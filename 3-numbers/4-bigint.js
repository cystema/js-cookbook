const biginterger = BigInt(10);
const anotherbiginterger = 10n;

const maxint = Number.MAX_SAFE_INTEGER;
console.log(maxint+4); //wrong answer

const newbigint = BigInt(maxint);
console.log(maxint+4); //right answer