const productData = require("./dataObject/product");
const userData = require("./dataObject/user");
const Order = require("./models/Order");
const Product = require("./models/Product");
const Review = require("./models/Review");
const User = require("./models/User");
const connectDB = require("./utils/connectDB");
require("dotenv").config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Review.deleteMany();
    await User.deleteMany();
    const users = await User.insertMany(userData);
    const products = productData.map((item) => {
      return { ...item, user: users[0]._id };
    });

    await Product.insertMany(products);
    console.log("Inserted successfully");
    process.exit();
  } catch (error) {
    console.log({ error });
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Review.deleteMany();
    await User.deleteMany();
    console.log("Deleted successfully");
    process.exit();
  } catch (error) {
    console.log({ error });
    process.exit(1);
  }
};

if (process.argv[2] === "d") {
  destroyData();
} else {
  importData();
}
