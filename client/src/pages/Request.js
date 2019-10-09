import React, { Component } from 'react';
import { Input, PostButton, Age, Experience } from "../components/PostRequest";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/basic-input'
import 'react-phone-number-input/style.css'


const styles = {
    error:{
      color:'red',
      fontSize: '0.8rem',
      margin:0
    }
  }
class PostRequest extends Component {


    state = {
        firstname:"",
        lastname: "",
        age: "",
        number:"",
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
        gigdate:"",
        errors:{}
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
     
         let errors = {}

         if (!this.state.firstname){
           
             errors.firstname = "Please type in your first name";
             this.setState({errors})
             
         }
         if (!this.state.lastname){
           
           errors.lastname = "Please type in your last name";
           this.setState({errors})
           
         }
         if (!this.state.age){
           
           errors.age = "Please type in your age";
           this.setState({errors})
           
         }
         if (!this.state.number){
           
          errors.number = "Please type in your phone number";
          this.setState({errors})
          
        }
         if (!this.state.experience){
           
           errors.experience = "Please type in your show experience";
           this.setState({errors})
           
         }        
         if (!this.state.referencename){
           
            errors.referencename = "Please type in a reference";
            this.setState({errors})
            
          } 

          if (!this.state.referencenumber){
           
            errors.referencenumber = "Please type in your reference phone number";
            this.setState({errors})
            
          } 
          if (!this.state.link){
           
            errors.link = "Please provide a link";
            this.setState({errors})
            
          }
else{
      
         const newRequest = {
           firstname:this.state.firstname,
          lastname: this.state.lastname,
          number:this.state.number,
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
        //    message: alert("Your posted a request! ") 
          })
           )
         .catch(err => console.log(err));
        }
    }

    render() {

      const {errors, redirect} = this.state;

      if (redirect)  {
        return <Redirect to="/saved"/>
      }

        return (
<div>
    <br></br>
    <br></br>
    <br></br>

   
 
    <div className = "ui relaxed center aligned grid">
        <div className = "ten wide column">
            <h1>Request to Play Gig</h1> 
        <form className = "ui big form">
        <div className = "card">
        <div className="card-body player">
            <div className="article">
             
             <div className="four fields">
      
             <div className={`four wide required field ${errors.firstname ? 'error' : ''}`}>
                 <label><strong>First Name</strong></label>
                 {errors.firstname && <div style = {styles.error}>{errors.firstname}</div>}
              <Input
                value={this.state.firstname}
                onChange={this.handlePostChange}
                name="firstname"
                placeholder="First Name"
              />
               </div>
               <div className={`four wide required field ${errors.lastname ? 'error' : ''}`}>
                 <label><strong>Last Name</strong></label>
                 {errors.lastname && <div style = {styles.error}>{errors.lastname}</div>}
               <Input
                value={this.state.lastname}
                onChange={this.handlePostChange}
                name="lastname"
                placeholder="Last Name"
              />
                </div>
                <div className={`four wide required field ${errors.age ? 'error' : ''}`}>
                <label><strong>Age</strong></label>
                 {errors.age && <div style = {styles.error}>{errors.age}</div>}
               <Age
                value={this.state.age}
                onChange={this.handlePostChange}
                name="age"
                placeholder="Age"
              />
              </div>
                <div className={`four required field ${errors.number ? 'error' : ''}`}>
                <label><strong>Phone Number</strong></label>
                 {errors.number && <div style = {styles.error}>{errors.number}</div>}
              <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={ this.state.number }
                onChange={ number => this.setState({ number}) } />
              </div>
              </div>
            

        <br></br>
            <div className="three fields">
            <div className={`required field ${errors.experience ? 'error' : ''}`}>
                <label><strong># of Gigs Played Downtown</strong></label>
                 {errors.experience && <div style = {styles.error}>{errors.experience}</div>}
              <Experience
                value={this.state.experience}
                onChange={this.handlePostChange}
                name="experience"
                placeholder="Years of Experience"
              />
              </div>
              <div className={`required field ${errors.referencename ? 'error' : ''}`}>
                <label><strong>Reference Name</strong></label>
                 {errors.referencename && <div style = {styles.error}>{errors.referencename}</div>}
               <Input
                value={this.state.referencename}
                onChange={this.handlePostChange}
                name="referencename"
                placeholder="Name of Reference"
              />
              </div>
              <div className={`required field ${errors.referencenumber ? 'error' : ''}`}>
                <label><strong>Reference Phone Number</strong></label>
                 {errors.referencenumber && <div style = {styles.error}>{errors.referencenumber}</div>}
                {/* <Input
                value={this.state.referencenumber}
                onChange={this.handlePostChange}
                name="referencenumber"
                placeholder="Enter phone"
              /> */}
              <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={ this.state.referencenumber }
                onChange={ referencenumber => this.setState({ referencenumber}) } />
              </div>
              </div>

        <br></br>
              <div className="one field">
              <div className={`required field ${errors.link ? 'error' : ''}`}>
                 <label><strong>Link</strong></label>
                 {errors.link && <div style = {styles.error}>{errors.link}</div>}
               <Input
                value={this.state.link}
                onChange={this.handlePostChange}
                name="link"
                placeholder="Link for video or website"
            />
            </div>
            </div>
             <PostButton 
                handlePostRequest={this.handlePostRequest}
              >
              </PostButton>
              </div>
    </div>
</div>
       
            </form>
        </div>
    </div>
    </div>
 


           
        )
    }
}



export default PostRequest;


