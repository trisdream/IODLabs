// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract one number from another
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide one number by another
function divide(a, b) {
  return a / b;
}

const result1 = add(5, 5); // Addition: 5 + 5
const result2 = subtract(10, 4); // Subtraction: 10 - 4
const result3 = multiply(3, 7); // Multiplication: 3 * 7
const result4 = divide(20, 4); // Devision: 20 / 4

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// Test add function
if (add(3, 4) !== 7) {
  console.error("test faild");
}
if (add(-2, 5) !== 3) {
  console.error("test faild");
}
if (add(-3, -7) !== -10) {
  console.error("test faild");
}

// Test subtract function
if (subtract(10, 4) !== 6) {
  console.error("test faild");
}
if (subtract(4, 10) !== -6) {
  console.error("test faild");
}
if (subtract(5, 0) !== 5) {
  console.error("test faild");
}

// Test multiply function
if (multiply(3, 7) !== 21) {
  console.error("test faild");
}
if (multiply(5, 0) !== 0) {
  console.error("test faild");
}
if (multiply(-3, -4) !== 12) {
  console.error("test faild");
}

// Test divide function

if (divide(20, 4) !== 5) {
  console.error("test faild");
}
if (divide(7, 1) !== 7) {
  console.error("test faild");
}
