let jonas = {
    firstName: "Adam carry",
    lastName: "Mark hughes",
    friends: ['tom', 'jerry']
}

console.log(jonas);
// get object property using . operator
console.log(jonas.firstName, jonas.lastName)

// get object property using [] operator, it can be computed using an expression
console.log(jonas['firstName'])
console.log(jonas['lastName']);
const nameSuffix = 'Name';
console.log(`FirstName ` + jonas['first' + nameSuffix]);
console.log("Last Name " + jonas['last' + nameSuffix]);

const returnVal = prompt(`Please select one of the below option 
 firstName,lastName,friends`);
console.log(returnVal);
// this will be undefined as returnVal is not jonas property 
console.log(jonas.returnVal);

// this will evaluate the expression in runtime and get the value
console.log(jonas[returnVal]);

jonas.location = 'pune';
jonas['age'] = 20;
console.log(jonas);
// undefined is considered as false value in javascript
if (jonas[returnVal]) {
    console.log(jonas[returnVal]);
} else {
    console.log('wrong value');
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);