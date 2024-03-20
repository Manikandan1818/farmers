import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    // Bcrypt Password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0//", salt);
    const newUSer = User({ ...req.body, password: hash });
    // Save to database
    await newUSer.save();
    res.send({ message: "Registered Sucessfully!", alert: true });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.send({
        message: "User not found. Please sign up",
        alert: false,
      });

    const { password, confirmPassword, ...others } = user._doc;

    console.log(user);
    res.send({
      message: "Signed in Sucessfully",
      alert: true,
      data: others,
    });
    // Password Compare
    // const isCorrect = await bcrypt.compare(req.body.password, user.password);
    // if (!isCorrect) {
    //   res.send({ message: "Wrong Creditianls", alert: false });
    // }
  } catch (err) {
    next(err);
  }
};
