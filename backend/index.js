const express = require("express");
const bodyParser = require("body-parser");
const bootstrap = require("./bootstrap");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/product", productRoute);

const main = async () => {
  await bootstrap();
  app.listen(PORT, () => {
    console.info(`App is running on http://localhost:${PORT}`);
  });
};

main();
