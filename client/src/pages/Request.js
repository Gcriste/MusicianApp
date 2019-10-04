import React, { Component } from 'react';
import { Input, PostButton, Age, Experience } from "../components/PostRequest";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";


class PostRequest extends Component {


    state = {
        firstname:"",
        lastname: "",
        age: "",
        experience: "",
        referencename: "",
        referencenumber: "",
        link:"",
        gigid:"",
        message:"",
        userid:"",
        user:{},
        redirect:false,
        post:[],
        gigdate:""
    };



    
    componentDidMount() {
        
      const token = localStorage.getItem('example-app');
      if(token){
          setAuthToken(token);
      }
      
      API.getUsers()
      .then(response => {
          console.log(response.data)
        let userId = response.data._id
         this.setState({
             userid:response.data._id
         })
         console.log(userId)
    //      API.getSavedGigs(userId)
    //      .then(res => {
    //       this.setState({ 
    //       savedGigs: res.data 
    //     })
    //       console.log(res.data)
    //   })
    })
   

  }

  handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
     //submit button function
     handlePostRequest = event => {
         event.preventDefault();
         console.log("hi")
        
         console.log(this.props)
         const newRequest = {
           firstname:this.state.firstname,
          lastname: this.state.lastname,
          age: this.state.age,
          experience: this.state.experience,
          referencename: this.state.referencename,
          referencenumber: this.state.referencenumber,
          link:this.state.link,
          userid:this.state.userid,
          gigid:this.props.match.params.id,
          gigdate:this.state.date
         }
        console.log(newRequest)
         // api call to post gig
         API.postRequest(newRequest)
         .then(this.setState({ 
           redirect:true,
           message: alert("Your posted a request! ") 
          })
           )
         .catch(err => console.log(err));
        }

    render() {

      const {redirect} = this.state;

      if (redirect)  {
        return <Redirect to="/saved"/>
      }

        return (
            <div>
    <div className = "ui relaxed grid">
        <div className = "three column row">
        <div className = "column"></div>
          <div className = "column ">
             <form className = "ui big form">
                 <label><strong>First Name</strong></label>
              <Input
                value={this.state.firstname}
                onChange={this.handlePostChange}
                name="firstname"
                placeholder="First Name"
              />
               <label><strong>Last Name</strong></label>
               <Input
                value={this.state.lastname}
                onChange={this.handlePostChange}
                name="lastname"
                placeholder="Last Name"
              />
               <Age
                value={this.state.age}
                onChange={this.handlePostChange}
                name="age"
                placeholder="Age"
              />
              <Experience
                value={this.state.experience}
                onChange={this.handlePostChange}
                name="experience"
                placeholder="Years of Experience"
              />
              <br></br>
              <label><strong>Reference Name</strong></label>
               <Input
                value={this.state.referencename}
                onChange={this.handlePostChange}
                name="referencename"
                placeholder="Name of Reference"
              />
               <label><strong>Reference Phone Number</strong></label>
                <Input
                value={this.state.referencenumber}
                onChange={this.handlePostChange}
                name="referencenumber"
                placeholder="Phone number for Reference"
              />
               <label><strong>Link</strong></label>
               <Input
                value={this.state.link}
                onChange={this.handlePostChange}
                name="link"
                placeholder="Link for video or website"
            
            />
             <PostButton 
                handlePostRequest={this.handlePostRequest}
              >
              </PostButton>

           
            </form>
            </div>
            </div>
            </div>
             


            </div>
        )
    }
}



export default PostRequest;


