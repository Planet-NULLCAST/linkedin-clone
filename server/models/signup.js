const mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;
const signupSchema = new mongoose.Schema({
    _id: ObjectId,
    email:{
        type : String,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    country  : {
        type : String,
        required : true
    },
    city : {
        type : String
    },
    name : {
        type : String
    },
    income :{
        type : String
    }

});
        
const Signup = mongoose.model('signup', signupSchema)
module.exports = Signup;