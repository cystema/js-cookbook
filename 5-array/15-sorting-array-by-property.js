const newArray = [
    { firstname: 'David', lastname: 'Wilson' , age: 24},
    { firstname: 'Laura', lastname: 'Davis'  , age: 34},
    { firstname: 'Emily', lastname: 'Brown'  , age: 44},
  ];

newArray.sort(function(a,b){
    if(a.age < b.age){
        return -1;
    }
    else if (a.age > b.age){
        return 1;
    }
    else {
        return 0;
    }
});

console.log(newArray); //David, Laura, Emily

//other way
newArray.sort(function(a,b){
    return a.age - b.age;
});

//another way
newArray.sort((a,b) => a.age - b.age);