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

function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2

*/
//Q2
// the test will print in reverse to how it is written as the delay time decreases as it goes down the script.

const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
setTimeout(delayMsg, 10000, "#5: Delayed by 10s");
