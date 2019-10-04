const mongoose = require("../db/connection");

const MiniatureSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  mfr: String,
  material: String,
  notes: String,
  category: [],
  paintsUsed: [
    {
      ref: "Paints",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Miniature = mongoose.model("User", MiniatureSchema);

module.exports = Miniature;
