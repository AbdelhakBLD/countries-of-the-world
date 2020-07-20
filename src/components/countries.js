import React from "react";

const Countries = ({ countries }) => {
  return (
    <div>
      <center>
        <h1>Countries List</h1>
      </center>
      {countries.map((countrie) => (
        <div className="card" key={countrie.numericCode}>
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
  );
};

export default Countries;
