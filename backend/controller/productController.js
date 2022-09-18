const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const limit = req.query.limit || 10;
      const products = await Product.find({}).limit(limit);
      return res.status(200).json(products);
    } catch (error) {
      console.info({ error });
      return res.status(500).json(error);
    }
  },
  getProductDetailsById: async (req, res) => {
    try {
      const { id: _id } = req.params;
      const product = await Product.findOne({ _id });
      return res.status(200).json(product);
    } catch (error) {
      console.info({ error });
      return res.status(500).json(error);
    }
  },
};
