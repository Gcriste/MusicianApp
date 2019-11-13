import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/Form";
import SearchResult from "../components/SearchResults"
import {Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import { Input, PostButton } from "../components/Discussion"
import axios from 'axios'


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
        errors:{}
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

    

    handlePostChange= event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    //submit button function
    handleBudgetSubmit = event => {
        event.preventDefault();
        console.log("hi")
      
      
        API.getUsers()
        .then(response => {
            const savedBudgets = [
                {date:this.state.date},
                {text:this.state.text},
                {comments:this.state.comments},
                {likes:this.state.likes},
                {name:this.state.name},
                {userid:this.state.userid},
        ]
    
        this.setState({
            budgets:savedBudgets
        })
            console.log(savedBudgets)
        //    API.saveBudget(savedBudgets)
        // axios.put('/api/budgets/' + response.data._id, savedBudgets)
        axios.put('/api/discussions/' + response.data._id, savedBudgets)
        .then(res=>{
            console.log(res.data)
                this.setState({
            budgets:res.data.budgets,
            redirect:true,
          })
            }
        )
          
        .catch(err => {
          this.setState({
            errors:err.response.data
          })
        });
        })
       }
    
    render() {

        const {redirect, user, errors} = this.state;
        if(redirect){
            return <Redirect to="/" />
        }
      
        
           

        return (
            <div className ="ui relaxed center aligned grid">
                <div className = "ten wide column" >
                <h1>Post a Gig</h1> 
                    <form className = "ui big form">
                        <div className = "card">
                            <div className="card-body player">
                                <div className="article">
                                    <div className="two fields">
                                    <div className={`four wide required field ${errors.text ? 'error' : ''}`}>
                                    <label>Text</label>
                                    {errors.text && <div style = {styles.error}>{errors.text}</div>}
                                    <Input
                                        value={this.state.text}
                                        onChange={this.handlePostChange}
                                        name="text"
                                        placeholder="text(required)"
                                        />

                                          
                                        <PostButton 
                                            handlePostSubmit={this.handlePostSubmit}>
                                        </PostButton>

                                    </div>
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