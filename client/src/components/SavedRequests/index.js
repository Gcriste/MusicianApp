import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const SavedRequests = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
       
            <h1>Requests You've Made</h1>
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
              
              {props.dateForSavedRequests.map(data => (
                  <h2 className="requestFirstName"> For The Gig With {data.bandname} On <Moment date={data.date} format="MM/DD/YYYY"/></h2>
              ))}

              {props.dateForSavedRequests.map(data => (
                  <h2 className="requestFirstName"> At {data.venue} </h2>
              ))}
              <hr></hr>
              <h3 className="requestFirstName">Your Name {savedRequest.firstname} {savedRequest.lastname},  {savedRequest.age} Years Old</h3>
              <h3 className="requestExperience">Your Phone Number {savedRequest.number}</h3>
              <h3 className="requestExperience">Played on Broadway {savedRequest.experience}</h3>
              <h3 className="requestReferenceName">Reference Name: {savedRequest.referencename}</h3>
              <h3 className="requestReferenceNumber">Reference Phone Number: {savedRequest.referencenumber}</h3>
              <h3 className="requestLink">Link: {savedRequest.link}</h3>
             
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