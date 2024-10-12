const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoutes);

app.use("/mytest", testRoutes);

app.get("/", (req, res) => {
  res.send("hello from our server!");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
