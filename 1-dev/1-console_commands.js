obj = [abc, 1]

console.log("Error"); //red background

console.warn("Warning"); //yellow background

console.assert(1==3,"1 is Not Equal To 3"); //Assert expression, output message with stack trace

console.trace();       //display stack trace

console.count("label"); //number of times you've called this method with this label

console.dir(obj); //displays all properties of this object in an expandable tree like list

console.group(); //Starts a new group with title you supply, all subsequent messages are indented

console.groupEnd(); //End the group

console.time("label"); //Start timer with label

console.timeEnd("label") //End timer with label
 