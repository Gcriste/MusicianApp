import React from 'react';

export function Input(props) {
    return (
       
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>

    )
  };

  export function PostButton(props) {
    return (
       
        <button type="submit" 
              className="PostBtn btn btn-primary" 
              onClick={(event) => props.handlePostSubmit(event)}>
                      Submit
                </button>

    )
  };

