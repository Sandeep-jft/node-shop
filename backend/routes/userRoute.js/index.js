const express = require('express');
const { login, getUserDetails, register } = require('../../controller/userContoller');
const { authMiddleware } = require('../../middleware/authMiddleware');
const userRoute = express.Router();

userRoute.post('/login',login);
userRoute.get('/', authMiddleware,  getUserDetails);
userRoute.post('/register', register);

module.exports = userRoute;