import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

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
                                {discussion.comments.map(comment => 
                                 <p>Comments: {comment.text}</p>)}
                              
                               
                            </Col>
                        </Row>

                        <br></br>
                        <Row className="buttonDiv" >
                       <Link to={"/comment/" + discussion._id} className="ui primary animated button" tabindex="0" >   
                                <div className = "visible content">Comment </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                </div>   
                        </Link>
                              
                       </Row>
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
                       
                            
                      
                            </li>
                            );
                        })}
                    </div>
                </div>
            </div>
       
        )
}
export default DiscussionResults;