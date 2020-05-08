import React, { Component } from "react";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import axios from 'axios';
import {InputBox, PostComment} from "../components/Comment";
import CommentResults from "../components/CommentResults";
import {Redirect } from "react-router-dom"

const styles = {
    error:{
      color:'red',
      fontSize: '0.7rem',
      margin:0
    }
  }



class Comment extends Component {
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
        savedDiscussions:[],
        id:props.match.params.id,
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
        
        this.loadDiscussion();

       API.getUsers()
       .then(response => {
          this.setState({
              user:response.data,
              userid: response.data._id
            
          })
        
       })
       .catch(err => console.log(err.response))


    }

   


    loadDiscussion = () => {

        let newid = this.state.id
       
        API.getDiscussionById(newid)
        .then(res => {
            console.log(res.data)
            this.setState({ 
                
                savedDiscussions: res.data, 
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

        let newComment = {
            date:this.state.savedDiscussions[0].date,
            text:this.state.text,
            name:this.state.user.firstname,
        };
        this.state.savedDiscussions[0].comments.push(newComment)
        
        const newDiscussion = {
            userid:this.state.savedDiscussions[0].userid,
            name:this.state.user.firstname,
            id:this.state.savedDiscussions[0].id,
            comments:this.state.savedDiscussions[0].comments,
            text:this.state.savedDiscussions[0].text,
            date: this.state.savedDiscussions[0].date
       }
       console.log(newDiscussion)
        // api call to post gig
       let newid= this.state.id
        axios.put("/api/discussions/" + newid, newDiscussion)
        // API.updateCommentById({newid},newDiscussion)
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
                <h1>Comment On This Post</h1> 
                    <form className = "ui big form">
                        <div className = "card">
                            <div className="card-body player">
                                <div className="article">
                                       

                                        <CommentResults 
                                        savedDiscussions={this.state.savedDiscussions}
                                        />
                                        <br></br>
                                        <PostComment
                                            handlePostSubmit={this.handlePostSubmit}>
                                        </PostComment>

                                        <hr></hr>
                                    <div className={`sixteen wide field ${errors.text ? 'error' : ''}`}>
                                       
                                       
                                        {errors.text && <div style = {styles.error}>{errors.text}</div>}
                                        <InputBox
                                        value={this.state.text}
                                        onChange={this.handlePostChange}
                                        name="text"
                                        placeholder="Type Your Discussion Here"
                                        />

                                          
                                      
{/*                                   
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
                                        handleCommentButton = {this.handleCommentButton}
                                        /> */}
                                    
                                    
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

export default Comment;