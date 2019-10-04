import React from 'react';

export function Input(props) {
    return (
        <div className = "ui big form">
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
</div>
    )
  };

  export function PostButton(props) {
    return (
        <button type="submit" 
              className="ui primary horizontal animated button" tabindex = "0"
              onClick={(event) => props.handlePostRequest(event)}>
                    <div className = "visible content">Submit </div>
                    <div className = "hidden content">
                    <i className = "right arrow icon"></i>
                    </div> 
                </button>
       

    )
  };

  export function Age(props) {
    return (
        <div className = "ui big form">
    <div className="field">
    <label>Age</label>
    <select className = "ui fluid search dropdown" {...props} >
    <option value="">0</option>
          <option value="Under 18"> Under 18</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-55">46-55</option>
          <option value="Over 55">Over 55</option>
          <option value="56-65">56-65</option>
          <option value="Over 65">Over 65</option>
            </select>
       </div>
       </div>
    )
  };


  export function Experience(props) {
    return (
       <div className = "ui big form">
    <div className="field">
    <label>Experience (How Many Times Have You Played Downtown?)</label>
    <select className = "ui fluid search dropdown" {...props} >
    <option value="0">0</option>
          <option value="Never Played Downtown"> Never Played Downtown</option>
          <option value="1-2 Times">1-2 Times</option>
          <option value="3-5 Times">3-5 Times</option>
          <option value="5-10 Times">5-10 Times</option>
          <option value="10-20 Tmes">10-20 Times</option>
          <option value="20-50 Times">20-50 Times</option>
          <option value="50-100 Times">50-100 Times</option>
          <option value="Over 100 Times">Over 100 Times</option>
            </select>
       </div>
       </div>
    )
  };