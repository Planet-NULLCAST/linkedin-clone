const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const jwt = require("jsonwebtoken");


const app = express();
const dbURI = "mongodb://localhost:27017/linkedin";

mongoose.connect(dbURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen(8000, () => console.log("listening"));
  })
  .catch((err) => console.log(err));

  app.use(express.json());

  //creating TOKEN
  const createToken = (id) =>{
    return jwt.sign({id},'secretkey')
  }

  //Creating New Data in database
  app.post("/users", (req, res) => {
    const data = new User(req.body);
    data.save()
      .then(() => res.status(201).send(data))
      .catch((error) => res.status(400).send(error));
  });


  //Fetching all datas from database
  app.get("/users", (req, res) => {
    const finalUser = []
    User.find({})
      .then((users) => {
        users.filter((item) =>{
        const obj = {
          'firstName' : item.firstName,
          'lastName' : item.lastName,
          'email' : item.email,
          'country' : item.country,
          'city' : item.city,
          '_id' : item._id
        };
        finalUser.push(obj)
      })
      res.send(finalUser)
    })
      .catch(() => res.status(500).send())
  });
  
  //fetching a single data by Id
  app.get("/users/:id", (req, res) => {
    const finalUser = []
    const user = User.findById(req.params.id)
      .then(user => {
          const finalUser = {
            'firstName' : user.firstName,
            'lastName' : user.lastName,
            'email' : user.email,
            'country' : user.country,
            'city' : user.city,
            '_id' : user._id
          };
          res.send(finalUser);
        })
      .catch((e) => res.status(500).send(e));
  });
  
  //updating data using PATCH
  app.patch("/users/:id",async (req,res) => {
    const updates = await Object.keys(req.body)
    try{
      const userData = await User.findById(req.params.id)
      await updates.forEach(update => userData[update] = req.body[update])
      await userData.save()
      await res.send(userData)
    }
    catch(e){
      res.status(400).send(e)
    }
  })
  
  ////updating data using PUT
  // app.put("/users/:id",async (req,res) => {
  //   try{
  //     const data = await user.findByIdAndUpdate(req.params.id,req.body,{ new:true , runValidators:true})
  //     res.send(data)
  //   }
  //   catch(e){
  //     res.status(400).send(e)
  //   }
  // })
  
  
  
  app.put("/users/:id",(req,res) => {
     User.findByIdAndUpdate({_id:req.params.id},{
        $set : {
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          email : req.body.email,
          country : req.body.country,
          city : req.body.city,
          password : req.body.password}
        })
        .then(()=>{
          res.send('updated')
        })
        .catch(err => res.status(400).send(err))
  })
  
  
  //delete user
  app.delete("/users/:id", async (req,res) =>{
    try{
      const deleteData = await User.findByIdAndDelete(req.params.id)
      res.send(deleteData)
    }
    catch(e){
      res.status(400).send(e)
    }
  })
  
  
  //user authentication
  
  app.post("/login", async (req,res) =>{
    const { email, password } = req.body;
    
    try{
      const user = await User.authenticate(email,password);
      const token = createToken(user._id);
      res.send(token)
    }
    catch (err) {
      res.status(400).send(err.message)
    }
  })
  
