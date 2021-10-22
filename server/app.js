const express = require("express");
const mongoose = require("mongoose");
const profile = require("./models/profile");

const app = express();
const dbURI = "mongodb://localhost:27017/Linkedin";

mongoose
  .connect(dbURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen(8000, () => console.log("listening"));
  })
  .catch((err) => console.log(err));

app.get("/home", (req, res) => res.send("<h1>Home Page</h1>"));
