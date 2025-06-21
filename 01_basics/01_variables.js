const accountId = 14453     // not changable
let accountEmail = "shubham@gmail.com"   
var accountPassword = "12345"     // {} --> scope issue with these variables once change it will change same
accountCity = "Jaipur"
let accountState

//accountId=1

console.log(accountId);
console.log(accountCity);
console.log(accountEmail);
console.log(accountPassword);


console.table([accountCity,accountEmail,accountId,accountPassword,accountState])

