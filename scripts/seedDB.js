const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the kids below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pediatrictracker"
);

const kidsSeed = [
  {
    name: "Finley",
    age: "1",
    height: "32",
    weight: "24",
    allergies: "None",
    Notes:"well check",
    date: new Date(Date.now())
  }, 
  {
    name: "Aislinn",
    age: "5",
    height: "42",
    weight: "40",
    allergies: "Amoxicillin",
    Notes:"well check",
    date: new Date(Date.now())
  }
];

db.Kids
  .remove({})
  .then(() => db.Kids.collection.insertMany(kidsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });