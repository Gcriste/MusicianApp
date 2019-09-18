import React from "react";

// This file exports the Input, TextArea, and FormBtn components

const SearchForm = props => {

  return (
    <form>
    <div className="form-group">
    <label><h3>Search For Book</h3></label>
    <br></br>
   <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Enter Book Title"
          onChange={props.handleInputChange}
    />
    </div>


    <button type="submit" 
        className="FormBtn btn btn-warning" 
        onClick={props.handleFormSubmit}>
                Submit
   </button>
   </form>
  )
}
export default SearchForm;
