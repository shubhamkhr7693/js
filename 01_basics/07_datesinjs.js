// Dates

let Mydate = new Date()
//console.log(Mydate);
//console.log(Mydate.toString());

// console.log(Mydate.toDateString());
// console.log(Mydate.toISOString());
// //console.log(Mydate.toJson());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toLocaleTimeString());
// console.log(typeof Mydate);

let myCreatedDate = new Date(2023, 0 , 23,5,2,2)  //month start from zero
//console.log((myCreatedDate.toDateString()));
//console.log((myCreatedDate.toLocaleString()));


// let newDate = new Date("2023-01-14")  // here month start from 1
// console.log(newDate.toLocaleString());

let indianewDate = new Date("12-30-2000")  // here month start from 1
// console.log(indianewDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(indianewDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());   // here month start from 0 for making it correct just add 1
// console.log(newDate.getDate());

newDate.toLocaleDateString('default',{
    weekday : 'long'
})
//console.log(newDate);
