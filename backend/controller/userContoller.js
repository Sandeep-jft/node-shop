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
          name: user.name,
          isAdmin: user.isAdmin,
          token,
        };

        return res.status(200).json(detail);
      } else {
        throw new Error("Not found");
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
          _id: user._id,
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
  updateProfile: async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = req.body.password || user.password;
        }
        const update = await user.save();
        if (update) {
          const payload = {
            _id: update._id,
            name: update.name,
            email: update.email,
            isAdmin: update.isAdmin,
            token: generateToken(update._id),
          };
          return res.json(payload);
        } else {
          throw new Error("Something went wrong");
        }
      } else {
        return res.status(404).json({ message: "Not found" });
      }
    } catch (error) {
      next(error, req, res);
    }
  },
};
