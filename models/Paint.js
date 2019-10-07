const mongoose = require("../db/connection");

const PaintSchema = new mongoose.Schema({
  name: String,
  mfr: String,
  color: String,
  notes: String
});

const Paint = mongoose.model("Paint", PaintSchema);

module.exports = Paint;
