const age1 = 18;
age1 > 18 ? console.log("you are allowed") : console.log("you are not allowed.!");

//tick 

console.log(`I like to drink ${age1 > 18 ? "wine" : "water"}`);

let bill = 430;
let tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
console.log(`the bill was ${bill} and tip was ${tip} and total is ${bill + tip}`);