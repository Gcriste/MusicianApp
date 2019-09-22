import React from "react";

// This file exports the Input, TextArea, and FormBtn components

const SearchForm = props => {

  return (
    <form>
    <div className="form-group">
    <h3>Search for Upcoming Gig by Giving a Date!</h3>
    <br></br>
   <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchDate"
          placeholder="Enter Date"
          onChange={props.handleInputChange}
    />
    </div>


    <button type="submit" 
        className="FormBtn btn btn-warning" 
        onClick={props.handleFormSubmit}>
                Submit
     </button>
<h3> Or search for all upcoming Gigs!</h3>
<button type="submit" 
        className="SearchBtn btn btn-warning" 
        onClick={props.handleFormSubmit}>
                Search All Gigs
   </button>
  
   </form>
  )
}
export default SearchForm;
