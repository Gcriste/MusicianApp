import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const SavedRequests = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
       
            <h3>Your Show Requests</h3>
              {props.savedRequests.map(savedRequest => {
        

    return (
      <li className="search-list list-group-item">
      <Row 
      className="SearchResult row" 
      id={savedRequest.userid} 
      key={savedRequest._id}>
             
          <Col 
              size="9" 
              className="requestInfo">
              <Row>
              <h3 className="requestFirstName">First Name: {savedRequest.firstname}</h3>
              </Row>
              <Row>
              <h3 className="requestLastName">Last Name: {savedRequest.lastname}</h3>
              </Row>
              <Row>
              <h4 className="requestAge">Age: {savedRequest.age}</h4>
              </Row>
              <Row>
              <h3 className="requestExperience">Experience: {savedRequest.experience}</h3>
              </Row>
              <Row>
              <h4 className="requestReferenceName">Reference Name: {savedRequest.referencename}</h4>
              </Row>
              <Row>
              <h4 className="requestReferenceNumber">Reference Phone Number: {savedRequest.referencenumber}</h4>
              </Row>
              <Row>
              <h4 className="requestLink">Link: {savedRequest.link}</h4>
              </Row>
              <Row>
              <h4 className="requestGig">GigId: {savedRequest.gigdate}</h4>
              </Row>
             
          </Col>
      </Row>
              <br></br>
          <Row className="buttonDiv ">
              <button 
              className="deleteRequest btn btn-danger" 
              id={savedRequest._id} 
              onClick={() => props.handleDeleteButton(savedRequest._id)}>
                 Delete Request
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
export default SavedRequests;