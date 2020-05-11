import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import {Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import { Input, PostButton } from "../components/Discussion"
import axios from 'axios';
import DiscussionResults from "../components/DiscussionResults"

const styles = {
    error:{
      color:'red',
      fontSize: '0.7rem',
      margin:0
    }
  }



class DiscussionBoard extends Component {
    //create state
    constructor(props) {
        super(props);
        this.state = {
        userid:"",
        user:{},
        redirect:false,
        date:"",
        comments:[{}],
        likes:[{}],
        avatar:"",
        name:"",
        text:"",
        errors:{},
        discussions:[]
        };
      }
    

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
       this.loadDiscussions();
        
       API.getUsers()
       .then(response => {
          this.setState({
              user:response.data,
              userid: response.data._id
          })
         console.log(response.data._id) 
       })
       .catch(err => console.log(err.response))

       

    }

    loadDiscussions = () => {
        API.getDiscussions()
        .then(res => {
            
            this.setState({ 
                discussions: res.data, 
                })
                console.log(res.data)
            })
        .catch(err => console.log(err))



    }

    handlePostChange= event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    //submit button function
    handlePostSubmit = event => {
        event.preventDefault();
        let errors = {}

        if (!this.state.text){
          errors.text = "Please enter text before submitting!";
          this.setState({errors}) 
        }

        else{
    
        const newDiscussion = {
         text:this.state.text,
         name:this.state.user.firstname,
         comments:this.state.comments,
         likes:this.state.likes,
         userid:this.state.userid
       }
       console.log(newDiscussion)
        // api call to post gig
        API.postDiscussion(newDiscussion)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err));
       }

       this.setState({
        text:""
    })
    }

    handleDeleteDiscussion= id => {
        API.deleteDiscussion(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {

        const {redirect, errors} = this.state;
        if(redirect){
            return <Redirect to="/" />
        }
      
        
           

        return (
            <div className ="ui relaxed center aligned grid">
                <div className = "ten wide column" >
                <h1>Discussions</h1> 
                    <form className = "ui big form">
                        <div className = "card">
                            <div className="card-body player">
                                <div className="article">
                                    <div className={`sixteen wide field ${errors.text ? 'error' : ''}`}>
                                  
                                    {errors.text && <div style = {styles.error}>{errors.text}</div>}
                                    <Input
                                        value={this.state.text}
                                        onChange={this.handlePostChange}
                                        name="text"
                                        placeholder="Type Your Discussion Here"
                                        />

                                          
                                        <PostButton 
                                            handlePostSubmit={this.handlePostSubmit}>
                                        </PostButton>

                                        
                                    </div>
                                    <div className = "sixteen wide field">
                                    <DiscussionResults 
                                        discussions={this.state.discussions}
                                        handleDeleteDiscussion={this.handleDeleteDiscussion}
                                        user={this.state.user}
                                        // handleCommentButton = {this.handleCommentButton}
                                        />
                                    
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                
             
              
        )
    }


}

export default DiscussionBoard;