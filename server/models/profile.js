const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userId : {   
        type : Number,
        required : true
    },
    name:{
        type : String , 
        required : true
    },
    email:{
        type : String,
        required : true,
        lowercase : true
    },
    bio : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});
        
const profile = mongoose.model('profile', profileSchema)
module.exports = profile;