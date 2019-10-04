const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect(
  "mongodb://localhost/colourJournalDB",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to colourJournalDB");
  }
);

module.exports = mongoose;
