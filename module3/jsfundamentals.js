/*// 
// Q1
1, 10
console.log("" + 1 + 0);
//0, -1
console.log("" - 1 + 0);
//false
console.log(!true);
//false, 1
console.log(true + false);
// 2
console.log(6 / "3");
//6
console.log("2" * "3");
//9px
console.log(4 + 5 + "px");
//$9, $45
console.log("$" + 4 + 5);
//2
console.log("4" - 2);
//2px, nan
console.log("4px" - 2);
//-4 , -9 5
console.log(" -9 " + 5);
//-14
console.log(" -9 " - 5);
//1
console.log(null + 1);
//1 , nan
console.log(undefined + 1);
//true
console.log(undefined == null);
//false
console.log(undefined === null);
//-2
console.log(" \t \n" - 2);

//Q2

let three = "3";
let four = "4";
let thirty = "30"; // threezero
console.log(thirty);
//what is the value of the following expressions?
let addition = three + four; //7, 34
console.log(addition);
let multiplication = three * four; //12
console.log(multiplication);
let division = three / four; // 0.75
console.log(division);
let subtraction = three - four; // -1
console.log(subtraction);
let lessThan1 = three < four; //true
console.log(lessThan1);
let lessThan2 = thirty < four; //false (thirty wont run), true
console.log(lessThan2);

//Q3

if (0) console.log("#1 zero is true"); // wont print, false value
if ("0") console.log("#2 zero is true"); // print, true value due to it being a non empty string
if (null) console.log("null is true"); // not print , false value
if (-1) console.log("negative is true"); // print , true value due to it being a non zero value
if (1) console.log("positive is true"); // print ,  true value same as neg

Q4//

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
let price = (result += 10 ? "less than 10" : "greater than 10");
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }
console.log(price);
// X += Y is X = X + Y

//Q5

// function getGreeting(name) {
//   return "Hello " + name + "!";
// }
const name = "josh";
const getGreeting = "Hello" + name + "!";
console.log(getGreeting);

const name = "josh";
const getGreeting = () => console.log("Hello" + name + "!");

getGreeting();

//Q6

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },

  // getCatchPhrase(person) {
  //   return person.numFingers === 6
  //     ? "You Killed my farther. Prepare to die."
  //     : "Nice to meet you.";
  // },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You Killed my farther. Prepare to die."
      : "Nice to meet you.",
};
inigo.greeting(westley);
inigo.greeting(rugen);


// Q7

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    console.log("Final score is " + this.score);
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTimeWithFouls() {
    console.log("halftime score is " + this.score + " Fouls: " + this.fouls);
    return this;
  },
  fullTimeWithFouls() {
    console.log("Halftime score is " + this.score + " Fouls: " + this.fouls);
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .fullTime()
  .foul()
  .halfTimeWithFouls()
  .fullTimeWithFouls();

  
//Q8

function printObjectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj);
    }
  }
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const newYork = {
  name: "New York",
  population: 8_336_817,
  state: "NY",
  founded: "1624",
  timzone: "America/New_York",
};

printObjectProperties(sydney);
printObjectProperties(newYork);


//Q9

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = [...teamSports];
moreSports.push("Soccer");
moreSports.unshift("Tennis");
console.log(teamSports);
console.log(moreSports);

let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "Pup";

console.log(dog1);
console.log(dog2);

let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = { ...cat1 };
cat2.name = "Luci";

console.log(cat1);
console.log(cat2);

*/
// Q10

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human;
}

Person.prototype.canDrive = function () {
  return this.age >= 16;
};

const person1 = new Person("Britney", 25);
const person2 = new Person("Tiffany", 22);

console.log(person1.name, person1.age);
console.log(person2.name, person2.age);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 16;
  }
}

const person3 = new PersonClass("Sarah", 23);
console.log(person3.name, person3.age);

console.log(person1.canDrive());
console.log(person2.canDrive());
console.log(person3.canDrive());
//d
