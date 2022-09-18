const connectDB = require("../utils/connectDB");

const bootstrap = async () => {
  try {
    const connection = await connectDB();
  } catch (error) {
    console.error({ error });
  }
};

module.exports = bootstrap;
