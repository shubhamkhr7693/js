//const tinderUser = new Object()   //songleton object
const tinderUser = {}   //non singleton object

//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "samm"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email : "dragon@gmail.com",
    full_name : {
          userfullname : {
           firstname : "shubham",
           lastname : "kharsodiya" 
          }
    }
}
//console.log(regularUser);
//console.log(regularUser.full_name.userfullname.lastname);


// merging the objects

const obj1 ={1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

//const obj3 = {obj1, obj2}
//m1
//const obj3 = Object.assign({},obj1,obj2)  // without {} it also merge but if we assign {} than is definitely merge
// {} empty object and obj12 source code

const obj3 = {...obj1,...obj2}
//console.log(obj3);


//inside array objects
const users = [
    {
        name : 'hello',
        email : 's@gmail.com'
    },
    {
        name : 'hello',
        email : 'sk@gmail.com'
    },{
        name : 'hello',
        email : 's@gmail.com'
    },{
        name : 'hello',
        email : 's@gmail.com'
    },{
        name : 'hello',
        email : 's@gmail.com'
    }
]

//console.log(users);
//console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // make every entries as a array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//is loggedIn present or not



// destructoring

const course = {
    coursename : 'js in hindi',
    price : '999',
    courseInstructor : 'shubham'

}
//course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor);


//destrucring the object using reat

// const navbar = (props.company) => {

// }
// navbar(company = "shubham")


// calling API from Json
// {
//     "name": "shubham",
//     "coursername": "Java Script"
// }

