const mongoose = require("mongoose");

const friendReqSchema = new mongoose.Schema(
  {
    requestTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    requestFrom: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    requestStatus: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FriendReq", friendReqSchema);
