import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/Form";
import SearchResult from "../components/SearchResults"
import {Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";


class DiscussionBoard extends Component {
    //create state
    state = {
       
       
    };

   

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

    

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //submit button function
    handleFormSubmit = event => {
        event.preventDefault();
        // api call to search
      
    }
    render() {

        const {redirect, user} = this.state;

        if(redirect){
            return <Redirect to="/" />
        }
      
        
           

        return (
            
    
            <Container fluid>
               
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>

                   
                  
                </Container>
            </Container>
        )
    }


}

export default DiscussionBoard;