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
    if (user) {
      res.send({ alert: true });
    } else {
      res.send({ message: "User not found" });
    }
    // Compare Password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return res.send({ message: "Wrong Credentials" });
  } catch (err) {
    next(err);
  }
};
