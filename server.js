const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds015878.mlab.com:15878/heroku_7n1m7p7k 

//setup routes//
app.use(require("./routes/api-routes.js"));

//html route//
//homepage//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
//exercist page display
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/exercise.html'));
});
//stat page//
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/stats.html'));
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}!`);
});
