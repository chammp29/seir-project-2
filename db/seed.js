const User = require("../models/User");
const Mini = require("../models/Miniature");
const Paint = require("../models/Paint");

// Clear the db of records using all models
User.deleteMany({}).then(() => {
  console.log("deleted all users");
  Mini.deleteMany({}).then(() => {
    console.log("deletes all miniatures");
    Paint.deleteMany({}).then(() => {
      console.log("deleted all paints");

      // create a user
      User.create({
        name: "Corey",
        userName: "Chammp29"
      }).then(corey => {
        // create a miniature and associate it with the user
        Mini.create({
          title: "Boba Fett",
          paintedBy: corey.id
        }).then(mini => {
          // create a paint and associate it with the mini
          Paint.create({
            name: "Khorne Red",
            color: "red"
          }).then(paint => {
            // update the relative arrays
            mini.paintsUsed.push(paint);
            mini.save();
            corey.miniatures.push(mini);
            corey.save();
          });
        });
      });
    });
  });
});
