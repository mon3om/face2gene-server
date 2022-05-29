const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");

// Create
userRouter.post("/", async (req, res) => {
  try {
    let data = req.body;
    // Validation

    // Model creation (database)
    const user = new User({
      username: data.username,
      password: data.password,
    });

    await user.save();

    //Response
    res.send("User created");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    let data = req.body;
    // Verification
    let user = await User.findOne({
      username: data.username,
      password: data.password,
    });

    if (user) {
      res.send(user);
    } else {
      res.send("Unvalide user");
    }
  } catch (error) {
    res.send(err);
    console.log(error);
  }
});

module.exports = userRouter;
