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
         
          this.setState({
              userid:response.data._id
          })
         
          API.getSavedGigs(userId)
          .then(res => {
            // let gigId = res.data[1]._id
           this.setState({ 
           savedGigs: res.data 
         })
    
        // 
         console.log() 
      
      API.getRequests()
      .then(res => {
        for(var i =0; i< res.data.length;i++){
                let gigId = res.data[i]._id
                console.log(gigId)
               }
        console.log(res.data)
        this.setState({
          savedRequests:res.data,
        })
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
