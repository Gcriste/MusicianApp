import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const CommentResults = props => {

return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h1>All Posts</h1>
                {props.savedDiscussions.map(savedDiscussion => { 
                  
                    return (
                    <li className="search-list list-group-item">
                        <Row
                        className="SearchResult row" 
                        id={savedDiscussion.userid} 
                        key={savedDiscussion._id}>
                               
                            <Col
                                className="savedDiscussionInfo">
                                <h2 className="savedDiscussionMusician">Post: {savedDiscussion.text} On  <Moment date={savedDiscussion.date} format="MM/DD/YYYY"/></h2>
                                {savedDiscussion.comments.map(comment => 
                                 <p>Comments: {comment.text}</p>)}
                              
                               
                            </Col>
                        </Row>

                        <br></br>
                        <Row className="buttonDiv" >
                       <Link to={"/comment/" + savedDiscussion._id} className="ui primary animated button" tabindex="0" >   
                                <div className = "visible content">Comment </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                </div>   
                        </Link>
                              
                       </Row>
                        <button 
                            className="ui red vertical animated button" tabindex ="0"
                            id={savedDiscussion._id} 
                            onClick={() => props.handleDeletesavedDiscussion(savedDiscussion._id)}>

                                <div className = "visible content">Delete Comment</div>
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
export default CommentResults;