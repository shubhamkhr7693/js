//arrays
// () ->parenthesis [] square bracket {} curly brases

const MyArr =[0,1,2,3,4,5]
const myHeros = ['shaktiman','naagraj','doogo']

const MyArr2 = new Array(1,3,4,5)
//console.log(MyArr[0]);

MyArr.push(8)  //insert in the end
//console.log(MyArr);

MyArr.pop()
//console.log(MyArr);

MyArr.unshift(90)    // insert in start
//console.log(MyArr);

// MyArr.shift()  //delete from the starting
// console.log(MyArr);
// console.log(MyArr.includes(3));   // 3 is present or not in Myarr
// console.log(MyArr.indexOf(3));

// const newArr = MyArr.join()

// console.log(MyArr);
// console.log(newArr); // but these is a string

// slice ---> not manipulate original array
//splice ---> Manipulate original array

const Myn1 = MyArr.slice(1,3)

console.log(Myn1);
console.log("B ", MyArr);

const myn2 = MyArr.splice(1,3)
console.log("c ",MyArr);
console.log(myn2);






