import axios from "axios";

export default {
  //Gets all kids
  getKids: function() {
    return axios.get("/api/kids");
  },
  // Gets the kid with the given id
  getKid: function(id) {
    return axios.get("/api/kids/" + id);
  },
  // Saves a kid to the database
  saveKid: function(kidData) {
    return axios.post("/api/kids/", kidData);
  },

  //gets all appointments
  getAppointments: function() {
    return axios.get("/api/appointment");
  },
  //gets specific appointment based on id
  getAppointment: function(id) {
    return axios.get("/api/appointment"+ id);
  },
  //saves appointment details to data base for future reference
  saveAppointment: function(appointmentData) {
    return axios.post("/api/appointment", appointmentData);
  }
};
