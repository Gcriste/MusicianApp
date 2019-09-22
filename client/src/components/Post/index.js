import React, { Component } from 'react';



    const PostResult = props => {

  
        return (
            <div>
                <h1>Post shows</h1>

             
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchTime"
          placeholder="Enter Date"
          onChange={props.handleInputChange}
    />
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchPay"
          placeholder="Enter Pay"
          onChange={props.handleInputChange}
    />
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchVenue"
          placeholder="Enter Venue"
          onChange={props.handleInputChange}
    />
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBandName"
          placeholder="Enter Band Name"
          onChange={props.handleInputChange}
    />
     <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchMusic"
          placeholder="Enter Music Type"
          onChange={props.handleInputChange}
    />

<button type="submit" 
        className="PostBtn btn btn-primary" 
        onClick={props.handleFormSubmit}>
                Submit
   </button>
            </div>
        )
    }



export default PostResult;
