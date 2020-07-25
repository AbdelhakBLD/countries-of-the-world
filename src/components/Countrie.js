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
          className="btn btn-info"
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
                <p>Population : {this.state.details.population}</p>
                <p>Languages : {this.state.details.languages[0].name}</p>
                <p>Currencies : {this.state.details.currencies[0].name}</p>
                <p>Time Zones : {this.state.details.timezones[0]}</p>
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
