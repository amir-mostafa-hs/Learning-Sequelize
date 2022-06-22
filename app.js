const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// conect to data base with sequelize
const Sequelize = require("sequelize");
const db = new Sequelize("codegig", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// test conect db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log(error));

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
