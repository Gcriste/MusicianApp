import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";
import {Link} from "react-router-dom";
import Moment from 'react-moment';

const SearchResult = props => {
return (

    <div>
   

    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>Upcoming Gigs</h3>
                {props.gigs.map(gig => {                            
                    return (
                    <li className="search-list list-group-item">
                        <Row 
                        className="SearchResult row" 
                        id={gig.id} 
                        key={gig._id}>
                               
                            <Col 
                                size="9" 
                                className="gigInfo">
                                
                                <Row>
                                <h4 className="gigMusician">Musician Type: {gig.musician}</h4>
                                </Row>
                                <Row>
                                <h3 className="gigDate">Date: <Moment date={gig.date} format="MM/DD/YYYY"/></h3>
                                </Row>
                                <Row>
                                <h3 className="gigVenue">Venue: {gig.venue}</h3>
                                </Row>
                                <Row>
                                <h3 className="gigPay">Pay: ${gig.pay}</h3>
                                </Row>
                                <Row>
                                <h4 className="gigTime">Time: {gig.time}</h4>
                                </Row>
                               
                                <Row>
                                <h4 className="gigBandName">Band Name: {gig.bandname}</h4>
                                </Row>
                                <Row>
                                <h4 className="gigMusicType">Music Type: {gig.musictype}</h4>
                                </Row>
                                
                               
                            </Col>
                        </Row>

                        <br></br>
                        <Row className="buttonDiv ">
                            <a href={"/request/" + gig._id}>
                            <button className="ui violet animated button" tabindex="0">
                                <div className = "visible content">Request To Play Gig </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                  </div>      
                                </button>
                                </a>
                        </Row>
                            </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
}
export default SearchResult;