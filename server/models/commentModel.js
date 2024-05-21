const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    comment: { type: String, required: true },
    from: { type: String, required: true },
    replies: [
      {
        rid: { type: mongoose.Schema.Types.ObjectId },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        from: { type: String },
        replayAt: { type: String },
        comment: { type: String },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
        likes: [{ type: String }],
      },
    ],
    likes: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
