const newarray = ["a", "b", "c", "d"];

for(const item of newarray){
    console.log(item);
}


//ForEach
//array.forEach(callback(currentValue, index, array), thisArg)

//const array = [1, 2, 3, 4, 5];
// array.forEach((element, index) => {
//     console.log(`Element: ${element}, Index: ${index}`);
// });
  

newarray.forEach(function(item, index, array){
    console.log(item);
});


let animals = ["lion", "tiger", "elephant"];
animals.forEach(function(animal, index, array){
    console.log(animal);
});


//Arrow syntax
animals.forEach(() => {
    console.log(animal);
});


animals.forEach(animal => {
    console.log(animal);
});



//For Loop:

for (let i =0; i<animals.length(); ++i){
    console.log(animals[i]);
}