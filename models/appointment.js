const mongoose = require("mongoose");

//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using the Schema constructor, create a new appointmentSchema object

const appointmentSchema = new Schema({
  visit: { type: String, required: true },
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
  diagnosis: { type: String, required: false },
  medication: { type: String, required: false },
  notes: { type: String, required: false },
  date: { type: String, required: true},
  //'appointment' is an array that stores ObjectIDs
  //the ref property links these ObjectIds to the Kids Model
  //this allows us to tag the appointments added that belong to a specific kid

  Appointment: [
  {
    type: Schema.Types.ObjectId, 
    ref: "Kids"
  }
]
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;