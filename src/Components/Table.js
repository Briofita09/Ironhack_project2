import React, { Component } from "react";

class Table extends Component {
  state = {};

  render() {
    return (
      <table className="table-dark">
        <thead>
          <tr className="table-dark">
            <th className="table-dark">Header placeholder</th>
            <th className="table-dark">Header placeholder</th>
            <th className="table-dark">Header placeholder</th>
            <th className="table-dark">Header placeholder</th>
          </tr>
        </thead>
        <tbody>
          {this.state.map((params) => {
            return (
              <tr className="table-dark" key={params.id}>
                <td className="table-dark">{params.formula}</td>
                <td className="table-dark">{params.concentracao}</td>
                <td className="table-dark">{params.volume}</td>
                <td className="table-dark">{params.result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
