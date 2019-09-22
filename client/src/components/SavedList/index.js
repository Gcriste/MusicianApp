import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"


const SavedResult = props => {
  return (

    <h1> hello</h1>
    
//     <div className="card">
//       <div className="card-body player">
//         <div className="article">
//             <h3>Saved Gigs</h3>
//               {props.savedGigs.map(savedgig => {

//     return (
//       <li className="saved-list list-group-item">
//         <Row className="SearchResult" 
//         id={savedgig.title} 
//         key={savedgig._id}>
//           <Col 
//           size="2" 
//           className="gigImage">
//             <img src={savedgig.image} alt={savedgig.title} />
//           </Col>

//           <Col size="10" className="gigInfo">
//           <Row>
//               <h2 className="gigTitle">{savedgig.title}</h2>
//           </Row>

//           <Row>
//               <h3 className="gigAuthor">{savedgig.authors}</h3>
//           </Row>
//           <Row>
//               <p className="bookDescription">{savedbook.description}</p>
//           </Row>
//           </Col>
//           </Row>
//               <br></br>
//           <Row className="buttonDiv ">
//               <button 
//               className="deleteBook btn btn-danger" 
//               id={savedbook._id} 
//               onClick={() => props.handleDeleteButton(savedbook._id)}>
//                  Delete Book
//               </button>
//               <a href={savedbook.link} target="_blank">
//                   <button className="viewBook btn btn-success">
//                     View Book
//                   </button>
//               </a>
//             </Row>
//       </li>
// );
// })}
//           </div>
//         </div>
//       </div>
    )
}
export default SavedResult;