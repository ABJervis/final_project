const db = require("../models");

// Defining methods for the kidsController
module.exports = {
  findAll: function(req, res) {
    db.Appointment
      .find(req.query)
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("created")
    console.log(req.body)
    db.Appointment
      .create(req.body)
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbAppointment => dbAppointment.remove())
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  }
};