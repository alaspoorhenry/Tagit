const express = require("express");
const router = express.Router();

// this should be where auth middleware is being called, or maybe have a separate file for auth middleware

router.post("/signup/", (res, req) => {
  console.log("Signup!");
  // user can signup here
  res.send("boo");
});

router.post("/signin/", (res, req) => {
  console.log("Signin!");
  // user can signin here
  res.send("boo");
});
