
import React, { Component } from 'react'
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, PostButton } from "../components/CreateAccount";


class CreateAccount extends Component {

    state = {
        password:"",
        email:"",
        firstname:"",
        lastname:""
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
         // api call to post gig
         API.saveUser({
           password:this.state.password,
           email:this.state.email,
           firstname:this.state.firstname,
           lastname:this.state.lastname
         })
         .then(this.setState({ message: alert("Your created an account " + this.state.username) }))
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
                value={this.state.firstname}
                onChange={this.handleCreateChange}
                name="firstname"
                placeholder="Enter First Name"
              />
               <Input
                value={this.state.lastname}
                onChange={this.handleCreateChange}
                name="lastname"
                placeholder="Enter Last Name"
              />
             <Input
                value={this.state.email}
                onChange={this.handleCreateChange}
                name="email"
                placeholder="Enter Email"
              />
               <Input
                value={this.state.password}
                onChange={this.handleCreateChange}
                name="password"
                placeholder="Enter Password"
              />
             
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
