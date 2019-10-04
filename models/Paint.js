const mongoose = require("../db/connection");

const PaintSchema = new mongoose.Schema({
  name: String,
  mfr: String,
  color: String
});

const Paint = mongoose.model("User", PaintSchema);

module.exports = Paint;
