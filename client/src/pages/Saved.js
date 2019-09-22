import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResult from "../components/SavedList"

class Saved extends Component {
  state = {
      savedGigs: []
  };

  //gets all books from database
  componentDidMount() {
      API.getGigs()
          .then(res => this.setState({ savedGigs: res.data }))
          .catch(err => console.log(err))
  }

  //removes book by id
  handleDeleteButton = id => {
      API.deleteBook(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
  }

  render() {
      return (
          <Container fluid className="container">
         <Jumbotron>
                    <h1 className="text-black">You can view or delete the book from your saved list!</h1>
                </Jumbotron>
              <Container>
                  <SavedResult savedGigs={this.state.savedGigs} handleDeleteButton={this.handleDeleteButton} />
              </Container>
          </Container>
      )
  }
}



export default Saved;