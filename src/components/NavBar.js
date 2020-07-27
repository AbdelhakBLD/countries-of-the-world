import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <center>
          <h1 className="mt-4 mb-4 display-1">Countries Of The World</h1>
        </center>
        {/* <div class="mx-auto d-sm-flex d-block flex-sm-nowrap"> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-2 nav-links">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <Link to="/">
                <li className="navbar-brand nav-item nav-link">Countries List</li>
              </Link>
              <Link to="/about">
                <li className="nav-item nav-link">À propos du développeur</li>
              </Link>
              {/* <Link to="/contact">
                <li className="nav-item nav-link">Contact</li>
              </Link>
              <Link to="/shop">
                <li className="nav-item nav-link">Shop</li>
              </Link> */}
            </ul>
          </div>
        </nav>
        {/* </div> */}
      </>
    );
  }
}

export default NavBar;
