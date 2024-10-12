const Calculator = require("./libraries/calculator");
const NumGenerator = require("./libraries/numGenerator");
const Logging = require("./libraries/logging");

const add = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const id = NumGenerator.generateRandomID();
  const sum = Calculator.add(number1, number2);

  Logging.log("Addition performed", id, sum);
  res.status(200).json({ result: sum, id });
};

const subtract = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const id = NumGenerator.generateRandomID();
  const result = Calculator.subtract(number1, number2);

  Logging.log("Subtraction performed", id, result);
  res.status(200).json({ result, id });
};

const multiply = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const id = NumGenerator.generateRandomID();
  const product = Calculator.multiply(number1, number2);

  Logging.log("Multiplication performed", id, product);
  res.status(200).json({ result: product, id });
};

const divide = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const id = NumGenerator.generateRandomID();

  if (number2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }

  const result = Calculator.divide(number1, number2);
  Logging.log("Division performed", id, result);
  res.status(200).json({ result, id });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
