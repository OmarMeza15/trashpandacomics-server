const { Schema, model } = require("mongoose");

const EmailSchema = new Schema(
  {
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    question: {
        type: String,
        required: [true, "Question is required"]
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Email = model("Email", EmailSchema);

module.exports = Email;
