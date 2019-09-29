
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

    state = {
        password:"",
        email:"",
        firstname:"",
        lastname:""
    }

    constructor(){
      super();
      this.state = {
        redirect:false,
          email:"",
          password:"",
          errors:{},
          firstname:"",
          lastname:""
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
             redirect:true,
             errors:{}
           })
           console.log(response.data)
          }
         )
         .catch(err => {
           console.log(err)
           this.setState({
             errors:err.response.data
           })
         });
        }
        //  // api call to post gig
        //  API.saveUser({
        //    password:this.state.password,
        //    email:this.state.email,
        //    firstname:this.state.firstname,
        //    lastname:this.state.lastname
        //  })
        //  .then(this.setState({ message: alert("Your created an account " + this.state.username) }))
        //  .catch(err => console.log(err));
        // }
        
    render() {

      const {errors, redirect} = this.state;

            if (redirect)  {
              return <Redirect to="/search"/>
            }
        return (
            <div>
                <Container fluid>
        <Row>
          <Col size="md-6">
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
             <PostButton 
                handleCreateSubmit={this.handleCreateSubmit}
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

export default CreateAccount;



// import React, { Component } from 'react';
// import axios from "axios";
// import { Container, Row, Col } from "../components/Grid";
// import { Input, PostButton } from "../components/Login";
// import {Redirect } from "react-router-dom"
// import authenticate from '../utils/Authenticate';
// import setAuthToken from '../utils/setAuthToken';

// const styles = {
//   error:{
//     color:'red',
//     fontSize: '0.8rem',
//     margin:0
//   }
// }

// class Login extends Component {

//   constructor(){
//     super();
//     this.state = {
//       redirect:false,
//         email:"",
//         password:"",
//         errors:{}
//     }
//   }

//   componentDidMount() {
//     const token = localStorage.getItem('example-app');

//     if (authenticate(token)){
//       this.setState({
//         redirect:true
//       });
//     }
//   }

//   handleLoginChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
 
//      //submit button function
//      handleLoginSubmit = event => {
//          event.preventDefault();
//          console.log("hi")

//          const newUser = {
//           email:this.state.email,
//           password:this.state.password
//          }
//           axios
//           .post('api/users/login', newUser)
//          .then(response=> {

//           if(response.data.token){
//             const{token} = response.data;

//             localStorage.setItem('example-app', token);
//             setAuthToken(token);


//            this.setState({
//              redirect:true,
//              errors:{}
//            })
//           }
//            console.log(response.data)
//          })
//          .catch(err => {
//            this.setState({
//              errors:err.response.data
//            })
//          });
//         }

//     render() {
//       const {errors, redirect} = this.state;

//       if (redirect)  {
//         return <Redirect to="/search"/>
//       }

//         return (

         
//             <div className = "login">
//                 <div className = "container">
//                   <div className = "row">
//                     <div className = "col-md-6 m-auto">
//                       <div className = "card">
//                         <div className = "card-body">
//                           <h1 className = "display-4 text-center">
//                             Log In  {' '}
//                           </h1>
//                           <h4 className = "text-center">
//                           Or if you don't have an account hit the create account button
//                           </h4>
//                           <br></br>

//                           <form>
//               <Input
//                 value={this.state.email}
//                 type="email"
//                 onChange={this.handleLoginChange}
//                 name="email"
//                 placeholder="Enter Email Address"
//               />
             
//               {
//                 errors.user && (
//                     <div style={styles.error}>
//                     {errors.user}
//                     </div>
//                     )
//               }
          
//                <Input
//                 value={this.state.password}
//                 onChange={this.handleLoginChange}
//                 name="password"
//                 type="password"
//                 placeholder="Enter Password"
//               />
//                {
//                 errors.password && (
//                     <div style={styles.error}>
//                     {errors.password}
//                     </div>
//                     )
//               }
          
//              <PostButton 
//                 handleLoginSubmit={this.handleLoginSubmit}
//               >
//               </PostButton>

//               <button className = "btn btn-danger">
//                 <a href= "/createaccount"></a>
//                 Create Account
//               </button>
           
//             </form>
          
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
            
             
//             </div>
//         )
//     }
// }

// export default Login;
