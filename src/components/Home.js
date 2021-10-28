import React, { Component } from "react";
import Search from "./Search";

class Home extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    fetch("https://restcountries.com/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <Search countries={this.state.countries}></Search>
      </>
    );
  }
}

export default Home;