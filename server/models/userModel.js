const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: [true, "First name is required"] },
    lastname: { type: String, required: [true, "Last name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: {
      type: String,
      type: [true, "Password is required"],
      select: true,
    },
    location: { type: String },
    profileurl: { type: String },
    profession: { type: String },
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    views: [{ type: String }],
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
