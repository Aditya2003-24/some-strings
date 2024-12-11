let name = " john doe ";
let trimmedText = name.trim();
//the trin () method removes whitespace from both sides of a string.
console.log (trimmedText);


//splitting a string into an array.

const data = "this is string which will split into array";

const splittedDate = data.split(" ");

console.log(splittedDate);

//slice extracts the part of thhe string , it takes 2 parameters 1 st is the starting
//position and second is the ending pasition and ending position is not included.
let something = "this is java script programming language";
let newData = something.slice(0,4);
// console.log(newData);

//if you ommit the 2nd parameter it will slice the remaingin string
 newData = something.slice(14);
 newData = something.slice(-2,-4);



console.log(newData);

// substring
// substring is similar to slice but cannot take nagative values.
newData = something.substring(0,4);
console.log(newData);


//substr
//1st parameter starting position and
// 2nd parameter is length of string you wnat to extract.
newData = something.substr(0,20);
console.log(newData);

//replace
const mystring = "all that glitter is not gold,gold is precious";
let newText = mystring.replace("gold","silver");
 newText = mystring.replaceAll("gold","silver");
console.log(newText);