const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/user");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const auth = require("../authenticate")

// const auth = (req, res, next) => {
//   if (req.headers["authorization"]) {
//     const auth_header = req.headers["authorization"];
//     const token = auth_header.split(" ")[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
//       if (!err) {
//         req.payload = payload
//         next();
//         return 
//       } else {
//         res.status(403).json({ message: "please login" });
//       }
//     });
//   } else {
//     res.status(401).json({ message: "please login" });
//   }
// };

//multer storage and filename
const multerStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/profile-pictures");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id + "--" + file.originalname);
  },
});

//multer middleware
const upload = multer({
  storage: multerStorageEngine,
  limits: {
    fileSize: 100000,
  },
});

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/id/:id", userController.getSingleUser);
router.patch("/:id", userController.updateUserByPatch);
router.put("/:id", userController.updateUserByPut);
router.delete("/:id", userController.deleteUser);
router.post("/login", userController.loginUser);
router.patch(
  "/upload/:id",
  [auth, upload.single("profilePic")],
  userController.profilePic,
  (error, req, res, next) => {
    res.status(400).json({ error: error.message });
  }
);
router.get("/me", auth, userController.findMe);

module.exports = router;
