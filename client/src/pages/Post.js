import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Container, Row, Col } from "../components/Grid";
import { Input, PostButton, Musician } from "../components/Post";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";

class Post extends Component {

    state = {
        musician:"",
        date: "",
        pay: "",
        venue: "",
        bandname: "",
        musictype: "",
        savedGigs:[],
        time:"",
        message:"",
        userid:"",
        user:{},
        redirect:false
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


  }

  handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
     //submit button function
     handlePostSubmit = event => {
         event.preventDefault();
         console.log("hi")

         const newGig = {
           musician:this.state.musician,
          pay: this.state.pay,
          venue: this.state.venue,
          bandname: this.state.pay,
          musictype: this.state.musictype,
          date: this.state.date,
          time:this.state.time,
          userid:this.state.userid
        }
        console.log(newGig)
         // api call to post gig
         API.saveGig(newGig)
         .then(this.setState({ 
           redirect:true,
           message: alert("Your posted a gig! on " + this.state.date) 
          })
           )
         .catch(err => console.log(err));
        }

    render() {

      const {redirect} = this.state;

      if (redirect)  {
        return <Redirect to="/search"/>
      }

        return (
            <div>
    <Container fluid>
        <Row>
          <Col size="md-6 text-center">
             <form className = "ui form">
             <div className="two fields">
      
               
      <Musician
                value={this.state.musician}
                onChange={this.handlePostChange}
                name="musician"
                placeholder="Musician Type (required)"
              />
          <div className="field">
      <label>Date of Gig</label>
      <Input
                value={this.state.date}
                onChange={this.handlePostChange}
                name="date"
                placeholder="Date (required)"
              />
        </div>
        </div>
        <div className = "two fields">
        <div className="field">
      <label>Time</label>
      <Input
                value={this.state.time}
                onChange={this.handlePostChange}
                name="time"
                placeholder="Time(required)"
              />
        </div>
        <div className="field">
      <label>Pay</label>
      <Input
                value={this.state.pay}
                onChange={this.handlePostChange}
                name="pay"
                placeholder="Pay(required)"
              />
        </div>
        </div>
        <div className = "three fields">
        <div className="field">
      <label>Venue</label>
      <Input
                value={this.state.venue}
                onChange={this.handlePostChange}
                name="venue"
                placeholder="Venue(required)"
              />
        </div>
        <div className="field">
      <label>Band Name</label>
      <Input
                value={this.state.bandname}
                onChange={this.handlePostChange}
                name="bandname"
                placeholder="Band Name"
              />
        </div>
       
        <div className="field">
      <label>Music Type</label>
      <Input
                value={this.state.musictype}
                onChange={this.handlePostChange}
                name="musictype"
                placeholder="Music Type"
            
            />
        </div>
        
  </div>
              
              
              
              
               
               
             <PostButton 
                handlePostSubmit={this.handlePostSubmit}
              >
              </PostButton>

           
            </form>
            </Col>
            </Row>
            </Container>
             


            </div>
        )
    }
}

export default Post;
