import React, { Component } from 'react';


const PostResult = props => {

  
        return (
            <div>
                <h1>Post shows</h1>

             
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchDate"
          placeholder="Enter Date"
          onChange={props.handlePostChange}
    />
    <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchTime"
          placeholder="Enter Time"
          onChange={props.handlePostChange}
    />
   
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchVenue"
          placeholder="Enter Venue"
          onChange={props.handlePostChange}
    />
      <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchPay"
          placeholder="Enter Pay"
          onChange={props.handlePostChange}
    />
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBandName"
          placeholder="Enter Band Name"
          onChange={props.handlePostChange}
    />
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchMusicType"
          placeholder="Enter Music Type"
          onChange={props.handlePostChange}
    />

<button type="submit" 
        className="PostBtn btn btn-primary" 
        onClick={props.handlePostSubmit}>
                Submit
   </button>
            </div>
        )
    }



export default PostResult;
