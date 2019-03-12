const mongoose = require("mongoose");

//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using the Schema constructor, create a new kidsSchema object

const kidsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  allergies: { type: String, required: false },
  notes: { type: String, required: false },
  date: { type: Date, default: Date.now },
  //'user' is an array that stores ObjectIDs
  //the ref property links these ObjectIds to the Users Model
  //this allows us to tag the kids added that belong to a specific user

  User: [
  {
    type: Schema.Types.ObjectId, 
    ref: "User"
  }
]
});

const Kids = mongoose.model("Kids", kidsSchema);

module.exports = Kids;
