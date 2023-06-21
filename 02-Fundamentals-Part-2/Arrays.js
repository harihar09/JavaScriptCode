// Arrays in js

let friends = ['clare', 'peter', 'john'];
console.log(friends);
// can't reassigned array reference if it's constant
friends = ['Michael', 'Rob', 'Marry'];
console.log(friends);

let arr = new Array(1, 2, 3, 'Michael');
console.log(arr);

let name = 'pauline';
let john = [name, 23, friends];
console.log(john);

// calculate the age

let getAge = birthYear => 2023 - birthYear;
let ages = [1990, 1992, 1998, 2004];

// iterate each value from array and get age
ages.forEach(element => {
    console.log(getAge(element));
});

// array methods 
// insert the element at the end of array
let friendsLength = friends.push('katrina');
console.log(friends, "length " + friendsLength);
// remove the last element from array
let removedVal = friends.pop();
console.log(friends, removedVal)
let ans = friends.filter(val => val.startsWith('M'));
console.log("Ans => " + ans);

//insert at beginning

friends.unshift('kim');
console.log(friends);

// remove first

console.log(friends.shift(), friends);
// IndexOf - return -1 if it doesn't found
console.log(friends.indexOf('Rob'), friends.indexOf('Katrina'))

// includes - true if found else false

console.log(friends.includes('Rob'), friends.includes('Marry'), friends.includes('Kat'))

