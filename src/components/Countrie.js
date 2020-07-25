import React, { Component } from "react";

class Countrie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      code: this.props.details.alpha3Code
    };
  }
  render() {
    return (
      <>
        <button
          type="button"
          className="btn"
          data-toggle="modal"
          data-target={`#modal_` + this.state.code}
          id={`btn_` + this.state.code}
        >
          Details
        </button>
        <div
          className="modal fade"
          id={`modal_` + this.state.code}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`label_` + this.state.code}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Details of {this.state.details.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h4>Population : {this.state.details.population}</h4>
                <h4>Languages : {this.state.details.languages[0].name}</h4>
                <h4>Currencies : {this.state.details.currencies[0].name}</h4>
                <h4>Capital : {this.state.details.capital}</h4>
                <h4>Region : {this.state.details.region}</h4>
                <h4>Subregion : {this.state.details.subregion}</h4>
                <h4>Time Zones : {this.state.details.timezones[0]}</h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Countrie;
