import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
return (
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>Search Results</h3>
                {props.books.map(book => {                            
                    return (
                    <li className="search-list list-group-item">
                        <Row 
                        id={book.title} 
                        key={book._id}>
                            <Col 
                                className="bookImage">
                                <img 
                                src={book.image} 
                                alt={book.title} />
                            </Col>
                               
                            <Col 
                                className="bookInfo">
                                <Row>
                                <h3 className="bookTitle">{book.title}</h3>
                                </Row>
                                <Row>
                                <h4 className="bookAuthor">{book.author}</h4>
                                </Row>
                                <Row>
                                <p className="bookDescription">{book.description}</p>
                                </Row>
                            </Col>
                        </Row>

                        <br></br>
                        <Row className="buttonDiv ">
                            <button className="saveBook btn btn-primary" 
                                    id={book.id} 
                                     onClick={(event) => props.handleSavedButton(event)}>
                                         Save Book
                                </button>
                            <a href={book.link} target="_blank">
                                <button className="viewBook btn btn-success">
                                    View Book
                                </button>
                            </a>
                        </Row>
                            </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult;