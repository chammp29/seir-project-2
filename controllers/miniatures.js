const express = require("express");
const router = express.Router();

// import models
const User = require("../models/User");
const Miniature = require("../models/Miniature");
const Paint = require("../models/Paint");

router.post("/", (req, res) => {
  Miniature.create(req.body).then(newMini => {
    res.redirect("/miniatures/");
  });
});

router.get("/", (req, res) => {
  Miniature.find({}).then(miniatures => {
    res.render("miniatures", { miniatures });
  });
});

router.get("/new", (req, res) => {
  res.render("new-mini");
});

router.get("/:id", (req, res) => {
  Miniature.findOne({ _id: req.params.id }).then(mini => {
    res.render("show-mini", mini);
  });
});

module.exports = router;
