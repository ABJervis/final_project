const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the appointment details below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kidsdb"
);

const appointmentSeed = [
  {
    height: "42",
    weight: "39",
    visit: "well",
    diagnosis: "none",
    medication: "none",
    notes: "all is well",
    date: new Date(Date.now())
  }, 
  {
    visit: "well",
    height: "36",
    weight: "29",
    diagnosis: "none",
    medication: "none",
    notes: "all is well",
    date: new Date(Date.now())
  }, 
];

db.Kids
  .remove({})
  .then(() => db.Appointment.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });