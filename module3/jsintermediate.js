/*


// const spliceArray = ["I", "study", "JavaScript", "right", "now"];
// const removed = spliceArray.splice(2, 3, "dance");
// // console.log(removed);
// console.log(spliceArray);

// Question 1

function ucFirstLetters(str) {
  let newString = "";
  let words = str.split(" "); // 'los', 'angeles'

  for (let word of words) {
    if (newString.length != 0) {
      newString += " ";
    }
    newString += word.charAt(0).toUpperCase() + word.substring(1);
  }

  return newString;
}
console.log(ucFirstLetters("los angeles")); //Los Angeles


//Q2

// function truncate(str, max) {
//   if (str.length > max) {
//     return str.slice(0, max) + "...";
//   } else {
//     return str;
//   }
//}

function truncate(str, max) {
  const slice = str.length > max;
  return str.slice(0, max) + "...";
}

console.log(truncate("This text will be truncated if it is too long", 25));

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));



//Q3

const animals = ["Tiger", "Giraffe"];
console.log(animals);

animals.push("Lion", "Bear");
console.log(animals);

animals.unshift("Cat", "Dog");
console.log(animals);

const sortedAnimals = [...animals].sort();

console.log(sortedAnimals);

function replaceMiddleAnimal(newValue) {
  const animals2 = [...animals];
  console.log("animals2", animals2);
  animals2.splice(2, 1, newValue);
  return animals2;
}

console.log("replaceMiddleAnimal", replaceMiddleAnimal("Bird"));

function findMatchingAnimals(beginsWith) {
  let animals3 = [...animals].filter((animal) => animal.startsWith(beginsWith));
  return animals3;
}

console.log("findMatchingAnimals", findMatchingAnimals("B"));

//Q4

function camelCase(cssProp) {
  let result = " ";


  for (cssProp of cssProp) {
  }
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display


//Q5

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

let fixedTwenty = parseFloat(twentyCents.toFixed(2));
let fixedTen = parseFloat(tenCents.toFixed(2));
console.log(fixedTwenty + fixedTen); //why is this not working?

function currencyAddition(float1, float2) {
  parseFloat((float1 + float2).tofixed(2));
  return parseFloat();
}

console.log(currencyAddition());
console.log(0.3 == currencyAddition(0.1, 0.2)); // true
*/
//Q6

function unique(duplicatesArray) {
  return filter (function)
}


const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]