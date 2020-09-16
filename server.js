//require express, morgan and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting up port and express app
const PORT = process.env.PORT || 3000;
const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setting up static files

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, { 
  useNewUrlParser: true,
  useFindAndModify: false
})

//setup routes//
app.use("/api", require("./routes/api.js"));
app.use("/", require("./routes/html.js"));


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}!`);
});
