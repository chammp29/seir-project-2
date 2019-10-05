const express = require("express");
const router = express.Router();

// import models
const User = require("../models/User");
const Miniature = require("../models/Miniature");
const Paint = require("../models/Paint");

router.get("/", (req, res) => {
  Miniature.find({}).then(miniatures => {
    res.render("miniatures", { miniatures });
  });
});

router.get("/:id", (req, res) => {
  Miniature.findOne({ _id: req.params.id }).then(mini => {
    res.render("show-mini", mini);
  });
});

module.exports = router;
