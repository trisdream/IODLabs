const express = require("express");
const app = express();
const port = 3000;
const testRoutes = require("./public/routes/myTestRoutes");

app.use("/", express.static("public"));

app.use("/mytest", testRoutes);

app.get("/", (req, res) => {
  res.send("hello from our server!");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
