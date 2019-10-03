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
              {props.dateForSavedRequests.map(data => (
                  <h3 className="requestFirstName"> Gig Date: <Moment date={data.date} format="MM/DD/YYYY"/></h3>
              ))}
              </Row>
              <Row>
              {props.dateForSavedRequests.map(data => (
                  <h3 className="requestFirstName"> Venue: {data.venue} </h3>
              ))}
              </Row>
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
             
          </Col>
      </Row>
              <br></br>
          <Row className="buttonDiv ">
              <button 
              className="ui red vertical animated button" tabindex = "0"
              id={savedRequest._id} 
              onClick={() => props.handleDeleteRequest(savedRequest._id)}>
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
export default SavedRequests;