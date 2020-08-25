//require express, morgan and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting up port and express app
const PORT = process.env.PORT || 4000;


const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setting up static files
const PORT = process.env.PORT || 4000;
//get the goose going//

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,

});
//setup routes//
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}!`);
});
