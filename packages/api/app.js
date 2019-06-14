const express = require("express");
const app = express();

//Dependencies
const path = require("path");
const bodyParser = require("body-parser");

const authenticate = require("./routes/user/authentication");

const PORT = process.env.PORT || 3000;

//Add middleware for validation

app.use(express.static(path.join(__dirname, "../app")));

//Add routes for requests

//fix app router later
// app.use("/", authenticate);
app.get("/", (req, res) => {});

app.listen(PORT, () => {
  //console.log(path.join(__dirname, "../app", "index.html"));
  console.log("Active on port: localhost:", PORT);
});
