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
      type: String,
    },
    userReviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;

//models.Product || model("Product", productSchema);
