const score =400

//console.log(score);


const balance = new Number(100)
//console.log(balance);


//console.log(balance.toString().length);
//console.log(balance.toFixed(3));  //giving a number in decimal digits

const otherNumber = 222.435
//console.log(otherNumber.toPrecision(3)); // toPrecision()   *** 2.435->2.44, 22.435->22.4,222.435->222


const zeros =1000000
//console.log(zeros.toLocaleString('en-IN'));


// ----------------Maths-----------

//console.log(Math);

//console.log(Math.abs(-4));
//console.log(Math.round(9.5));  // round of value
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.5));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(1,2,3,4,5));

//console.log(Math.random());
//console.log(Math.random()*10+1);


//console.log(Math.floor(Math.random()*10)+1);

const min =10
const max = 20
// ***********8
console.log(Math.floor(Math.random()*(max - min +1)) + min);
