const Post = require("../models/post");

//upload apost image
const upload = async (req,res) => {
    try {
      res.json({"path" : `/post-pictures/${req.file.filename}`})
    }
    catch(e) {
      res.json({message : e.message})
    }
}
    
//creating a post 
const createPost = async (req, res) => {
    try {
      const now = new Date();
      console.log(req.body)
      const post = await new Post(req.body);
      Object.assign(post, { createdAt: now });
      await post.save();
      res.status(201).json({message : "successfull"});
    } catch (e) {
      res.json(e.message);
    }
}

//get all post
const getAllPosts = async (req,res) => {
    const posts = await Post.find({}).sort({"createdAt" :-1}).populate("createdById");
    res.json(posts)
}

//finding a post using author's id
const getSinglePost = async (req,res) => {
    try {
      const post = await Post.findOne({"_id" : req.params.id}).populate("createdById")
      res.json(post)
    }
    catch(e) {
      res.json({message : e.message})
    }
}


//updating a post
const updatePost = async (req,res) => {
    try{
      const query = {"createdById" : req.params.id}
      const now = new Date()
      const post = await Post.findOneAndUpdate(query, { $set : {"text" : req.body.text} })
      await post.save()
      res.json(post)
    }
    catch(e) {
      res.json({message :e.message})
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    upload
}



