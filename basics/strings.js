const name="Vijay";
const repoCount=50;
// console.log(name+ repoCount +"Value");
//instead of using + for concatenation of strings
//make use of backtics and ${}
console.log(`Hello! my name is ${name} and I have repo count of ${repoCount}`);

const gameNmae= new String("Vijay") //this will print the same as the canst name but if we run this on console it will give object type and hence string is treated as object in js.
//new keyword is used to create or use objects in javascript. 

console.log(gameNmae[0]);
console.log(gameNmae.__proto__) // will give empty object but can be viewed in the console.

//Methods of the strings
console.log(gameNmae.length); 
console.log(gameNmae.toUpperCase());
console.log(gameNmae.charAt(0));
console.log(gameNmae.indexOf('V'));

const substr=gameNmae.substring(0,3); //here 0 is inclusive but 3 is not inclusive
console.log(substr)

// difference between slice and substring is that substring does not allow negative values but slice does.

const slicestr=gameNmae.slice(-4,2) //read this to understand
console.log(slicestr)

const substr1=gameNmae.substr(2,3);
console.log(substr1);
// substr takes two vales as arguments as (2,3) where 2 is the start value and 3 is the length. it extracts the part from the string.


//Syntax for replace-> replace("searchValue","ReplaceValue")
const replaceValue=gameNmae.replace("Vijay","Ayush");  // replaces Vijay with Ayush
console.log(replaceValue);



const newName="    Vijay    ";
console.log(newName); // it will print the white or extra spaces
console.log(newName.trim()); // it will remove the extra or the white spaces from the string.


const url="hhtps://vijay/portfolio/github.io";
console.log(url.replace('vijay','ayush')) // changes value from vijay to ayush in the url or any string you want
console.log(url.includes('vijay')) // checks if the string contains value or not.



const splitname="Vijay-Ayush-Rachit"
console.log(splitname.split('-'))
//split is used to convert a string to an array splitting the strings on the basis of separators as in the above case is "-".

let greet="hi "
console.log(greet.repeat(3)); // repeat(count);

//String padding methods
//padStart-> padStart(targetLength, "padString")
let position="9";
console.log(position.padStart(2,"6"));

//padEnd->padEnd(targetLength, "padString")
console.log(position.padEnd(2,"6"));
