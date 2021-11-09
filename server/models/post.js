const mongoose = require("mongoose");
const Schema = mongoose.Schema
const postsSchema = new mongoose.Schema({
    text: {
        type : String,
        trim : true
    },
    imageUrl: {
        type : String
    },
    createdAt: {
        type : Date,
        required : true
    },
    createdById: {
        type : Schema.Types.ObjectId, ref: 'user' ,
        required : true
    },
    comments : {
        type : [Schema.Types.ObjectId], ref: 'user',
    },
    likes: {
        type :  [Schema.Types.ObjectId]
    }
})

const Post = new mongoose.model("post",postsSchema)
module.exports = Post;
