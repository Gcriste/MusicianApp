import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const IncomingRequests = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
            <h3>Your Show Requests</h3>
              {props.savedRequests.map(savedrequest => {

    return (
      <li className="search-list list-group-item">
      <Row 
      className="SearchResult row" 
      id={savedrequest.userid} 
      key={savedrequest._id}>
             
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
              <h3 className="requestFirstName">First Name: {savedrequest.firstname}</h3>
              </Row>
              <Row>
              <h3 className="requestLastName">Last Name: {savedrequest.lastname}</h3>
              </Row>
              <Row>
              <h4 className="requestAge">Age: {savedrequest.age}</h4>
              </Row>
              <Row>
              <h3 className="requestExperience">Experience: {savedrequest.experience}</h3>
              </Row>
              <Row>
              <h4 className="requestReferenceName">Reference Name: {savedrequest.referencename}</h4>
              </Row>
              <Row>
              <h4 className="requestReferenceNumber">Reference Phone Number: {savedrequest.referencenumber}</h4>
              </Row>
              <Row>
              <h4 className="requestLink">Link: {savedrequest.link}</h4>
              </Row>
             
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