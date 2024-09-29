/*
// Q8

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const precisionClock = new PrecisionClock("Precision clock:", 2000); // 2-second interval
precisionClock.start();

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    super.display();
    let now = new Date();
    let [hours, mins] = [now.getHours(), now.getMinutes()].map((num) =>
      num.toString().padStart(2, "0")
    );
    let currentTime = `${hours}:${mins}`;

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up!");
      this.stop();
    }
  }
}

const alarmClock = new AlarmClock("Alarm clock:", "00:00");
alarmClock.start();

//Q9

function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000;
    setTimeout(() => {
      const isEven = delay % 2 === 0;
      if (isEven) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

randomDelay()
  .then((delay) => console.log(`There is a delay of ${delay} ms.`))
  .catch((delay) => console.error(`Failed after ${delay} ms.`));
*/
//Q10

async function fetchFromURL(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}

// Test the function with a valid URL
fetchFromURL("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Valid URL fetch success:", data))
  .catch((error) => console.error("Valid URL fetch error:", error.message));

// Test the function with an invalid URL
fetchFromURL("https://invalid.url")
  .then((data) => console.log("Invalid URL fetch success:", data))
  .catch((error) => console.error("Invalid URL fetch error:", error.message));

// Old Promise-based function
function fetchUsingPromise(url) {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
}

// Test the old function
fetchUsingPromise("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Old function valid URL fetch success:", data))
  .catch((error) =>
    console.error("Old function valid URL fetch error:", error.message)
  );

fetchUsingPromise("https://invalid.url")
  .then((data) => console.log("Old function invalid URL fetch success:", data))
  .catch((error) =>
    console.error("Old function invalid URL fetch error:", error.message)
  );

// Test the new async/await function
fetchFromURL("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Async/await valid URL fetch success:", data))
  .catch((error) =>
    console.error("Async/await valid URL fetch error:", error.message)
  );

fetchFromURL("https://invalid.url")
  .then((data) => console.log("Async/await invalid URL fetch success:", data))
  .catch((error) =>
    console.error("Async/await invalid URL fetch error:", error.message)
  );

async function fetchMultipleURLs(urls) {
  if (!Array.isArray(urls)) {
    throw new Error("The argument must be an array of URLs.");
  }

  try {
    const fetchPromises = urls.map(async (url) => {
      const response = await fetch(url);
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    });
    return await Promise.all(fetchPromises);
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}

// Test the function with multiple URLs
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleURLs(urls)
  .then((data) => console.log("Multiple URLs fetch success:", data))
  .catch((error) => console.error("Multiple URLs fetch error:", error.message));

import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
fetchURLDataDirect("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
