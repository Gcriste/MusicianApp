import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/Form";
import SearchResult from "../components/SearchResults"


class SearchGigs extends Component {
    //create state
    state = {
        date: "",
        pay: 0,
        venue: "",
        bandname: "",
        musictype: ""
    };

   
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //submit button function
    handleFormSubmit = event => {
        event.preventDefault();
        // api call to google search
        API.googleSearch(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                 
                }
                else {
                
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
                            date: result.date
                        }
                        return result;
                    })
   
                    this.setState({ gigs: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.gigs)
        let savedGigs = this.state.gigs.filter(gig => gig.id === event.target.id)
        savedGigs = savedGigs[0];
        API.saveBook(savedGigs)
            .then(this.setState({ message: alert("Your saved the gig " + savedGigs.result) }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-black">Search for upcoming Gigs!</h1>
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
                    books={this.state.books} 
                    handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default SearchGigs;