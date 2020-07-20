import React from "react";

const Countries = ({ countries }) => {
  return (
    <div>
      <center>
        <h1>Countries List by AbdelhakBLD</h1>
      </center>
      <div className="d-flex flex-wrap justify-content-center">
        {countries.map((countrie) => (
          <div className="card m-2 flex-item" key={countrie.numericCode}>
            <img
              className="card-img-top"
              src={countrie.flag}
              alt={"flag of " + countrie.name}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{countrie.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {countrie.capital}
              </h6>
              <p className="card-text">{countrie.region}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
