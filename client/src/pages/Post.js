import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import PostResult from "../components/Post";

class Post extends Component {

    state = {
        search:"",
        date: "",
        pay: 0,
        venue: "",
        bandname: "",
        musictype: "",
    };
 
     handlePostChange = event => {
         this.setState({ search: event.target.value })
     }
 
     //submit button function
     handlePostSubmit = event => {
         event.preventDefault();
         // api call to google search
         API.saveGig(this.state.search)
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
 

    render() {
        return (
            <div>
              <PostResult
              handlePostSubmit={this.handlePostubmit}
            handlePostChange={this.handlePostChange}

            />
             


            </div>
        )
    }
}

export default Post;
