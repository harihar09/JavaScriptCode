// will help us to identify errors
'use strict';
let hasLicense = true;
let canDrive = false;
if (hasLicense) {
    canDrive = true;
}
console.log(canDrive);

// here use strict mode will throw error on console 
const privateIsNotAllowed = 233;

// function in js
logger();

function logger() {
    console.log("welcome to function in js");
}
logger();
// function - declaration 
function juiceProcessor(appels, oranges) {
    console.log(appels, oranges);
    return `juice with appels ${appels} and oranges ${oranges}`;
}
console.log(juiceProcessor(2, 1))
const num = Number('20');

// function expression - nameless function

let message = function (message) {
    return `hi welcome to ${message}`;
}
console.log(message("function expression"));

//Arrow function

let currentYear = 2023;
let age = birthYear => currentYear - birthYear;
console.log(`Age is ${age(1991)}`);
let currentAge = age(1991);
console.log(`Current age is ${currentAge}`)

// calculate the age and then expiry date

let expiryDate = birthYear => {
    let age1 = age(birthYear);
    let expiryDate = 65 - age1;
    return expiryDate;
}

console.log(`Expiry date is ${expiryDate(1991)}`)
