let arrayA = [1,2,3,4];
let arrayB = [1,2,3,4];

function areArraysEqual(arrayA, arrayB){
    if(!Array.isArray(arrayA) || !Array.isArray(arrayB)){
        return false;
    }
    else if (arrayA === arrayB){
        //if two reference pointing to the same array
        return true;        
    }
    else if (arrayA.length() !== arrayB.length()){
        return false;
    }
    else {
        for (let i = 0; i< arrayA.length(); ++i ){
            if(arrayA[i] !== arrayB[i]){
                return false;
            }
        }
    }        
}