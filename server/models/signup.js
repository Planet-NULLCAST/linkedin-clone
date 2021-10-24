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
    }
});
        
const Signup = mongoose.model('signup', signupSchema)
module.exports = Signup;