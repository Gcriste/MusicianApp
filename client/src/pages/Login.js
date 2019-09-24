
import React, { Component } from 'react'
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, PostButton } from "../components/Login";


class Login extends Component {

    state = {
        email:"",
        password:"",
    }


  handleLoginChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
     //submit button function
     handleLoginSubmit = event => {
         event.preventDefault();
         console.log("hi")
         // api call to post gig
         API.saveGig({
           email:this.state.email,
           password:this.state.password
         })
         .then(this.setState({ message: alert("Your created an account " + this.state.email) }))
         .catch(err => console.log(err));
        }

    render() {
        return (
            <div>
                <Container fluid>
        <Row>
          <Col size="md-6">
             <form>
              <Input
                value={this.state.email}
                onChange={this.handleLoginChange}
                name="email"
                placeholder="Enter Email"
              />
               <Input
                value={this.state.password}
                onChange={this.handleLoginChange}
                name="password"
                placeholder="Enter Password"
              />
             <PostButton 
                handleLoginSubmit={this.handleLoginSubmit}
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

export default Login;
