const mongoose = require("mongoose");

const passwordResetSchema = mongoose.Schema(
  {
    userId: { type: String, unique: true },
    email: { type: String, unique: true },
    token: String,
    createdAt: Date,
    expiresAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PasswordReset", passwordResetSchema);
