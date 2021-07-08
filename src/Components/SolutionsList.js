import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SolutionsList extends React.Component {
  state = {
    solutions: [],
    _id: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.state._id}`
      );
      console.log(response);
      this.setState({ solutions: [...response.data.solucoes] });
    } catch (err) {
      console.log(err);
    }
  };

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
          {this.state.solutions.map((params) => {
            return (
              <tr className="table-dark" key={params.name}>
                <td className="table-dark">{params.name}</td>
                <td className="table-dark">{params.lote}</td>
                <td className="table-dark">{params.responsavel}</td>
                <td className="table-dark">{params.data_de_fabricacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

//email, senha, id {solucoes {responsavel, lote, data de fabricacao, validade, solucao}}
