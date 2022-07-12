const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const MONGOOSE_URL = process.env.MONGOOSE_URL;
const cors = require("cors");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//imports
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("Home baby");
});

//DB
mongoose.connect(MONGOOSE_URL, () => {
  console.log("Connected to db");
});

//lISTEN
app.listen(3000, (err, live) => {
  if (err) {
    console.log(err);
  }
  console.log("App listening on port 3000");
});
