const statevalues = [12,54,123,45,56,34];
let [a,b,c,d,e,f] = statevalues;

console.log(a); //12


[a,b,c,...others] = statevalues;
//others = 45,56,34

[a,b,c,,,f] = statevalues;
//f=34