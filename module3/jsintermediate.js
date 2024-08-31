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

*/

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
  animals2.splice(2, 1, newValue);
  console.log(animals2);
}

console.log(replaceMiddleAnimal("Bird"));

function findMatchingAnimals(beginsWith) {
  let animals3 = [...animals].filter((animals3) =>
    animals3.startsWith(beginsWith)
  );
  return animals3;
}

console.log(findMatchingAnimals("B"));
