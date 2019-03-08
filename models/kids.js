const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kidsSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
  allergies: { type: String, required: false },
  notes: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Kids = mongoose.model("Kids", kidsSchema);

module.exports = Kids;
