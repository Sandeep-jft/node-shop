const express = require("express");
const {
  login,
  getUserDetails,
  register,
  updateProfile,
} = require("../../controller/userContoller");
const { authMiddleware } = require("../../middleware/authMiddleware");
const userRoute = express.Router();

userRoute.post("/login", login);
userRoute
  .route("/")
  .get(authMiddleware, getUserDetails)
  .post(register)
  .put(authMiddleware, updateProfile);

module.exports = userRoute;
