import axios from "axios";

export default {

  getUsers:function(){
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a gig to the database
  // saveUser:function (savedUsers) {

  //  return axios.post("/api/users/login", savedUsers)
  //   .then(response => {
  //     console.log(response.data)
  //   })
  //   .catch(err=> {
  //     this.setState({
  //       errors:err.response.data
  //     })
  //   })
  
// },
  saveUser: function(savedUsers) {
    console.log(savedUsers)
    return axios.post("/api/users", savedUsers)
   
    .then(response => {
      console.log(response.data)
      
    })
    .catch(err=> {
      console.log(err)
    })
  },
  logsUser: function(){
    return axios.post("/api/users/login");
  },

  test:function(){
    return axios.get("/api/users/test")
  },

  getGigs: function() {
    return axios.get("/api/gigs");
  },

  getSavedGigs:function(userid){
    return axios.get("/api/gigs/" + userid);
  },
  // Gets the book with the given id
  getGig: function(id) {
    return axios.get("/api/gigs/" + id);
  },
  // Deletes the book with the given id
  deleteGig: function(id) {
    return axios.delete("/api/gigs/" + id);
  },
  // Saves a gig to the database
  saveGig: function(savedGigs) {
    return axios.post("/api/gigs", savedGigs);
  }
};
