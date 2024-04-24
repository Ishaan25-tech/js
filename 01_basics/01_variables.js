const accountId = 144553
let accountEmail = "ishaanoberoi123@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "hc@hc.in"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])