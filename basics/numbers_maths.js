const position=new Number(69);
//console.log(position)

//study about the number methods.

//toFixed -> return a string
//console.log(position.toFixed(2)); // 2 means upto the given digits.

//toPrecision -> returns a string
const deciNum=23.0969
//console.log(deciNum.toPrecision()); //study about this in detail.

const hundreds=1000000;
//console.log(hundreds.toLocaleString());  //provides the number in USA number system.
//but we can also convert it to the Indian number system as
//console.log(hundreds.toLocaleString('en-IN'));// it will convert the US based number system to Indian system

//***********Math*************** 
//as in case of strings and numbers Math also have many methods.

//console.log(Math.abs(-4)); // converts negative to positive.

//console.log(Math.round(4.5));// converts the num to whole number

//console.log(Math.ceil(4.01)); //takes upper value->5

//console.log(Math.floor(4.99)); //takes lower value->4

//console.log(Math.random()); //random value between 0 and 1.


//formula for getting values between 10 to 20;
const min=10;
const max=20;
//console.log(Math.floor(Math.random()*(max-min+1)+min));

let x=Math.floor(Math.random()*10)+1;
console.log(x);


//***********Number Properties**************************
//Number.MAX_VALUE - Largest possible number.
//Number.MIN_VALUE - Smallest possible number.
//Number.POSITIVE_INFINITY - Represents infinity.
//Number.NEGATIVE_INFINITY - Represents negative infinity.
//Number.NaN - Represents "Not-a-Number".
