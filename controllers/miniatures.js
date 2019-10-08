const express = require("express");
const router = express.Router();

// import models
const User = require("../models/User");
const Miniature = require("../models/Miniature");
const Paint = require("../models/Paint");

router.delete("/:id", (req, res) => {
  Miniature.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/miniatures/");
  });
});

router.post("/", (req, res) => {
  Miniature.create(req.body).then(newMini => {
    res.redirect("/miniatures/");
  });
});

// test
router.put("/paintsused/:id", (req, res) => {
  const paintID = Object.keys(req.body)[0];
  const miniID = req.params.id;

  console.log(Object.keys(req.body)[0]);

  Paint.findById(paintID).then(paint => {
    Miniature.findOne({ _id: miniID }).then(mini => {
      mini.paintsUsed.push(paint);
      mini.save();
      res.redirect(`/miniatures/paintsused/${mini.id}`);
    });
  });
});
//test
router.get("/paintsused/:id/", (req, res) => {
  Miniature.findOne({ _id: req.params.id })
    .populate("paintsUsed")
    .then(miniature => {
      Paint.find({}).then(paints => {
        res.render("paints-used", { miniature, paints });
      });
    });
});
//test
// router.put("/:id/:paintId", (req, res) => {
//   const miniID = req.params.id;
//   const paintID = req.params.id;

//   Paint.findById(paintID).then(paint => {
//     Miniature.findOneAndUpdate({ _id: miniID }).then(mini => {
//       mini.paintsUsed.push(paint);
//       mini.save();
//     });
//   });
// });

router.put("/:id", (req, res) => {
  Miniature.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(mini => {
    res.redirect(`/miniatures/${mini.id}`);
  });
});

router.get("/", (req, res) => {
  Miniature.find({}).then(miniatures => {
    res.render("miniatures", { miniatures });
  });
});

router.get("/edit/:id/", (req, res) => {
  Miniature.findOne({ _id: req.params.id })
    .populate("paintsUsed")
    .then(miniature => {
      res.render("edit-mini", { miniature });
    });
});

router.get("/new", (req, res) => {
  res.render("new-mini");
});

//test
// router.get("/:id/:paintId", (req, res) => {
//   Miniature.findOne({ _id: req.params.id }).then(miniature => {
//     Paint.find({}).then(paint => {
//       res.render("paintandmini", { miniature, paint });
//     });
//   });
// });

router.get("/:id", (req, res) => {
  Miniature.findOne({ _id: req.params.id })
    .populate("paintsUsed")
    .then(mini => {
      res.render("show-mini", mini);
    });
});

module.exports = router;
