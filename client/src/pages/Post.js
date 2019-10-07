import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Container, Row, Col } from "../components/Grid";
import { Input, PostButton, Musician, Venue, MusicType } from "../components/Post";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const styles = {
  error:{
    color:'red',
    fontSize: '0.8rem',
    margin:0
  }
}
class Post extends Component {

  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      isEmpty: true,
      isDisabled: false,
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
      redirect:false,
      errors:{}
    };
  }

  handleDayChange(date, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      date,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }

    // state = {
       
    // };

  
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
let errors = {}

if (!this.state.musician){
  
  errors.musician = "Please click on the musicican type";
  this.setState({errors})
  
}
if (!this.state.pay){
  
    errors.pay = "Please type in the pay";
    this.setState({errors})
    
}
if (!this.state.venue){
  
  errors.venue = "Please click on the venue name";
  this.setState({errors})
  
}
if (!this.state.date){
  
  errors.date = "Please type in the date";
  this.setState({errors})
  
}
if (!this.state.time){
  
  errors.time = "Please type in the show time";
  this.setState({errors})
  
}

else{

         const newGig = {
           musician:this.state.musician,
          pay: this.state.pay,
          venue: this.state.venue,
          bandname: this.state.bandname,
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
          //  message: alert("Your posted a gig! on " + this.state.date) 
          })
           )
         .catch(err => console.log(err));
        }
        }


     

    render() {

      const {errors, redirect,  selectedDay, isDisabled, isEmpty, date} = this.state;
     

      if (redirect)  {
        return <Redirect to="/search"/>
      }

        return (
            <div>
                   <div>
        
       
      </div>
       
        <br></br>
        <br></br>
        <br></br>
               <br></br>
    <div className ="ui relaxed center aligned grid">
    
          <div className = "ten wide column" >
          <h1>Post a Gig</h1> 
             <form className = "ui big form">
             <div className = "card">
        <div className="card-body player">
            <div className="article">
             
             <div className="three fields">
      
             <div className={`required field ${errors.musician ? 'error' : ''}`}>
      <label>Musician Type</label>
            {errors.musician && <div style = {styles.error}>{errors.musician}</div>}
              <Musician
                value={this.state.musician}
                onChange={this.handlePostChange}
                name="musician"
                placeholder="Musician Type (required)"
              />
              </div>
              <div className={`required field ${errors.date ? 'error' : ''}`}>
      <label>Date of Gig</label>
            {errors.date && <div style = {styles.error}>{errors.date}</div>}
            <div>
        <p>
          {isEmpty && 'Please type or pick a day'}
          {!isEmpty && !selectedDay && 'This day is invalid'}
          {selectedDay && isDisabled && 'This day is disabled'}
          {selectedDay &&
            !isDisabled &&
            `You chose ${selectedDay.toLocaleDateString()}`}
        </p>
        <DayPickerInput
          value={date}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: date,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
        </div>
       
        <div className={`required field ${errors.time ? 'error' : ''}`}>
      <label>Time</label>
      {errors.time && <div style = {styles.error}>{errors.time}</div>}
      <Input
                value={this.state.time}
                onChange={this.handlePostChange}
                name="time"
                placeholder="Time(required)"
              />
        </div>
        </div>
        
        <div className="two fields">
        <div className={`four wide required field ${errors.pay ? 'error' : ''}`}>
      <label>Pay</label>
      {errors.pay && <div style = {styles.error}>{errors.pay}</div>}
      <Input
                value={this.state.pay}
                onChange={this.handlePostChange}
                name="pay"
                placeholder="Pay(required)"
              />
        </div>
        <div className={`twelve wide required field ${errors.venue ? 'error' : ''}`}>
      <label>Venue</label>
            {errors.venue && <div style = {styles.error}>{errors.venue}</div>}
      <Venue
                value={this.state.venue}
                onChange={this.handlePostChange}
                name="venue"
                placeholder="Venue(required)"
              />
        </div>
        </div>
        <div className = "two fields">
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
      <MusicType
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

export default Post;
