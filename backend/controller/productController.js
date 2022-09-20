const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const limit = req.query.limit || 10;
      const products = await Product.find({}).limit(limit);
      return res.status(200).json(products);
    } catch (error) {
      console.info({ error });
      next(error, req, res);
    }
  },
  getProductDetailsById: async (req, res, next) => {
    try {
      const { id: _id } = req.params;
      const product = await Product.findOne({ _id });
      if (product) {
        return res.status(200).json(product);
      }else{
        return res.status(404).json(product);
      }

    } catch (error) {
      console.info({ error });
      next(error, req, res);
    }
  },
};
