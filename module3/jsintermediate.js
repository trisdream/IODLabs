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
  const parts = cssProp.split("-");


  for (let i = 1; i < parts.length; i++) {
  parts[i] = parts[i].charAt(0).to upperCase() + parts[i].slice(1);
  }
  return parts.join("");
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

console.log(currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

//Q6

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray) {
  return duplicatesArray.filter(
    (value, index) => duplicatesArray.indexOf(value) === index
  );
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

//Q7

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
//find
function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : null;
}
console.log(getBookTitle(2));
//filter
function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}
console.log(getOldBooks());
//map
function addGenre(genre = "Unknown") {
  return books.map((book) => ({ ...book, genre }));
}
console.log(addGenre("Classic"));
//map and filter
function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
}
console.log(getTitles("G"));
//find and forEach
function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(latestBook());

*/
// Q8

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["Daphne", "0430927879"],
  ["Ella", "0456565475"],
  ["Frank", "0488292878"],
]);

phoneBookABC.set("Caroline", "0456091234");

function printPhoneBook(contacts) {}
