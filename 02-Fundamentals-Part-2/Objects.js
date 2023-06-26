let jonas = {
    firstName: "Adam carry",
    lastName: "Mark hughes",
    friends: ['tom', 'jerry'],
    birthYear: 1991,
    age,
    hasDriverLicense: false,
    // function expressions in js
    getAge: function () {
        return this.age = 2023 - this.birthYear;
    },
    // summary function 
    getSummary: function () {
        return `${this.firstName} is ${this.age} years old and has ${this.hasDriverLicense ? 'a' : 'no'} license`;
    }
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

console.log('Age ' + jonas.getAge());
console.log('Jonas age using this.age property : ' + jonas.age);
console.log(jonas.getSummary())



const mark = {
    fullName: 'Mark Miller',
    mass: 100,
    height: 3.69,

    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
};

const john2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 5.95,

    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
};

//console.log(`${john2.fullName} BMI (${john2.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI})`);
if (mark.calcBMI() > john2.calcBMI()) {

    console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john2.fullName} (${john2.calcBMI()})`);
} else {
    console.log(`${john2.fullName} BMI (${john2.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI()})`)
}

