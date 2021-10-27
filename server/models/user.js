const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require('validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
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
});

//hashing password
userSchema.pre("save", async function (next) {
  try {
    const password = this.password;
    const hashedPassword = await bcrypt.hash(password, 8);
    this.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

//user authentication

userSchema.statics.authenticate = async function (email,password) {
    const user = await this.findOne({email})
    if (user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect Email');
}

const User = new mongoose.model("user", userSchema);

module.exports = User;