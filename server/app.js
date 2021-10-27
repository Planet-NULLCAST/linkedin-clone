const express = require("express");
const mongoose = require("mongoose");
const profile = require("./models/profile");
const Signup = require("./models/signup");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const saltRounds = 10;
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const dbURI = "mongodb://localhost:27017/Linkedin";
const cors = require("cors");
const { response } = require("express");
app.use(
  cors({
    origin: true,
  })
);

mongoose
  .connect(dbURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen(8000, () => console.log("listening"));
  })
  .catch((err) => console.log(err));
// ................................................................adding profile.................................................................
app.post("/signupapi", async (req, res) => {
  const password = req.body.password;
  await bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      await Signup.create({
        _id: mongoose.Types.ObjectId().toHexString(),
        email: req.body.email,
        password: hash,
        country: req.body.country,
        city: req.body.city,
        name: req.body.name,
      });
    });
  });
  try {
    return res.send({ status: 200, error: false });
  } catch (e) {
    return res.send({ status: 400, error: true, message: e });
  }
});
// .......................................................................getting all users details.................................................
app.get("/allusers", async (req, res) => {
  try {
    const arr = [];
    const allusers = await Signup.find({});
    allusers.filter((item) => {
      const obj = {
        _id: item._id,
        name: item.name,
        email: item.email,
      };
      arr.push(obj);
    });
    return res.send({ status: 200, error: false, data: arr });
  } catch (e) {
    return res.send({ status: 401, error: true, message: e });
  }
});
// ....................................................................getting a single users all data............................................................
app.get("/someuser/:name", async (req, res) => {
  try {
    const allusers = await Signup.find({ name: req.params.name });
    if (allusers.length == 0) {
      throw error;
    }
    return res.send({ status: 200, error: false, data: allusers });
  } catch (e) {
    return res.send({ status: 401, error: true, message: e });
  }
});
// .........................................................adding new field ...............................................................................
app.patch("/user/update/:_id", async (req, res) => {
  try {
    console.log("kayari1");
    const _id = req.params._id;
    const updatename = await Signup.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log("kayari2");
    res.send(updatename);
  } catch (e) {
    res.status(400).send(e);
  }
});
// ...........................................................updation............................................................................................
app.put("/user/addfield/:_id", async (req, res) => {
  try {
    console.log("kayari1");
    const _id = req.params._id;
    const addfield = await Signup.findOneAndUpdate(
      { _id: _id },
      { $set: { income: req.body.income } }
    );
    res.send(updatename);
  } catch (e) {
    res.status(400).send(e);
  }
});
// ..............................................................deleting objects....................................................................................
app.delete("/user/delete/:_id", async function (req, res) {
  try {
    const dlt = await Signup.findByIdAndDelete(req.params._id);
    if (!req.params._id) {
      return res.send({ status: 401, error: true });
    }
    res.send(dlt);
  } catch (e) {
    return res.send({ status: 401, error: true, message: e });
  }
});
// ...........................................................comparing password and creating a jwt token.....................................................................
app.get("/password/:name", async (req, res) => {
  try {
    let obj = {};
    const allusers = await Signup.find({ name: req.params.name });
    if (allusers.length == 0) {
      throw error;
    }
    allusers.filter((item) => {
      obj = {
        password: item.password
      };
    });
    await bcrypt.compare(req.body.password, obj.password, (err, result) => {
      if (result) {
        console.log("password matches");
        const tok = {jwt : jwt.sign({ id: req.body.password }, "my_secret_key")}
        return res.send({ status: 200, error: false, data: tok });
      } else {
        console.log("wrong password")
        return res.send({ status: 401, error: true, message: e });
      }
    });
  } catch (e) {
    return res.send({ status: 401, error: true, message: e });
  }
});
