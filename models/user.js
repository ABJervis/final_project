// User model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var userSchema = new Schema({
  // userName, a string, must be entered
  emailAdd: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // password, a string, must be entered
  password: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Users model using the usersSchema
const User = mongoose.model("User", userSchema);

module.exports = User;