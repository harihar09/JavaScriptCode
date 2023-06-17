//let num = 10;
//console.log(num + 20);
let flag = true;
if (!flag)
    alert("true");
console.log(typeof flag);
console.log(typeof 20);
console.log(typeof "string")
flag = "string value";
//changed to String from boolean
console.log(typeof flag)
// undefined - empty value
let year;
console.log(year);
// null type is object in js
console.log(typeof null);

// use let in case of mutable value
//use const in case of fixed value and can't be empty
const birthDate = 1990;
// can't be reassigned as it's constant
//birthDate = 1991;
console.log(birthDate);
// var is same as let but it has functional scope and let has
// a block scope
var variable = "100";
console.log(variable)
console.log(variable, variable + 200, 2 ** 4);
//2**4 = 2 to the power 4 
// comparison 
console.log(20 > 10);
if (20 < 10)
    alert("20 is greater than 10");
let ans = 20 >= 20;
if (!ans) {
    alert("ans");
}

let x, y;
x = y = 25 - 10 - 5;
console.log("x = " + x + "," + "y = " + y);

// Strings

const firstName = "john";
const lastName = "don";
// can't be reassigned 
//lastName = "carry";
console.log(firstName, lastName)
// use backtick for dynamic value using `${..}`
const updatedFirstName = `I'm ${firstName}`;
console.log(updatedFirstName)
console.log("strings in \n\ new lines\n\ with old syntax");
console.log(`strings
with new 
lines using backtick`);
// if else
let age = 19;
let isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("Allowed");
}
// ternary operator 
console.log(10 >= 10 ? true : false);

// == if required it convert and then check
// === it doesn't convert any value 
let num = 10;
if (num === 10)
    console.log(" strict ===");
if (num == 10)
    console.log("loose ==")

// prompt

let promptVal = prompt("value please?");
console.log(promptVal);
console.log(typeof promptVal);

// type conversion
console.log(typeof Number("1990"));
let number = 100;
// number to string
console.log(String(100), number, typeof String(number), typeof number)

let string = "200";
console.log(Number(string) + 10, string + 10)

// '-' string to number 
console.log('20' - 10);
//'+' - concatenation operator - number to string
console.log('20' + 10);
// '*' or '/' - converts string to number
console.log('10' * 2);

let n = '10' + 1;
console.log(typeof (n));  // string
n = n - 1;
console.log(typeof (n));  // number
console.log(n);

console.log('10' - '4' - '3' - 2 + 1 + '2');

// falsy values - 0,'',undefined,null NAN
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean('undefined'))
console.log(Boolean())
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean({})) // empty obj

// use of truthy and falsy in if else
let money = 100;
if (money) {
    console.log("don't spend it");
} else {
    console.log("get a job");
}