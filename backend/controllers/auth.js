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
    const result = await User.findOne({
      email: req.body.email,
    });
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Signed in Sucessfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email not found. Please sign up",
        alert: false,
      });
    }
    // Password Compare
    // const isCorrect = await bcrypt.compare(req.body.password, result.password);
    // if (!isCorrect) {
    //   res.send({ message: "Wrong Creditianls", alert: false });
    // }
  } catch (err) {
    next(err);
  }
};
