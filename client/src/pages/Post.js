import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Container, Row, Col } from "../components/Grid";
import { Input, PostButton } from "../components/Post";

class Post extends Component {

    state = {
        musician:"",
        // search:"",
        date: "",
        pay: "",
        venue: "",
        bandname: "",
        musictype: "",
    };
 
    
  handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
     //submit button function
     handlePostSubmit = event => {
         event.preventDefault();
         // api call to google search
         API.saveGig({
            musician:this.state.musician,
            pay: this.state.pay,
            venue: this.state.venue,
            bandname: this.state.pay,
            musictype: {type: String, trim: true},
            date: { type: Date, default: Date.now },
            time:{type:String, }
         })
             .then(res => {
                 
                     let results = res.data.items
                     //map through the array of books
                     results = results.map(result => {
                         //store each book information in a new object 
                         result = {
                             key: result.id,
                             id: result.id,
                             musician:result.musician,
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
    <Container fluid>
        <Row>
          <Col size="md-6">
             <form>
              <Input
                value={this.state.musician}
                onChange={this.handlePostChange}
                name="musician"
                placeholder="Musician Type (required)"
              />
               <Input
                value={this.state.date}
                onChange={this.handlePostChange}
                name="date"
                placeholder="Date (required)"
              />
               <Input
                value={this.state.time}
                onChange={this.handlePostChange}
                name="time"
                placeholder="Time(required)"
              />
              <Input
                value={this.state.pay}
                onChange={this.handlePostChange}
                name="pay"
                placeholder="Pay(required)"
              />
               <Input
                value={this.state.venue}
                onChange={this.handlePostChange}
                name="venue"
                placeholder="Venue(required)"
              />
                <Input
                value={this.state.bandname}
                onChange={this.handlePostChange}
                name="bandname"
                placeholder="Band Name"
              />
               <Input
                value={this.state.musictype}
                onChange={this.handlePostChange}
                name="musictype"
                placeholder="Music Type"
            
            />
             <PostButton
                disabled={!(this.state.musician && this.state.date && this.state.time && this.state.pay && this.state.venue)}
                onClick={this.handlePostSubmit}
              >
                Submit Book
              </PostButton>

           
            </form>
            </Col>
            </Row>
            </Container>
             


            </div>
        )
    }
}

export default Post;
