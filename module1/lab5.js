let destination = ["CBD", "Liverpool", "Penrith", "Newtown", "Paramatta"];
console.log(destination);
destination.unshift("Cecil Hills");

console.log(destination);

let lastdestination = destination.pop();

console.log(lastdestination);
console.log(destination);

[destination[1], destination[4]] = [destination[4], destination[1]];
console.log(destination);
