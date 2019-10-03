import React from 'react';

export function Input(props) {
    return (
       
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>

    )
  };

  export function Musician(props) {
    return (
       
    <div className="field">
    <label>Musician Type</label>
    <select className = "ui fluid search dropdown" {...props} >
    <option value="">Instrument</option>
          <option value="Singer">Singer</option>
          <option value="Guitarist">Guitar</option>
          <option value="Bassist">Bass</option>
          <option value="Drummer">Drums</option>
          <option value="Fiddle Player">Fiddle</option>
          <option value="Mandolin">Mandolin</option>
          <option value="Keyboard Player">Keys</option>
          <option value="Saxophone Player">Saxophone</option>
          <option value="Trumpet Player">Trumpet</option>
          <option value="Other">Other</option>
            </select>
       </div>
    )
  };
  export function PostButton(props) {
    return (
       
        
<button 
className="ui violet vertical animated button" tabindex ="0"
onClick={(event) => props.handlePostSubmit(event)}>
   <div className = "visible content">Post Gig </div>
      <div className = "hidden content">
            Submit
          </div>  
</button>


    )
  };

