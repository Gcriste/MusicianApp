import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"
import Moment from 'react-moment';


const SavedResult = props => {
  return (
    
    <div className="card">
      <div className="card-body player">
        <div className="article">
          
            <h1>Gigs You've Posted</h1>
              {props.savedGigs.map(savedgig => {

    return (
      <li className="search-list list-group-item">
      <Row 
      className="SearchResult row" 
      id={savedgig.userid} 
      key={savedgig._id}>
             
          <Col 
              className="giginfo">           
              <h2 className="gigMusician">Looking For {savedgig.musician} On <Moment date={savedgig.date} format="MM/DD/YYYY"/> </h2>
              <h2 className="gigpay">At {savedgig.venue} For ${savedgig.pay}</h2>
              <br></br>
              <h3 className="gigtime">From <Moment date={savedgig.starttime} format="hh:mm a"/> To <Moment date={savedgig.endtime} format="hh:mm a"/></h3>
              <h3 className="gigBandName">With {savedgig.bandname}</h3>
              <h3 className="gigMusicType">Music Type: {savedgig.musictype}</h3>
             
              
             
          </Col>
      </Row>
              <br></br>
          <Row className="buttonDiv ">
              <button 
              className="ui red vertical animated button" tabindex ="0"
              id={savedgig._id} 
              onClick={() => props.handleDeleteButton(savedgig._id)}>

                 <div className = "visible content">Gig Filled </div>
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