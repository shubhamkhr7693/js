// primitive     number, string, undefined, null, boolean

const outSideTemp = null
let userEmail;
 const id = Symbol('123')
 const anotherId = Symbol('123')
 //console.log(id === anotherId);
 

 const n = 9999999999999999n
 console.log(typeof n);
 

 // reference (Non primitive)

// Array, Objects, Functions


//array
const heros =["shaktiman","nagraj","doga"]
// objects
let myObj = {
    name : "dam",
    age: 23,
}

// function
const myFunction = function(){
    console.log("hello");
    
}


//_________________--------------memory 
// stack (Primitive), Heap (Non-Primitive)

//stack
let myName = "sjibisdbfsdli"
let anotherName = "asjfbas"
anotherName = "sisd"

console.log(myName);
console.log(anotherName);


//heap
let userOne={
    email : "sajbdfilj@s.com",
    upi:"usser@ybl"
}
let userTwo = userOne

userTwo.email = "sm@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

