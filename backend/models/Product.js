const { Schema, models, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    rating: {
      type: Number,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    stock: {
      type: Number,
    },
    reviews: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = models.Product || model("Product", productSchema);
