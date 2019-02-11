import axios from "axios";

export default {
  // Gets all kids
  getHome: function() {
    return axios.get("/api/kids");
  },
  // Gets the kid with the given id
  getHome: function(id) {
    return axios.get("/api/kids/" + id);
  },
  // Saves a kid to the database
  saveHome: function(kidsData) {
    return axios.post("/api/kids", kidsData);
  }
};