import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/Form";
import SearchResult from "../components/SearchResults"


class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
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
                
                    let results = res.data.items
                    //map through the array of books
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
   
                    this.setState({ books: results, error: "" })
                
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => 
            book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your saved the book " + savedBooks.title) }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-black">Search for your favorite book through the Google Api!</h1>
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

export default SearchBooks;