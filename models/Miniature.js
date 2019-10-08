const mongoose = require("../db/connection");

const MiniatureSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  image: { type: String, trim: true, default: "" },
  notes: { type: String, default: "" },
  mfr: { type: String, default: "" },
  game: { type: String, default: "" },
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
