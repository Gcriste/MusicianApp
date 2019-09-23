import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
return (

    <div>
    <h3> gigs will go here</h3>

    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>Search Results</h3>
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
                                <h3 className="gigVenue">Venue: {gig.venue}</h3>
                                </Row>
                                <Row>
                                <h3 className="gigDate">Date: {gig.date}</h3>
                                </Row>
                                <Row>
                                <h4 className="gigTime">Time: {gig.time}</h4>
                                </Row>
                                <Row>
                                <h3 className="gigPay">Pay: {gig.pay}</h3>
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
                            <button className="saveGig btn btn-primary" 
                                    id={gig.id} 
                                     onClick={(event) => props.handleSavedButton(event)}>
                                         Save Gig
                                </button>
                            <a href={gig.link} target="_blank">
                                <button className="viewGig btn btn-success">
                                    View Details
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