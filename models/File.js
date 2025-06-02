const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  originalName: String,
  mimeType: String,
  size: Number,
  hash: String,
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", fileSchema);
