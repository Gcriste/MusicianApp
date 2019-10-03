
import React, { Component } from 'react'
import axios from "axios";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, PostButton } from "../components/CreateAccount";
import {Redirect } from "react-router-dom"
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';

const styles = {
    error:{
      color:'red',
      fontSize: '0.8rem',
      margin:0
    }
  }
  
class CreateAccount extends Component {

    constructor(){
      super();
      this.state = {
        redirect:false,
          email:"",
          password:"",
          errors:{},
          firstname:"",
          lastname:"",
          message:""
      }
    }

  handleCreateChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
     //submit button function
     handleCreateSubmit = event => {
         event.preventDefault();
         console.log("hi")

         const newUser = {
          email:this.state.email,
          password:this.state.password,
          firstname:this.state.firstname,
          lastname:this.state.lastname
         }
          axios
          .post('api/users', newUser)
         .then(response=> {
           this.setState({
             message:alert("You successfully created an account"),
             redirect:true,
             errors:{}
           })
           console.log(response.data)
          }
         )
         .catch(err => {
           console.log(err)
           this.setState({
             message:alert("This email already exists"),
             errors:err.response.data
           })
         });
        }

    render() {
      const styles = {
          error:{
            color:'red',
            fontSize: '0.8rem',
            margin:0
          }
        }

      const {errors, redirect} = this.state;

            if (redirect)  {
              return <Redirect to="/search"/>
            }
        return (


          <div className = "createaccount">
          <div className = "container">
            <div className = "row">
              <div className = "col-md-6 m-auto">
                <div className = "card">
                  <div className = "card-body">
                    <h1 className = "display-4 text-center">
                      Create Account  {' '}
                    </h1>
                    <h4 className = "text-center">
                    Or if you have an account hit the login button
                    </h4>
                    <br></br>

                    <form>

                    <Input
                value={this.state.firstname}
                onChange={this.handleCreateChange}
                name="firstname"
                placeholder="Enter First Name"
                type="name"
              />
               <Input
                value={this.state.lastname}
                onChange={this.handleCreateChange}
                name="lastname"
                placeholder="Enter Last Name"
                type="name"
              />
             <Input
                value={this.state.email}
                onChange={this.handleCreateChange}
                name="email"
                placeholder="Enter Email"
                type="email"
              />
               {
                errors.user && (
                    <div style={styles.error}>
                    {errors.user}
                    </div>
                    )
              }
               <Input
                value={this.state.password}
                onChange={this.handleCreateChange}
                name="password"
                placeholder="Enter Password"
                type="password"
              />
              {
              errors.user && (
                    <div style={styles.error}>
                    {errors.password}
                    </div>
                    )
              }


    <div className="text-left">
       <PostButton 
                handleCreateSubmit={this.handleCreateSubmit}
               
              >
              </PostButton>

        </div>

          <div className="text-right">
        <button className = "btn btn-danger">
          <a href= "/login"> Login </a>
          
        </button>

        </div>
        
      </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
      
       
      </div>
  )
}
}

export default CreateAccount;



