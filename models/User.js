const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  userName: String,
  password: String,
  miniatures: [
    {
      ref: "Miniature",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
