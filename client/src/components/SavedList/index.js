import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const SavedResult = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
          
            <h3>Your Posted Shows</h3>
              {props.savedGigs.map(savedgig => {

    return (
      <li className="search-list list-group-item">
      <Row 
      className="SearchResult row" 
      id={savedgig.userid} 
      key={savedgig._id}>
             
          <Col 
              size="9" 
              className="gigInfo">
                <Row>
              <h3 className="gigMusician">Musician: {savedgig.musician}</h3>
              </Row>
              <Row>
              <h3 className="gigVenue">Venue: {savedgig.venue}</h3>
              </Row>
              <Row>
              <h3 className="gigDate">Date:<Moment date={savedgig.date} format="MM/DD/YYYY"/> </h3>
              </Row>
              <Row>
              <h4 className="gigTime">Time: {savedgig.time}</h4>
              </Row>
              <Row>
              <h3 className="gigPay">Pay: {savedgig.pay}</h3>
              </Row>
              <Row>
              <h4 className="gigBandName">Band Name: {savedgig.bandname}</h4>
              </Row>
              <Row>
              <h4 className="gigMusicType">Music Type: {savedgig.musictype}</h4>
              </Row>
              
             
          </Col>
      </Row>
              <br></br>
          <Row className="buttonDiv ">
              <button 
              className="deleteGig btn btn-danger" 
              id={savedgig._id} 
              onClick={() => props.handleDeleteButton(savedgig._id)}>
                 Delete Gig
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
export default SavedResult;