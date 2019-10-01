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
        // let gigId = res.data[1]._id
       this.setState({ 
       savedGigs: res.data 
     })

      
   
     console.log(res.data) 
  
  // API.getRequest(gigId)
  // .then(res => {
  //   console.log(res.data)
  //   this.setState({
  //     savedRequests:res.data,
  //   })
  // })
  // .catch(err => console.log(err.response))
}) 
    })
  }

  //removes gig by id
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