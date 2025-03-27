let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)  // object

let createdDate=new Date(2023,0,23); //months in js is started from 0 as january.
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleDateString());  // similar to LocaleString but removes the time from it.
// console.log(createdDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(Math.floor(Date.now()/1000))  //converts the ms to seconds
console.log(myTimeStamp);

// console.log(createdDate.getTime());  //converts the date to milliseconds
let newDate= new Date()
console.log(newDate.getMonth()) // month value in numbers staring from 0 as jan
console.log(newDate.getDay());  // provides day count starting with Monday as 1

console.log(newDate.toLocaleString('Daefault', {
    weekday: "long",
    
})) // there are various functions for the localestring to use in the form of objects.