import React, { Component } from "react";
import Countrie from "./Countrie";

class Countries extends Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.props.countries.map((countrie) => (
          <div className="card m-2 flex-item" key={countrie.numericCode}>
            <img
              className="card-img-top"
              src={countrie.flag}
              alt={"flag of " + countrie.name}
            ></img>
            <div className="card-body">
              <h4 className="card-title">{countrie.name}</h4>
            </div>
            <Countrie details={countrie} />
          </div>
        ))}
      </div>
    );
  }
}

export default Countries;
