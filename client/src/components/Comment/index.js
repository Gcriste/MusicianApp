import React from "react";


export function InputBox(props) {


    return (
       
    //   <div className="form-group">
    //     <input className="form-control" {...props} />
    //   </div>
            <div className="field">
            <label>Text</label>
            <textarea {...props}></textarea>
            </div>
    )
  };

  export function PostComment(props) {
    return (
       
        
<button 
className="ui violet vertical animated button" tabindex ="0"
onClick={(event) => props.handlePostSubmit(event)}>
    
   <div className = "visible content">Post Comment </div>
      <div className = "hidden content">
            Submit
          </div>  
</button>


    )
  };
