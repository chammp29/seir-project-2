const mongoose = require("../db/connection");

const MiniatureSchema = new mongoose.Schema({
  title: String,
  image: String,
  notes: String,
  mfr: String,
  game: String,
  category: [],
  paintedBy: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  paintsUsed: [
    {
      ref: "Paint",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Miniature = mongoose.model("Miniature", MiniatureSchema);

module.exports = Miniature;
