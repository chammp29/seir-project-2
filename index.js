const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const methodOverride = require("method-override");

// require controllers
const usersController = require("./controllers/users");
const miniaturesController = require("./controllers/miniatures");
const paintsController = require("./controllers/paints");

const app = express();
app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));

app.use("/users/", usersController);
app.use("/miniatures/", miniaturesController);
app.use("/paints/", paintsController);

app.listen(5000, () => console.log("Running on port 5000"));
