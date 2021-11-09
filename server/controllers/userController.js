const User = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const fs = require("fs");



//creating TOKEN
const createToken =  (id) =>{
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);
};


//Creating New user in database
const createUser = async (req, res) => {
  try {
    const data = await new User(req.body);
    User.hashing(data)
    await data.save();
    const user = User.publicUser(data);
    const token = createToken(user._id);
    res.status(201).json({ token , user });
  } catch (e) {
    res.status(400).json({ message: e.message });
    // console.log(e);
  }
};

//Fetching all datas from database
const getAllUser = async  (req, res) => {
  try {
    const users = await User.find({});
    const finalUsers = users.map((item) => {
      return {
        userName: item.userName,
        email: item.email,
        country: item.country,
        city: item.city,
        _id: item._id,
      };
    });
    res.json({ finalUsers });
  } catch (e) {
    res.status(500).json({ message: "error" });
  }
};

//fetching a single data by Id

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    const finalUser = {
      userName: user.userName,
      email: user.email,
      country: user.country,
      city: user.city,
      _id: user._id,
    };
    res.json({ finalUser });
  } catch (e) {
    res.status(500).json({ message: "someting happened" });
  }
};

//updating data using PATCH

const updateUserByPatch = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const userData = await User.findById(req.params.id);
    updates.forEach((update) => (userData[update] = req.body[update]));
    await User.hashing(userData)
    await userData.save();
    res.json({ userData });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};

////updating data using PUT
const updateUserByPut = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          country: req.body.country,
          city: req.body.city,
          password: req.body.password,
        },
      }
    );

    res.json({ message: "updated" });
  } catch (e) {
    res.status(400).json({ message: "" });
  }
};

// router.put("/users/:id",async (req,res) => {
//   try{
//     const data = await user.findByIdAndUpdate(req.params.id,req.body,{ new:true , runValidators:true})
//     res.send(data)
//   }
//   catch(e){
//     res.status(400).send(e)
//   }
// })

//delete user
const deleteUser = async (req, res) => {
  try {
    const deleteData = await User.findByIdAndDelete(req.params.id);
    res.json({ message: "data deleted" });
  } catch (e) {
    res.status(400).json({ message: "" });
  }
};

//user authentication
const loginUser =  async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.authenticate(email, password);
    const token = createToken(user._id);
    const publicUser = User.publicUser(user,token)
    return res.status(200).json({ token ,publicUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//upload photo

const profilePic = async (req, res) => {
  try{
    const user = await User.findById(req.params.id)
    const _id = req.params.id
    if(user["profilePicPath"])
    {
      const deletePic = user["profilePicPath"];
      fs.unlinkSync(`public${deletePic}`);
      console.log("deleted");
    }
    Object.assign(user, {profilePicPath : `/profile-pictures/${req.file.filename}`})
    user.save()
    res.json({ "path":`/profile-pictures/${req.file.filename}`});
  }
  catch(e){
    res.status(400).json({message : e.message})
  }
}

const findMe = async (req, res) => {
  try {
    const user = await User.findById(req.payload["id"]);
    res.json({ user });
  } catch (e) {
    res.status(500).json({ "error": e.message });
  }
}

module.exports = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUserByPatch,
    updateUserByPut,
    deleteUser,
    loginUser,
    profilePic,
    findMe
}