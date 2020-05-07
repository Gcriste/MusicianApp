import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';

const DiscussionResults = props => {
    let discussionsSorted = props.discussions.sort( (a,b) => {
       return new Date(a.date) - new Date(b.date);
    })
   
return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>All Posts</h1>
                {discussionsSorted.map(discussion => { 
                  
                    return (
                    <li className="search-list list-group-item">
                        <Row
                        className="SearchResult row" 
                        id={discussion.userid} 
                        key={discussion._id}>
                               
                            <Col
                                className="discussionInfo">
                                <h2 className="discussionMusician">Post: {discussion.text} On  <Moment date={discussion.date} format="MM/DD/YYYY"/></h2>
                                {/* <h2 className="discussionVenue"> At {discussion.venue} For ${discussion.pay}</h2>
                                <h3 className="discussiontime">From <Moment date={discussion.starttime} format="hh:mm a"/> To <Moment date={discussion.endtime} format="hh:mm a"/></h3>
                                <h3 className="discussionBandName">With {discussion.bandname}</h3>
                                <h3 className="discussionMusicType">Music Type: {discussion.musictype}</h3>
                                 */}
                               
                            </Col>
                        </Row>

                        <br></br>
                        <button 
                            className="ui red vertical animated button" tabindex ="0"
                            id={discussion._id} 
                            onClick={() => props.handleDeleteDiscussion(discussion._id)}>

                                <div className = "visible content">Delete Post </div>
                                                <div className = "hidden content">
                                                DELETE
                                                </div>  
                            </button>
                      
                            {/* <button className="ui primary animated button" tabindex="0"
                            id={discussion._id} 
                            onClick={() => props.handleCommentButton(discussion._id)}>
                                <div className = "visible content">Comment on Post </div>
                                <div className = "hidden content">
                                   Comment
                                  </div>      
                                </button> */}
                       
                            
                             
                            <a href={"/comment/" + discussion._id}>
                            <button className="ui primary animated button" tabindex="0">
                                <div className = "visible content">Comment </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                  </div>      
                                </button>
                                </a>
                       
                            </li>
                            );
                        })}
                    </div>
                </div>
            </div>
       
        )
}
export default DiscussionResults;