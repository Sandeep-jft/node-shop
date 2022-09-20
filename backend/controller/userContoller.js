const User = require("../models/User");
const { generateToken } = require("../utils/generateToken");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(404).json({ message: "please enter all fields" });
      }

      const user = await User.findOne({ email });
      if (user) {
        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) {
          return res.status(401).json({ message: "incorrect details" });
        }

        const token = generateToken(user._id);

        const detail = {
          _id: user._id,
          email: user.email,
          name: user.email,
          isAdmin: user.isAdmin,
          token,
        };

        return res.status(200).json(detail);
      }else{
        throw new Error("Not found")
      }
    } catch (error) {
      next(error, req, res);
    }
  },
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        res.status(404);
        throw new Error("please fill all details");
      }
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(401).json({ message: "user already exist" });
      }

      const user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        const token = generateToken(user._id);

        return res.status(201).json({
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token,
        });
      } else {
        res.status(404);
        throw new Error("user not found");
      }
    } catch (error) {
      next(error, req, res);
    }
  },
  getUserDetails: async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      if (user) {
        return res.status(200).json(user);
      } else {
        throw "User not found";
      }
    } catch (error) {
      next(error);
    }
  },
};
