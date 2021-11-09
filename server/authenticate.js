const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    if (req.headers["authorization"]) {
      const auth_header = req.headers["authorization"];
      const token = auth_header.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (!err) {
          req.payload = payload
          next();
          return 
        } else {
          res.status(403).json({ message: "please login" });
        }
      });
    } else {
      res.status(401).json({ message: "please login" });
    }
  };

  module.exports = auth;