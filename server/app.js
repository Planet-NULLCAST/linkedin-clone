const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const usersRoutes = require("./routes/usersRoutes");
const app = express();
const dbURI = "mongodb://localhost:27017/linkedin";
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const Post = require("./models/post");
const multer = require("multer")
const postsRoutes = require("./routes/postsRoutes")
const Comment = require("./models/comments")

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.static("public"));
//connecting mongoose
mongoose
  .connect(dbURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen(8000, () => console.log("listening"));
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

const multerStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/comment-pictures");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id + Date.now() + "--" + file.originalname);
  },
});

// multer middleware
const upload = multer({
  storage: multerStorageEngine,
  limits: {
    fileSize: 100000,
  },
});



// create a comment
app.post("/comments/:id",upload.any(),async (req,res) => {
  try{
    const userId =  req.params.id
    const now = new Date()
    const comment = await new Comment()
    Object.assign(comment,{
      "text" : req.body.userComment,
      "createdAt" : now,
      "createdById" : userId
    })
    if(req.files.length > 0){
      Object.assign(comment,{"imageUrl" : `comment-pictures/${req.files[0].filename}`})
    }
    await comment.save()
    res.status(201).json({comment})
  }
  catch(e){
    res.json({error : e.message})
  }
})

//get all comments
app.get("/comments",async (req,res) => {
try{
  const comments = await Comment.find({})
  res.json({comments})
}
catch(e){
  res.json({"error" : e.message})
}})


// const multerStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "trial");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.params.id + Date.now() + "--" + file.originalname);
//   },
// });

// const trial = multer({
//   storage: multerStorageEngine,
//   limits: {
//     fileSize: 100000,
//   }
// })

// //trial
// app.post("/comments/:id",trial.any(), async(req,res)=>{
//   try{
//     res.send(req.body)
//     // console.log(req.body)
//     if(req.files.length > 0)
//     {
//       console.log('yes');
//     }
//   }
//   catch(e){
//     res.send(e.message)
//   }
// })
