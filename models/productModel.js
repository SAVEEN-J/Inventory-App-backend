const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Enter  a name"],
      trim: true,
    },
    itemCode: {
      type: String,
      required: true,
      default: "Item-code-XXX",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Enter  a category"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Enter  a quantity"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Enter  a price"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Enter  a description"],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
