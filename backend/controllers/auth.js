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
    res.status(200).json("User has been created!");
  } catch (err) {
    next(err);
  }
};
