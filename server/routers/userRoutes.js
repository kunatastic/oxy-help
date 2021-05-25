const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
// register
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;
    const output = validateUser({
      email: email,
      password: password,
    });
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }
    // console.log(password);

    const passwordHash = await bcrypt.hash(password, 10);

    // console.log(passwordHash);
    const newUser = new User({
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();

    // Auth
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
    // console.log(output, existUser, savedUser);

    console.log("new User");

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ msg: "NEW USER ADDED" });
    // res.json(output);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const userExist = await User.findOne({ email: email });
    // console.log(userExist);
    if (userExist) {
      const verify = await bcrypt.compare(password, userExist.password);
      if (!verify) {
        return res.status(401).json({ errMsg: "Wrong password" });
      }

      const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET);
      // console.log(output, existUser, savedUser);
      console.log(token);

      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .json({ msg: "USER LOGGED IN" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  console.log("Logging out");
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.get("/hidden", auth, (req, res) => {
  res.json({ data: "kunal is handsome" });
});

router.get("/loggedin", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    console.log("true");
    res.send(true);
  } catch (err) {
    console.log(err);
    res.json(false);
  }
});

module.exports = router;
