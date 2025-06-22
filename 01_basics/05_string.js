const name = "shubham"
const repoCount = "4"

//console.log(name + repoCount + "value"); // outdated

// string interpolation
//console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);   // it directly inject the variable values


//another method to define string
const gameName = new String('shubhamdragon')
//console.log(gameName);


//console.log(gameName[0]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());   // but these string not change originally in uppercase its just make a copy
// console.log(gameName.charAt(3));  // 3rd pos which char exist
// console.log(gameName.indexOf('q'));  //index of particular char


const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-7,-1)
//console.log(anotherString);


const stringOne = "       shub ham           "
//console.log(stringOne);
//console.log(stringOne.trim()); // remove un-used spaces



const url = "https://shubham.com/sam%20khr"
//console.log(url.replace('%20','-'));
console.log(url.includes('sam'));

