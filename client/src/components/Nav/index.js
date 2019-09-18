import React from "react";
import "./style.css"

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
              <h2 className="text-white">Google API Book Search</h2>
          </a>
          <div id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item" id="home">
                      <a className="nav-link text-white" href="/">Search Books</a>
                  </li>
                  <li className="nav-item" id="report">
                      <a className="nav-link text-white" href="/saved">Saved Books</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default Nav;
