const { Schema, model } = require("mongoose");

const ShoppingSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product"
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"]
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Shopping = model("Shopping", ShoppingSchema);

module.exports = Shopping;