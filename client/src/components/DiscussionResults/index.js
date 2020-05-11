import React from "react";
import {Row, Col} from "../Grid";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import "./style.css"

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
                            <div className="card">
                            <img src = {discussion.avatar}></img>
                            <div className="container">
                            <h2 className="discussionMusician">{discussion.name}</h2> 
                             <p>{discussion.text}</p>
                                <p><Moment date={discussion.date} format="MM/DD/YYYY hh:mm"/></p>
                            </div>
                            </div>
                              
                               <hr></hr>
                                {discussion.comments.map(comment => {
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