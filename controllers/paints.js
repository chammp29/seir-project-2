const express = require("express");
const router = express.Router();

// import models
const User = require("../models/User");
const Miniature = require("../models/Miniature");
const Paint = require("../models/Paint");

router.get("/", (req, res) => {
  Paint.find({}).then(paints => {
    res.render("paints", { paints });
  });
});

module.exports = router;
