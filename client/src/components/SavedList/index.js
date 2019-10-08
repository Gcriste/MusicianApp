import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const SavedResult = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
          
            <h3>Shows You've Posted</h3>
              {props.savedGigs.map(savedgig => {

    return (
      <li className="search-list list-group-item">
      <Row 
      className="SearchResult row" 
      id={savedgig.userid} 
      key={savedgig._id}>
             
          <Col 
              className="gigInfo">
                <Row>
              <h3 className="gigMusician">Looking For {savedgig.musician} On <Moment date={savedgig.date} format="MM/DD/YYYY"/> </h3>
              </Row>
              <Row>
              <h3 className="gigpay">At {savedgig.venue} For ${savedgig.pay}</h3>
              </Row>
              <Row>
              <h4 className="gigtime">From <Moment date={savedgig.starttime} format="hh:mm a"/> To <Moment date={savedgig.endtime} format="hh:mm a"/></h4>
              </Row>
              <Row>
              <h4 className="gigBandName">With {savedgig.bandname}</h4>
              </Row>
              <Row>
              <h4 className="gigMusicType">Music Type: {savedgig.musictype}</h4>
              </Row>
              
             
          </Col>
      </Row>
              <br></br>
          <Row className="buttonDiv ">
              <button 
              className="ui red vertical animated button" tabindex ="0"
              id={savedgig._id} 
              onClick={() => props.handleDeleteButton(savedgig._id)}>

                 <div className = "visible content">Remove Gig </div>
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
export default SavedResult;