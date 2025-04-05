let name="Vijay";
let second_name="Raj";
let profession="Software engineer"
// console.table([name, second_name, profession])  // in index columns-> 0, 1, 2
// console.table({name, second_name, profession})  // in index column-> name, second_name, profession.

let str="33abc";
let strInNum=Number(str);
// console.log(strInNum);   //Nan
// console.log(typeof strInNum);  // number

let val=null;
let valInNum= Number(val);
// console.log(valInNum);  //0
// console.log(typeof valInNum);  //number

let val1=undefined;
let vInNum=Number(val1);
// console.log(vInNum);  //Nan
// console.log(typeof vInNum);  //number

if (new String("")) {
    // console.log("This runs!"); // even though the string is empty this will run as the condition is true because of the object in the if condition
  }

  
let str2 = "JavaScript";
str2.substring(0, 4); // "Java"
str2.substring(4);    // "Script"
str2.substring(4, 0); // "Java" (swaps values)
str2.substring(-3);   // "JavaScript" (negative treated as 0)
  

let str3 = "JavaScript";

str3.slice(0, 4);     // "Java"
str3.slice(4);        // "Script"
str3.slice(-6);       // "Script"
str3.slice(-6, -3);   // "Scr"
str3.slice(4, 0);     // "" (no swap)

let str4= "Chandigarh" //-> h->0, r->1, a->2, g->3, i->4, d->5, n->6, a->7, h->8, c->9.
// console.log(str4.slice(-1));
// console.log(str4.slice(-9));
// console.log(str4.slice(-6,-2));

/************Numbers*****************/
const num_methods=new Number(40000000);
// console.log(num_methods);
// console.log(typeof num_methods);
// console.log(num_methods.toLocaleString("en-IN")) //converts the number into Indian System.

// console.log(typeof Math);
// console.log(typeof Date);

/******Date*********** */
let myDate= new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

let myTimeStamps= Date.now();
console.log(myTimeStamps)
console.log(myTimeStamps.toLocaleString("en-IN"))

console.log(typeof myTimeStamps)
console.log(typeof myDate);







