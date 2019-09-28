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
        user:{}
       
    };

    handleLogout = () => {
        localStorage.removeItem('example-app')
        this.setState({
            redirect:true
        })
    }

    componentDidMount() {
        
        const token = localStorage.getItem('example-item');

        if(token){
            setAuthToken(token);
        }
       this.loadGigs();
        
       API.getUsers()
       .then(response => {
          this.setState({
              user:response.data
          })
       })
       .catch(err => console.log(err.response))


    }

    loadGigs = () => {
        API.getGigs()
        .then(res => this.setState({ gigs: res.data, date:"", pay:0, venue:"", bandname:"", musictype:"", time:"" }))
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //submit button function
    handleFormSubmit = event => {
        event.preventDefault();
        // api call to google search
        API.getGigs(this.state.search)
            .then(res => {
                
                    let results = res.data.items
                    //map through the array of books
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            pay: result.pay,
                            venue: result.venue,
                            bandname: result.bandname,
                            musictype: result.musictype,
                            date: result.date,
                            time:result.time
                        }
                        return result;
                    })
   
                    this.setState({ gigs: results, error: "" })
                
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.gigs)
        let savedGigs = this.state.gigs.filter(gig => gig.id === event.target.id)
        savedGigs = savedGigs[0];
      
        API.saveGig(savedGigs)
            .then(this.setState({ message: alert("You saved the gig ") }))
            .catch(err => console.log(err))
    }
    render() {

        const {redirect, user} = this.state;

        if(redirect){
            return <Redirect to="/" />
        }
      
           

        return (
            
    
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-black">Search for upcoming Gigs!</h1>
                    <p> You have successfully authenticated!</p>
                    <p> <strong> Welcome {user.firstname}</strong></p>
                        {' '}
                    <p> <strong> Email Address: {user.email}</strong></p>
                        {' '}
                    <p> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></p>
                        {' '}
                    <p> <strong> Last Updated: <Moment date={user.updatedAt} format="MM/DD/YYYY" /></strong></p>
                        {' '}
                     <button className = "btn btn-danger" onClick = { this.handleLogout}> Logout </button>
                </Jumbotron>
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
                    handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default SearchGigs;