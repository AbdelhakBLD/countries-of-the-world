import React, { Component } from "react";
import Countries from "./Countries";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const data = this.props.countries;
    const filter = this.state.filter;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().match(lowercasedFilter);
    });

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
            <a className="navbar-brand" href="/">
              Countries List
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Africa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Americas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Asia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Europe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Oceania
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={filter}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </nav>
        <Countries countries={filteredData} />
      </>
    );
  }
}

export default Search;
