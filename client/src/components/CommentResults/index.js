import React, {Fragment} from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import "./style.css"

const CommentResults = props => {

return (
    
    <div className="card">
        <div className="card-body player">
            <div className="article">
               
                {props.savedDiscussions.map(savedDiscussion => { 
                   
                    return (
                        
                    <li className="search-list list-group-item">
                        <Row
                        className="SearchResult row" 
                        id={savedDiscussion.userid} 
                        key={savedDiscussion._id}>
                           
                           <div className="card">
                           <img src = {savedDiscussion.avatar}></img>
                           <div className="container">
                           <h2>{savedDiscussion.name}</h2>
                           <p className="savedDiscussionMusician">{savedDiscussion.text}</p>
                            <p><Moment date={savedDiscussion.date} format="MM/DD/YYYY hh:mm"/></p>
                           </div>
                           </div>
                           
                           
                        </Row>
                        <Row>
                           
                            <Col
                                className="savedDiscussionInfo">
                                
                               
                                {savedDiscussion.comments.map(comment => {
                                   if(comment.text){
                                     return (
                                        <>
                                      <div className="card"> 
                                      <img src={comment.avatar}></img>
                                      <div className="container">
                                 <h2>{comment.name}</h2> 
                                 <p>{comment.text}</p>
                                 <p><Moment date={comment.date} format="MM/DD/YYYY hh:mm"/></p>
                                 </div>
                                 </div> 
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
                        {/* <button 
                            className="ui red vertical animated button" tabindex ="0"
                            id={savedDiscussion._id} 
                            onClick={() => props.handleDeletesavedDiscussion(savedDiscussion._id)}>

                                <div className = "visible content">Delete Comment</div>
                                                <div className = "hidden content">
                                                DELETE
                                                </div>  
                            </button> */}
                      
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