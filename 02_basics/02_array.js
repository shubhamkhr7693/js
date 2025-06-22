const marvel_hero = ["thor","Ironman","spiderman"]
const dc_hero = ["superman","batman","flash"]

//marvel_hero.push(dc_hero)  // here both array are not merged they are just array inside array
//console.log(marvel_hero);
//console.log(marvel_hero[3][1]); //gives batman

//const allheros = marvel_hero.concat(dc_hero)
//console.log(allheros);    //it merges both arrays


const all_new_heros = [...marvel_hero, ...dc_hero]   // good method for merging arrays  (spreding)
//console.log(all_new_heros);


const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherarray.flat(3)
//console.log(real_another_array);


console.log(Array.isArray('shubham','sdc'));

console.log(Array.from('shubham'));   // convert string to array
console.log(Array.from({name: "shubham"}));  // it just print [] since it cant figure out

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500
let score6 = 600

console.log(Array.of(score1,score2,score3,score4,score5,score6));


// objects or events


