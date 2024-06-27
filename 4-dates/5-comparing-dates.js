const oldDate= new Date(2024, 1, 1);
const newDate = new Date(2026, 1 ,1);

if (newDate > oldDate){
    //true
}

const date1 = new Date(2024, 1, 1);
const date2 = new Date(2026, 1 ,1);

console.log(date1 === date2); //false, different objects


console.log(date1.getTime() === date2.getTime()); //true