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
        gigid:"",
        dateForSavedRequests:[]
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


        for (var i = 0; i < requestGigId.length; i++) {
            API.getRequestByGig(requestGigId[i])
            .then(res => {
                this.setState({
                    savedRequests: res.data
                  })
            })
            API.getGig(requestGigId[i])
            .then(res => {
            console.log(res.data)
            this.setState({
          dateForSavedRequests:res.data
        })
      
        
      })
        }
       
        
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
                <IncomingRequests
                    savedRequests= {this.state.savedRequests}
                    dateForSavedRequests={this.state.dateForSavedRequests}
                    />
            </div>
        )
    }
}

export default IncomingRequest;
