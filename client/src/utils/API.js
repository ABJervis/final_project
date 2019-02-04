import axios from "axios";

export default {
  // Gets all kids
  getHome: function() {
    return axios.get("/api/books");
  },
  // Gets the kid with the given id
  getHome: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a kid to the database
  saveHome: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};