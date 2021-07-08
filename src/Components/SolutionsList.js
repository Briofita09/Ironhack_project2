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
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`
      );
      console.log(response);
      this.setState({ solutions: [...response.data.solucoes] });
      console.log(this.state.solutions);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <table className="table table-dark">
        <thead>
          <tr className="table-dark">
            <th>Nome da Solução/Reagente</th>
            <th>Concentração</th>
            <th>Validade</th>
            <th>Responsavel</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.state.solutions.map((params) => {
            return (
              <tr className="table-dark" key={params.sol_id}>
                <td>{params.name}</td>
                <td>{params.concentracao}</td>
                <td>{params.validade}</td>
                <td>{params.responsavel}</td>
                <td>
                  <Link
                    className="me-5"
                    to={`/:_id/edit/${params.sol_id}`}
                    title="Editar"
                  >
                    <i className="fas fa-edit"></i>
                  </Link>
                  <Link
                    className="me-5"
                    to={`/:_id/details/${params.sol_id}`}
                    title="Ver detalhes"
                  >
                    <i className="fas fa-info-circle"></i>
                  </Link>

                  <Link
                    to={`/:_id/delete/${params.sol_id}`}
                    title="Deletar solução"
                    className="text-danger"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
//email, senha, id {solucoes {responsavel, lote, data de fabricacao, validade, solucao}}
