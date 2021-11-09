const mongoose = require("mongoose")
const Schema = mongoose.Schema
const commentSchema = mongoose.Schema({
    text : {
        type : String,
    },
    imageUrl : {
        type :String
    },
    createdAt : {
        type : String,
        required :  true
    },
    createdById : {
        type : Schema.Types.ObjectId, ref: 'user' ,
        required : true
    }
})

const Comment = new mongoose.model("comment",commentSchema)
module.exports = Comment