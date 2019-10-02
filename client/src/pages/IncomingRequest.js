import React, { Component } from 'react'
import API from "../utils/API";
import SavedResult from "../components/SavedList";
import setAuthToken from "../utils/setAuthToken";
import IncomingRequests from "../components/IncomingRequest";


class IncomingRequest extends Component {
    state = {
        savedGigs:[],
        userid:"",
        savedRequests:[],
        gigid:""
    };
  
  
    componentDidMount() {
        
        const token = localStorage.getItem('example-app');
        if(token){
            setAuthToken(token);
        }
        
       API.getUsers()
       .then(response => {
         let userId = response.data._id
            console.log(response.data)
          this.setState({
              userid:response.data._id
          })
         
          let postedGigId = [];
          API.getSavedGigs(userId)
          .then(res => {
              for(var i = 0; i<res.data.length; i++){
                postedGigId.push(res.data[i]._id);
                
              }
              console.log( postedGigId)
           this.setState({ 
           savedGigs: res.data 
         })
    
        // 
         console.log(res.data) 
      
      API.getRequests()
      .then(res => {
          let gigId = []
        for (var i =0; i< res.data.length;i++){
                gigId.push(res.data[i].gigid)
               }
               console.log(gigId)
        console.log(res.data)
        
       
       let requestGigId = postedGigId.filter(element => gigId.includes(element))
       let requestGigIdString = requestGigId.toString('')
        // if (postedGigId === gigId){
        //     let requestGigId = postedGigId
        console.log(requestGigId)

    let requests = [];

        for (var i = 0; i < requestGigId.length; i++) {
            API.getRequestByGig(requestGigId[i])
            .then(res => {
                requests.push(res.data);
                console.log(res.data)
            })
        }

        this.setState({
            savedRequests: requests
          })
        
    // }
      })
    
      .catch(err => console.log(err.response))
    }) 
        }) 
      }
    

    handleDeleteButton = id => {
        API.deleteGig(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }
  
    render() {
        return (
            <div>
                <h1>New Requests</h1>
                <IncomingRequests
                    savedRequests= {this.state.savedRequests}
                    />
            </div>
        )
    }
}

export default IncomingRequest;
