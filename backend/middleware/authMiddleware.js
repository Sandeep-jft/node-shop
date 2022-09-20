const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.match(/^Bearer (.*)$/);
      console.log({ token });
      if (token && token[1]) {
        token = token[1];
        const isValid = jwt.verify(token, process.env.JWT_SECRET);
        if (isValid) {
          req.user = await User.findById(isValid.id).select("-password");
          next();
        } else {
          throw new Error("Not authorized");
        }
      } else {
        throw new Error("Not authorized");
      }
    } else {
      throw new Error("Not authorized");
    }
  } catch (error) {
    next(error, req,res);
    // return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { authMiddleware };
