// // functions

// function helloWorld(fistName)
// // {
// //   console.log("hellow ${firstName}'s world");
// // }

// console.log(firstName ? console.log('hello $(firstName)'s world'): console.log("hello World");

// )

// helloWorld("Tristan");

//return function

// function checkAge returns a value when called
function checkAge(age) {
  if (age >= 18) {
    return "adult"; // if the condition is true, return this string and exit
  }
  return "non-adult"; // if the condition was false, return this string and exit
}
console.log(checkAge(21)); // adult
console.log(checkAge(13)); // non-adult

const sayHi = function () {
  // function expression syntax for creating a function
  console.log("Hi");
};

sayHi();

// console.log(sayHi);
