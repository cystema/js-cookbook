const newdate = "12/20/2021";

const datearray = newdate.split("/");

const year = datearray[2];
const month = datearray[1];
const day = datearray[0];


const eventdate = new Date(year, month-1 , day);