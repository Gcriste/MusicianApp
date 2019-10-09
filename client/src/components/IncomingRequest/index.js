import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const IncomingRequests = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
            <h1>New Requests</h1>
              {props.savedRequests.map(savedrequest => {

    return (
      <li className="search-list list-group-item">
      <Row 
      className="SearchResult row" 
      id={savedrequest.userid} 
      key={savedrequest._id}>
             
          <Col 
              
              className="col-md-6 requestInfo">
                    
              {props.dateForSavedRequests.map(data => (
                  <h2 className="requestFirstName"> For Gig On <Moment date={data.date} format="MM/DD/YYYY"/></h2>
              ))}
             
              {props.dateForSavedRequests.map(data => (
                  <h2 className="requestFirstName"> At {data.venue} </h2>
              ))}
              <br></br>
             
              <h3 className="requestFirstName"> Name: {savedrequest.firstname} {savedrequest.lastname}</h3>             
              <h3 className="requestAge">Age: {savedrequest.age}</h3>            
              <h3 className="requestExperience">Played on Broadway {savedrequest.experience}</h3>             
              <h3 className="requestReferenceName">Reference Name: {savedrequest.referencename}</h3>             
              <h3 className="requestReferenceNumber">Reference Phone Number: {savedrequest.referencenumber}</h3>             
              <h3 className="requestLink">Link: {savedrequest.link}</h3>
             
          </Col>
      </Row>
              <br></br>
          <Row className="buttonDiv ">
          <button 
              className="ui red vertical animated button" tabindex ="0"
              id={savedrequest._id} 
              onClick={() => props.handleDeleteButton(savedrequest._id)}>

                 <div className = "visible content">Remove Request </div>
                                <div className = "hidden content">
                                 DELETE
                                  </div>  
              </button>
            </Row>

           
      </li>
);
})}
          </div>
        </div>
      </div>
    )
}
export default IncomingRequests;