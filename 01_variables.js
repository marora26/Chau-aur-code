const accountID = 144553;
let accountEmail = "mayank@gmail.com";
var accountPassword = 12345;

accounCity = "Jaipur";

let accountState;

// accountID = 2; // NOt Allowed

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com";

accountPassword = 345678;

accountCity = "Bengaluru";

console.log(accountID);
console.log(accountEmail);

console.table([accountEmail, accountPassword]);
