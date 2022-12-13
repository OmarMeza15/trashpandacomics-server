const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
  {
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
        required: [true, "Review is required"]
    },
    imageUrl: {
        type: String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Review = model("Review", ReviewSchema);

module.exports = Review;
