import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/Form";
import SearchResult from "../components/SearchResults"
import {Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import Moment from 'react-moment';

class SearchGigs extends Component {
    //create state
    state = {
        gigs:[],
        redirect:false,
        user:{},
        userid:""
       
    };

   

    componentDidMount() {
        
        const token = localStorage.getItem('example-app');
        if(token){
            setAuthToken(token);
        }
       this.loadGigs();
        
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

    loadGigs = () => {
        API.getGigs()
        .then(res => {
            this.setState({ 
                gigs: res.data, 
                })
                console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //submit button function
    handleFormSubmit = event => {
        event.preventDefault();
        // api call to search
        API.getGigs(this.state.search)
            .then(res => {
                
                    let results = res.data.items
                    //map through the array of gigs
                    results = results.map(result => {
                        //store each gig information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            pay: result.pay,
                            venue: result.venue,
                            bandname: result.bandname,
                            musictype: result.musictype,
                            date: result.date,
                            time:result.time,
                            userid:result.userid
                        }
                        return result;
                    })
   
                    this.setState({ gigs: results, error: "" })
                
            })
            .catch(err => this.setState({ error: err.items }));
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

                   
                    <SearchResult 
                    gigs={this.state.gigs} 
                   
                    />
                </Container>
            </Container>
        )
    }


}

export default SearchGigs;