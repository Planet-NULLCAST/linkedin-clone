const express = require("express");
const router = express.Router();
const auth = require("../authenticate");
const postController = require("../controllers/postController");
const multer = require("multer")


const multerStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/post-pictures");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id + Date.now() + "--" + file.originalname);
  },
});

//multer middleware
const upload = multer({
  storage: multerStorageEngine,
  limits: {
    fileSize: 100000,
  },
});

//upload a image in post
router.post(
  "/image/:id",
  [auth, upload.single("postImage")],
  postController.upload,
  (error, req, res, next) => {
    res.status(415).json({ error: error.message });
  }
);

router.post("/",auth, postController.createPost);
router.get("/",auth, postController.getAllPosts);
router.get("/:id",auth, postController.getSinglePost);
router.patch("/:id",auth, postController.updatePost);

module.exports = router;

