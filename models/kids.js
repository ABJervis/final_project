const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kidsSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  Allergies: String,
  Notes: String,
  date: { type: Date, default: Date.now }
});

const Kids = mongoose.model("Kids", kidsSchema);

module.exports = Kids;
