import axios from "axios";

export default {
  // Gets all kids
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the kid with the given id
  getBooks: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a kid to the database
  saveBooks: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};