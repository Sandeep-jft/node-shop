const bcrypt = require("bcryptjs");

const userData = [
  {
    name: "admin",
    email: "admin@test.com",
    isAdmin: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "sandeep",
    email: "sandeep@test.com",
    isAdmin: false,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "test",
    email: "test@test.com",
    isAdmin: false,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "max",
    email: "max@test.com",
    isAdmin: false,
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = userData;
