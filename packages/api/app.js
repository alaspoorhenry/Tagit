const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

//Add middleware for validation

//Add routes for requests

app.listen(PORT, () => {
  console.log("Active on port: localhost:", PORT);
});
