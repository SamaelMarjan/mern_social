const mongoose = require("mongoose");

const emailVeificationSchema = new mongoose.Schema({
  userId: String,
  token: String,
  createdAt: Date,
  expireAt: Date,
});

module.exports = mongoose.model("Verification", emailVeificationSchema);
