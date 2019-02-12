import axios from "axios";

export default {
  // Gets all kids
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
  }
};
