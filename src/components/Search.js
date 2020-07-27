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
        <form className="form-inline my-2 my-lg-0 sticky-top m-2">
          <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filter}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <Countries countries={filteredData} />
      </>
    );
  }
}

export default Search;
