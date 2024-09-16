/*

//Q1

// function makeCounter() {
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

//let counter2 = makeCounter();

// function makeCounter(startFrom) {
//   let currentCount = startFrom;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

function makeCounter(startFrom, increamentBy = 1) {
  let currentCount = 0;
  return function () {
    currentCount += increamentBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2
let counter2 = makeCounter(10, 5);
counter1(); // 1
counter1(); // 2


//Q2
// the test will print in reverse to how it is written as the delay time decreases as it goes down the script.

const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
setTimeout(delayMsg, 10000, "#5: Delayed by 10s");

let timeoutId = setTimeout(delayMsg, 10000, "#5: Delayed by 10s");
clearTimeout(timeoutId)


//Q3

function printMe(msg) {
  console.log(`printing debounced message; ${msg}`);
}

function debounce(func, ms) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

const debouncedPrintMe = debounce(printMe, 1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
setTimeout(() => debouncedPrintMe("Message 1"), 100);
setTimeout(() => debouncedPrintMe("Message 2"), 200);
setTimeout(() => debouncedPrintMe("Message 3"), 300);


//Q4

// function printFibonacci(delay, limit) {
//   let number1 = 0;
//   let number2 = 1;
//   let count = 0;
//   let intervalCounter = setInterval(function repeatThis() {
//     console.log(number1);
//     let next = number1 + number2;
//     number1 = number2;
//     number2 = next;

//     count++;

//     if (count >= limit) {
//       clearInterval(intervalCounter);
//     }
//   }, delay);
// }

// printFibonacci(1000, 10);

function printFibonacciTimeouts(delay) {
  let number1 = 0;
  let number2 = 1;
  let count = 0;
  function printNextFibonacci() {
    console.log(number1);

    let next = number1 + number2;
    number1 = number2;
    number2 = next;
    count++;
    setTimeout(printNextFibonacci, delay);
  }
  printNextFibonacci();
}
printFibonacciTimeouts(1000);


//Q5

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
let carClone = { ...car, year: 2001 };
car.description(); //works
setTimeout(() => car.description(), 200); //fails

const boundDescriptionClone = carClone.description.bind(carClone);
setTimeout(boundDescriptionClone, 200);

let carClone2 = { ...car, make: "Volkswagen" };
const boundDescriptionClone2 = carClone2.description.bind(carClone2);
setTimeout(boundDescriptionClone2, 200);


// Q6

Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => {
      this.apply(null, args);
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}
multiply.delay(500)(5, 5);

function sum(...numbers) {
  console.log(numbers.reduce((a, b) => a + b, 0));
}

sum.delay(500)(1, 2, 3, 4, 5);

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5);

//Q7

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};

const person1 = new Person("James Brown", 73, "male");
const person2 = new Person("Tiffany Co", 25, "female");

console.log("person1: " + person1);
console.log("person2: " + person2);

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.toString = function () {
  return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
};

const student1 = new Student("Timmy Boi", 21, "male", "Summer 2024");
const student2 = new Student("Alphaba Witch", 22, "female", "Spring 2025");

console.log("student1: " + student1);
console.log("student2: " + student2);

*/
