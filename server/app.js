const express = require("express");
const mongoose = require("mongoose");
const profile = require("./models/profile");
const Signup = require("./models/signup");
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const dbURI = "mongodb://localhost:27017/Linkedin";
const cors = require("cors");
const { response } = require("express");
app.use(
  cors({
    origin: true,
  })
);

mongoose
  .connect(dbURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen(8000, () => console.log("listening"));
  })
  .catch((err) => console.log(err));

app.get("/home", (req, res) => res.send("<h1>Home Page</h1>"));
app.post("/signupapi", async(req, res) => {
  let errorData 
 let  newData = await Signup.create({
   name:req.body.name, 
   email:req.body.email,
   _id: mongoose.Types.ObjectId().toHexString()
 })
 .catch(error => errorData=error)
 if(newData){
   return res.send({status:200,error:false})
 }
 else {
  return res.send({status:400,error:true,message:errorData})
 }
});
