const express = require("express");
const router = express.Router();

// import models
const User = require("../models/User");
const Miniature = require("../models/Miniature");
const Paint = require("../models/Paint");

router.post("/", (req, res) => {
  Paint.create(req.body).then(newPaint => {
    res.redirect("/paints/");
  });
});

router.get("/", (req, res) => {
  Paint.find({}).then(paints => {
    res.render("paints", { paints });
  });
});

router.get("/new", (req, res) => {
  res.render("new-paint");
});

router.get("/:id", (req, res) => {
  Paint.findOne({ _id: req.params.id }).then(paint => {
    res.render("show-paint", paint);
  });
});

module.exports = router;
