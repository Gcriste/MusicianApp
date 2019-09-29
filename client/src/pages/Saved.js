import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResult from "../components/SavedList";
import setAuthToken from "../utils/setAuthToken";

class Saved extends Component {
  state = {
      savedGigs:[],
      userid:""
  };


  componentDidMount() {
        
    const token = localStorage.getItem('example-app');
    if(token){
        setAuthToken(token);
    }
    
   API.getUsers()
   .then(response => {
      this.setState({
          user:response.data,
          userid:response.data._id
      })


     console.log(response.data._id) 
     console.log(response.data) 
   })
   .catch(err => console.log(err.response))

   API.getSavedGigs()
   .then(res => {
        this.setState({ 
        savedGigs: res.data })
        console.log(res.data)
   })
   .catch(err => console.log(err))

}

  //removes book by id
  handleDeleteButton = id => {
      API.deleteGig(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
  }

  render() {
      return (
          <Container fluid className="container">
         <Jumbotron>
                    <h1 className="text-black">You can view your saved Gigs here!</h1>
                </Jumbotron>
              <Container>
                  <SavedResult 
                  savedGigs={this.state.savedGigs} 
                  handleDeleteButton={this.handleDeleteButton} />
              </Container>
          </Container>
      )
  }
}



export default Saved;