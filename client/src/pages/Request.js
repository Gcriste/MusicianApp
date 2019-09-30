import React, { Component } from 'react';
import { Input, PostButton } from "../components/PostRequest";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";


class PostRequest extends Component {


    state = {
        firstname:"",
        lastname: "",
        age: "",
        experience: "",
        referencename: "",
        referencenumber: "",
        link:"",
        gigid:"",
        message:"",
        userid:"",
        user:{},
        redirect:false,
        post:[]
    };



    
    componentDidMount() {
        
      const token = localStorage.getItem('example-app');
      if(token){
          setAuthToken(token);
      }
      
      API.getUsers()
      .then(response => {
          console.log(response.data)
        let userId = response.data._id
         this.setState({
             userid:response.data._id
         })
         console.log(userId)
    //      API.getSavedGigs(userId)
    //      .then(res => {
    //       this.setState({ 
    //       savedGigs: res.data 
    //     })
    //       console.log(res.data)
    //   })
    })
   

  }

  handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
     //submit button function
     handlePostRequest = event => {
         event.preventDefault();
         console.log("hi")

         const newRequest = {
           firstname:this.state.firstname,
          lastname: this.state.lastname,
          age: this.state.age,
          experience: this.state.experience,
          referencename: this.state.referencename,
          referencenumber: this.state.referencenumber,
          link:this.state.link,
          userid:this.state.userid,
          gigid:this.props.match.params.id
         }
        console.log(newRequest)
         // api call to post gig
         API.postRequest(newRequest)
         .then(this.setState({ 
           redirect:true,
           message: alert("Your posted a request! ") 
          })
           )
         .catch(err => console.log(err));
        }

    render() {

      const {redirect} = this.state;

      if (redirect)  {
        return <Redirect to="/saved"/>
      }

        return (
            <div>
    <Container fluid>
        <Row>
          <Col size="md-6">
             <form>
              <Input
                value={this.state.firstname}
                onChange={this.handlePostChange}
                name="firstname"
                placeholder="First Name"
              />
               <Input
                value={this.state.lastname}
                onChange={this.handlePostChange}
                name="lastname"
                placeholder="Last Name"
              />
               <Input
                value={this.state.age}
                onChange={this.handlePostChange}
                name="age"
                placeholder="Age"
              />
              <Input
                value={this.state.experience}
                onChange={this.handlePostChange}
                name="experience"
                placeholder="Years of Experience"
              />
               <Input
                value={this.state.referencename}
                onChange={this.handlePostChange}
                name="referencename"
                placeholder="Name of Reference"
              />
                <Input
                value={this.state.referencenumber}
                onChange={this.handlePostChange}
                name="referencenumber"
                placeholder="Phone number for Reference"
              />
               <Input
                value={this.state.link}
                onChange={this.handlePostChange}
                name="link"
                placeholder="Link for video or website"
            
            />
             <PostButton 
                handlePostRequest={this.handlePostRequest}
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



export default PostRequest;


// import React, { Component } from "react";
// import API from "../utils/API";
// import Jumbotron from "../components/Jumbotron"
// import { Container, Row, Col } from "../components/Grid";
// import { Input, PostButton } from "../components/Post";
// import setAuthToken from "../utils/setAuthToken";
// import {Redirect } from "react-router-dom";

// class Post extends Component {

//     state = {
//         musician:"",
//         date: "",
//         pay: "",
//         venue: "",
//         bandname: "",
//         musictype: "",
//         savedGigs:[],
//         time:"",
//         message:"",
//         userid:"",
//         user:{},
//         redirect:false
//     };

  
//     componentDidMount() {
        
//       const token = localStorage.getItem('example-app');
//       if(token){
//           setAuthToken(token);
//       }
      
//      API.getUsers()
//      .then(response => {
//         this.setState({
//             user:response.data,
//             userid:response.data._id
//         })

//        console.log(response.data._id) 
//        console.log(response.data) 
//      })
//      .catch(err => console.log(err.response))


//   }

//   handlePostChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
 
//      //submit button function
//      handlePostSubmit = event => {
//          event.preventDefault();
//          console.log("hi")

//          const newGig = {
//            musician:this.state.musician,
//           pay: this.state.pay,
//           venue: this.state.venue,
//           bandname: this.state.pay,
//           musictype: this.state.musictype,
//           date: this.state.date,
//           time:this.state.time,
//           userid:this.state.userid
//         }
//         console.log(newGig)
//          // api call to post gig
//          API.saveGig(newGig)
//          .then(this.setState({ 
//            redirect:true,
//            message: alert("Your posted a gig! on " + this.state.date) 
//           })
//            )
//          .catch(err => console.log(err));
//         }

//     render() {

//       const {redirect} = this.state;

//       if (redirect)  {
//         return <Redirect to="/search"/>
//       }

//         return (
//             <div>
//     <Container fluid>
//         <Row>
//           <Col size="md-6">
//              <form>
//               <Input
//                 value={this.state.musician}
//                 onChange={this.handlePostChange}
//                 name="musician"
//                 placeholder="Musician Type (required)"
//               />
//                <Input
//                 value={this.state.date}
//                 onChange={this.handlePostChange}
//                 name="date"
//                 placeholder="Date (required)"
//               />
//                <Input
//                 value={this.state.age}
//                 onChange={this.handlePostChange}
//                 name="age"
//                 placeholder="a"
//               />
//               <Input
//                 value={this.state.pay}
//                 onChange={this.handlePostChange}
//                 name="pay"
//                 placeholder="Pay(required)"
//               />
//                <Input
//                 value={this.state.venue}
//                 onChange={this.handlePostChange}
//                 name="venue"
//                 placeholder="Venue(required)"
//               />
//                 <Input
//                 value={this.state.bandname}
//                 onChange={this.handlePostChange}
//                 name="bandname"
//                 placeholder="Band Name"
//               />
//                <Input
//                 value={this.state.musictype}
//                 onChange={this.handlePostChange}
//                 name="musictype"
//                 placeholder="Music Type"
            
//             />
//              <PostButton 
//                 handlePostSubmit={this.handlePostSubmit}
//               >
//               </PostButton>

           
//             </form>
//             </Col>
//             </Row>
//             </Container>
             


//             </div>
//         )
//     }
// }

// export default Post;
