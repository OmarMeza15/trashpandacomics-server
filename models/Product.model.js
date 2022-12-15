const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: {
        type: String,
        required: [true, "Review is required"]
    },
    price: {
        type: Number,
        required: [true, "Review is required"]
    },
    discount: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required"]
    },
    info: {
      type: String,
      required: [true, "Info is required"]
    },
    description: {
      type: String,
      required: [true, "Description is required"]
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("Product", ProductSchema);

module.exports = Product;