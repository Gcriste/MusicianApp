import React from "react";
import "./style.css"

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="/">
              <h2 className="header">Gig Finder</h2>
          </a>
          <div id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item" id="home">
                      <a className="nav-link" href="/">Search for Shows</a>
                  </li>
                  <li className="nav-item" id="report">
                      <a className="nav-link" href="/saved">Saved Shows</a>
                  </li>
                    <li className="nav-item" id="report">
                      <a className="nav-link" href="/post">Post a Show</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default Nav;
