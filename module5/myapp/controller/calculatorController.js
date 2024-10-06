const add = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const sum = number1 + number2;

  console.log(sum);
  res.status(200).json({ result: sum });
};

const subtract = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = number1 - number2;

  console.log(result);
  res.status(200).json({ result });
};

const multiply = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const product = number1 * number2;

  console.log(product);
  res.status(200).json({ result: product });
};

const divide = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);

  if (number2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }

  const result = number1 / number2;

  console.log(result);
  res.status(200).json({ result });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
