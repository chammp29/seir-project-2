const express = require("express");
const router = express.Router();

// import models
const User = require("../models/User");
const Miniature = require("../models/Miniature");
const Paint = require("../models/Paint");

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
