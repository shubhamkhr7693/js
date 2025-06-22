//singleton   ..... in literals there is no singleton
// if object made with constructor than it is a singleton

// singleton     object.create

//object literals
const mysym = Symbol("key1") 

const JsUser = {
    name : "shubham",     //name ----> key, shubham ----> value
    age:34,
    location: 'indore',
    email : "shubham@apple.com",
    isLoggedIn: true,
    lastLoginDays: ['monday','sunday'],
     "full name" : 's k',
    // mysym: "mykey1",
     [mysym]: "key2"

}


//console.log(JsUser.age);        accesing the object key-value
// console.log(JsUser['age','email']);
// console.log(JsUser['full name']);
// console.log(JsUser['mysym']);  // but here it take us a string not as a symbol

// console.log(typeof JsUser.mysym);

JsUser.email = 'shuihbasm@gmail.com'

// if we want to freeze the value
//Object.freeze(JsUser)
JsUser.email= 'js@mail.sos'
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello hpe");
    
}
console.log(JsUser.greeting);   // just function reference we get
console.log(JsUser.greeting());



JsUser.greeting2 = function(){
     console.log(`hello user, ${this.age}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
