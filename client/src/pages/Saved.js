import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResult from "../components/SavedList";
import setAuthToken from "../utils/setAuthToken";
import SavedRequests from "../components/SavedRequests";


class Saved extends Component {
  state = {
      savedGigs:[],
      userid:"",
      savedRequests:[],
      savedRequestForGig:[],
      gigid:""
  };


  componentDidMount() {
        
    const token = localStorage.getItem('example-app');
    if(token){
        setAuthToken(token);
    }
    
   API.getUsers()
   .then(response => {
     let userId = response.data._id
      this.setState({
          userid:response.data._id
      })
      API.getSavedGigs(userId)
      .then(res => {
       this.setState({ 
       savedGigs: res.data 
     })
       console.log(res.data)
   }) 
     console.log(response.data) 
  
  API.getRequestByUser(userId)
  .then(res => {
    console.log(res.data)
    this.setState({
      savedRequests:res.data,
    })
  })
  .catch(err => console.log(err.response))

    })
  }
//   loadSavedGigs = userid =>{
//     API.getSavedGigs(userid)
//     .then(res => {
//      this.setState({ 
//      savedGigs: res.data })
//      console.log(res.data)
// })
// .catch(err => console.log(err))
// }
  //removes book by id
  handleDeleteButton = id => {
      API.deleteGig(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
  }

  render() {
      return (
          <Container fluid className="container">
         {/* <Jumbotron>
                    <h1 className="text-black">You can view your saved Gigs here!</h1>
                </Jumbotron> */}
              <Container>
                <div className = "container">
                  <div className = "row">
                    <div className = "col-6">
                    <SavedResult 
                  savedGigs={this.state.savedGigs} 
                  handleDeleteButton={this.handleDeleteButton} />
                    </div>
                  
               
                 
                
                  <div className = "col-6">
                  
                    <SavedRequests
                    savedRequests= {this.state.savedRequests}
                 
                    />
                 </div>
                 </div>
                 </div>
              </Container>
          </Container>
      )
  }
}



export default Saved;