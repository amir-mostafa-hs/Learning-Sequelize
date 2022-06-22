const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// create express app
const app = express();

// home route
app.get("/", (req, res) => {
  res.send("<h1>Index</h1>");
});

// server port runner
const PORT = process.env.PORT || 5000;
// listen to requests
app.listen(PORT, () => {
  console.log("Server run in port: ", PORT);
});
