var unknownVar = "abcd";

//check if type is string
if (typeof unknownVar === 'string'){
    console.log("unknownVar is a string")
}

//check if type is string and length>0

if(typeof unknownVar === 'string' && unknownVar.length>0){
    console.log("unknownVar is string and length is greater than zero");
}


//reject strings made up of whitespace

if (typeof unknownVar === 'string' && unknownVar.trim().length > 0){
    console.log("string is whitespace free and nonempty");
}

//String object
const uknownVar1 = new String("abcd");
if(typeof unknownVar === 'string' || String.prototype.isPrototypeOf(uknownVar1)){
    console.log("string primitive or wrapped in object");
}