console.log(2>1);


//cosnole.log(null>=0) wil give true while nul==0 or null>0 will give false.
//the reason for the above is because equality and comparison work differently 
//the comparison convert the null to number i.e., 0 and compare accordingly.

//=== strictly checks the equality


//js is dynamicaaly typed language.

//datatypes summary=> 
    //Primitive=> Strings, Numbers, Boolean, Null, Undefined, Symbol, BigInt.
    //Non Primitive or Referened type=> Arrays, Objects, Functions.

//Memory optimization injs
    //Stack and Heap 
    //Stack-> Primitive-> creates a copy means changes are made to the copy version
    //Heap-> Non primitive-> changes are made directly to the original memory or value.
//Example
let myName="Vijay";
let myNickName=myName;
myNickName="Vishu";
console.log(myName);
console.log(myNickName);

let userOne ={
    name:"Ayush",
    age:"24",
}
let userTwo=userOne;
userTwo.name="Vijay";
console.log(userOne.name);
console.log(userTwo.name);

// So from the above example we can see that 
//in case of primitive datatype used in the variable the value is stored in the stack 
//while in case of the referenced or non primitive datatype the value is stored in heap 
//and accordingly the changes in the data is applied.




//Symbol datatype=> const mailId=Symbol("poonampandey69@gmail.com")
//const id=Symbol("123");
//Suppose we have
    //const id="123";
    //const anotherId="123"
    //console.log(id===anotherId) will result in false although both have same values
    //because symbol uniquely defines them.

//Arrays
let heroes=["Mahadev", "Hanuman", "Krishna"]

//objects
let obj={
    name: "Vijay",
    age:21,
    Uni:"CU",
}

//functions
let fn1=function(){
    console.log("Hello Function");
    
}