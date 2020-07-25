import React, { Component } from "react";
import Search from "./Search";

class Home extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <center>
          <h1>Countries List</h1>
          <h2>by AbdelhakBLD</h2>
        </center>
        <Search countries={this.state.countries}></Search>
        {/* <Countries countries={this.state.countries} /> */}
      </>
    );
  }
}

export default Home;
