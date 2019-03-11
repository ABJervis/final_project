const mongoose = require("mongoose");

//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using the Schema constructor, create a new appointmentSchema object

const appointmentSchema = new Schema({
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
  visit: { type: String, required: true },
  diagnosis: { type: String, required: true },
  medication: { type: String, required: true },
  notes: { type: String, required: false },
  date: { type: Date, default: Date.now },
  //'appointment' is an array that stores ObjectIDs
  //the ref property links these ObjectIds to the Kids Model
  //this allows us to tag the appointments added that belong to a specific kid

  Kids: [
  {
    type: Schema.Types.ObjectId, 
    ref: "Kids"
  }
]
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;