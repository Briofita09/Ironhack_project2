import React from "react";
import axios from "axios";

export default class SolutionDetails extends React.Component {
  state = {
    name: "",
    responsavel: "",
    lote: "",
    data_de_fabricacao: "",
    validade: "",
    solucao: "",
    concentracao: "",
  };

  componentDidMount = async () => {
    try {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`
      );

      let result = response.data.solucoes.find((el) => {
        return el.sol_id === this.props.match.params.sol_id;
      });

      if (result) {
        this.setState({ ...result });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="newSolutionContainer all">
        <h1>Detalhes da Solução</h1>
        <hr />
        <div>
          <div className="solutionDetailsItem">
            <h2>Nome: </h2>
            <p className="state">{this.state.name}</p>
          </div>
          <div className="solutionDetailsItem">
            <h3>Responsavel: </h3>
            <p className="state">{this.state.responsavel}</p>
          </div>
          <div className="solutionDetailsItem">
            <h3>Lote: </h3>
            <p className="state">{this.state.lote}</p>
          </div>
          <div className="solutionDetailsItem">
            <h3>Data de Fabricação: </h3>
            <p className="state">{this.state.data_de_fabricacao}</p>
          </div>
          <div className="solutionDetailsItem">
            <h3>Validade: </h3>
            <p className="state">{this.state.validade}</p>
          </div>
          <div className="solutionDetailsItem">
            <h3>Formula: </h3>
            <p className="state">{this.state.solucao}</p>
          </div>
          <div className="solutionDetailsItem">
            <h3>Concentração: </h3>
            <p className="state">{this.state.concentracao}</p>
          </div>
        </div>
      </div>
    );
  }
}
