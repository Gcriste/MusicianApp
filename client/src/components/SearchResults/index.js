import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";
import {Link} from "react-router-dom";
import Moment from 'react-moment';

const SearchResult = props => {
    let gigsSorted = props.gigs.sort( (a,b) => {
       return new Date(a.date) - new Date(b.date);
    })
   
return (

    <div>
   

    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>Upcoming Gigs</h1>
              
                {gigsSorted.map(gig => { 
                                          
                    return (
                    <li className="search-list list-group-item">
                        <Row 
                        className="SearchResult row" 
                        id={gig.id} 
                        key={gig._id}>
                               
                            <Col 
                              
                                className="col-md-6 gigInfo">
                                
                                <Row>
                                <h2 className="gigMusician">Looking For {gig.musician} On  <Moment date={gig.date} format="MM/DD/YYYY"/></h2>
                                </Row>
                                <Row>
                                <h3 className="gigVenue"> At {gig.venue} For ${gig.pay}</h3>
                                </Row>
                                <Row>
                                <h4 className="gigtime">From <Moment date={gig.starttime} format="hh:mm a"/> To <Moment date={gig.endtime} format="hh:mm a"/></h4>
                                </Row>
                               
                                <Row>
                                <h4 className="gigBandName">With {gig.bandname}</h4>
                                </Row>
                                <Row>
                                <h4 className="gigMusicType">Music Type: {gig.musictype}</h4>
                                </Row>
                                
                               
                            </Col>
                        </Row>

                        <br></br>
                        <Row className="buttonDiv ">
                            <a href={"/request/" + gig._id}>
                            <button className="ui primary animated button" tabindex="0">
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