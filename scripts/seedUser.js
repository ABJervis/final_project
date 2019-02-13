const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the kids below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kidsdb"
);

const userSeed = [
  {
    userName: "Ashley",
    password: 1234
  }, 
 
];

db.Kids
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });