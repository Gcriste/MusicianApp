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
                            
                               
                         <Col>
                            
                                <h3 className="discussionMusician">{discussion.name} {discussion.avatar}: {discussion.text}</h3> 
                               
                                {discussion.comments.map(comment => {
                                   if(comment.text){
                                     return (
                                         <>
                                 <h4>{props.user.email}: {comment.text}</h4>
                                 <p><Moment date={comment.date} format="MM/DD/YYYY hh:mm"/></p>
                                 </>
                                     )
                                   }
                                   else{
                                       return (
                                       <h4>Comments:</h4>
                                       )
                                   }
                                 } )}
                                    
                                    </Col>  
                            
                        </Row>
                       

                        <Row className="buttonDiv" >
                            <Col>
                       <Link to={"/comment/" + discussion._id} className="ui primary animated button" tabindex="0" >   
                                <div className = "visible content">Comment </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                </div>   
                        </Link>
                              
                       
                        <button 
                            className="ui red vertical animated button" tabindex ="0"
                            id={discussion._id} 
                            onClick={() => props.handleDeleteDiscussion(discussion._id)}>

                                <div className = "visible content">Delete Post </div>
                                                <div className = "hidden content">
                                                DELETE
                                                </div>  
                            </button>
                            </Col>
                            </Row>
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