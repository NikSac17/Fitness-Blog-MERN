const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchuser");

const env = require("dotenv");
env.config();

const JWT_SECRET = `${process.env.JWT_SECRET}`;

//Route 1: Create a user using POST  "/api/auth/createuser"   NO LOGIN REQUIRED
router.post(
  "/createuser",
  [
    body("name", "Minimum name length 3").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Minimum password length 3").isLength({ min: 3 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      success = true;
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 2: Authenticate a user using POST  "/api/auth/login"   NO LOGIN REQUIRED
router.post(
  "/login",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Enter correct credentials" });
      }

      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        return res.status(400).json({ error: "Enter correct credentials" });
      }

      const payLoad = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(payLoad, JWT_SECRET);
      success = true;
      res.json({ success, authToken, username: user.name });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3: Get logged in user details POST  "/api/auth/getuser"   LOGIN REQUIRED
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
