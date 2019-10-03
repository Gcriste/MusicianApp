import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResult from "../components/SavedList";
import setAuthToken from "../utils/setAuthToken";
import SavedRequests from "../components/SavedRequests";
import {Redirect } from "react-router-dom";
import Moment from 'react-moment';


class Saved extends Component {
  state = {
      savedGigs:[],
      userid:"",
      savedRequests:[],
      gigid:"",
      user:{},
      dateForSavedRequests:[],

  };


   handleLogout = () => {
        localStorage.removeItem('example-app')
        this.setState({
            redirect:true
        })
    }


  componentDidMount() {
        
    const token = localStorage.getItem('example-app');
    if(token){
        setAuthToken(token);
    }
    
   API.getUsers()
   .then(response => {
     let userId = response.data._id
     
      this.setState({
        user:response.data,
          userid:response.data._id
      })
     
      API.getSavedGigs(userId)
      .then(res => {
        // let gigId = res.data[1]._id
       this.setState({ 
       savedGigs: res.data 
     })

   
     console.log(res.data) 
  
  API.getRequestByUser(userId)
  .then(res => {
    let gigId = []
    for (var i =0; i < res.data.length;i++){
            gigId.push(res.data[i].gigid)
           }
           console.log(gigId)
    console.log(res.data)
    this.setState({
      savedRequests:res.data,
    })
    for(var i = 0; i < gigId.length;i++){
      console.log(gigId[i])
      API.getGig(gigId[i])
      .then(res => {
        console.log(res.data)
        this.setState({
          dateForSavedRequests:res.data
        })
      
        
      })
    }
   
    })

   
  .catch(err => console.log(err.response))
}) 
    })
  }

  //removes gig by id
  handleDeleteButton = id => {
      API.deleteGig(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
  }

  handleDeleteRequest= id => {
    API.deleteRequest(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
}
  render() {

    const {redirect, user} = this.state;

    if(redirect){
        return <Redirect to="/" />
    }
  
      return (
        <Container>
           
        {/* <div className="ui pointing menu">
  <a className="active item">
   Profile
   
  </a>
  <a className="item">
   My Posted Gigs
  </a>
  <a className="item">
   My Gig Requests
  </a>
      </div> */}
      <div className="ui segment">
  <div className = "form profileForm">
                   
                     <h3> <strong> Welcome: {user.firstname}</strong></h3>
                         {' '}
                     <h3> <strong> Email Address: {user.email}</strong></h3>
                         {' '}
                     <h3> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></h3>
                         {' '}
                     {/* <p> <strong> Last Updated: <Moment date={user.updatedAt} format="MM/DD/YYYY" /></strong></p>
                         {' '} */}
                     <button className = "ui orange animated button" tabindex ="0"
                     onClick = { this.handleLogout}> 
                     <div className = "visible content">Logout</div>
                      <div className = "hidden content">
                      <i className = "left arrow icon"></i>
                    </div> 
                   </button>


                </div>
 <br></br>
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
                        dateForSavedRequests={this.state.dateForSavedRequests}
                     handleDeleteRequest ={this.handleDeleteRequest}
                        />
                         </div>
                     </div>
                     </div>
                     </div>
      </Container>


          // <Container fluid className="container">
          //     <div className = "form profileForm">
          //           <h1 className="text-black">Search for upcoming Gigs!</h1>
          //           <p> You have successfully authenticated!</p>
          //           <p> <strong> Welcome: {user.firstname}</strong></p>
          //               {' '}
          //           <p> <strong> Email Address: {user.email}</strong></p>
          //               {' '}
          //           <p> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></p>
          //               {' '}
          //           <p> <strong> Last Updated: <Moment date={user.updatedAt} format="MM/DD/YYYY" /></strong></p>
          //               {' '}
          //            <button className = "ui orange  animated button" tabindex ="0"
          //            onClick = { this.handleLogout}> 
          //            <div className = "visible content">Logout</div>
          //             <div className = "hidden content">
          //             <i className = "right arrow icon"></i>
          //           </div> 
          //          </button>


          //       </div>
              // <Container>
              //   <div className = "container">
              //     <div className = "row">
              //       <div className = "col-6">
              //       <SavedResult 
              //     savedGigs={this.state.savedGigs} 
              //     handleDeleteButton={this.handleDeleteButton} />
              //       </div>
                  
               
                 
                
              //     <div className = "col-6">
                  
              //       <SavedRequests
                 
              //       savedRequests= {this.state.savedRequests}
              //       dateForSavedRequests={this.state.dateForSavedRequests}
              //    handleDeleteRequest ={this.handleDeleteRequest}
              //       />
              //    </div>
              //    </div>
              //    </div>
              // </Container>
          // </Container>
      )
  }
}



export default Saved;