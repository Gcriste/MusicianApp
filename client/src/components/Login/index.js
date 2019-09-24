import React from "react";

export function Input(props) {
    return (
       <div>
        <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    
    
        {/* <button type="submit" 
            className="FormBtn btn btn-warning" 
            onClick={props.handleFormSubmit}>
                    Submit
         </button> */}
      </div>

    )
}

export function PostButton(props) {
    return (
       
        <button type="submit" 
              className="PostBtn btn btn-primary" 
              onClick={(event) => props.handleLoginSubmit(event)}>
                      Submit
                </button>

    )
  };