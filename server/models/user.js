const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require('validator');


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim:true,
    unique : true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
        }
    }
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength:6,
    trim: true
  },
  profilePicPath : {
    type : String
  }
});

//hashing password
userSchema.statics.hashing = async function (user) {
  try {
    const password = user.password;
    const hashedPassword = await bcrypt.hash(password, 8);
    user.password = hashedPassword;
    return 
  } catch (error) {
    return(error);
  }
};

//user


//user authentication
userSchema.statics.authenticate = async function (email,password) {
    const user = await this.findOne({email})
    if (user){
      const hp = await bcrypt.hash(password,8);
      const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect Email');
}


//public profile

userSchema.statics.publicUser = function(data,token) {
  const user = this.findOne(data.email)
  Object.assign(user,{"token" : token})
  const userObj = data.toObject()
  delete userObj.password;
  return userObj;
}


const User = new mongoose.model("user", userSchema);

module.exports = User;