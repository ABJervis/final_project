const db = require("../models/kids");

// Defining methods for the kidsController
module.exports = {
  /*findAll: function(req, res) {
    db.Kids
      .find(req.query)
      .then(dbKids => res.json(dbKids))
      .catch(err => res.status(422).json(err));
  },*/
  findById: function(req, res) {
    db.Kids
      .findById(req.params.id)
      .then(dbKids => res.json(dbKids))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Kids
      .create(req.body)
      .then(dbKids => res.json(dbKids))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Kids
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbKids => res.json(dbKids))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Kids
      .findById({ _id: req.params.id })
      .then(dbKids => dbKids.remove())
      .then(dbKids => res.json(dbKids))
      .catch(err => res.status(422).json(err));
  }
};
