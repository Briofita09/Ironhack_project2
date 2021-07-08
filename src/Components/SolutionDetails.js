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
      <div>
        <h1>Detalhes da Solução</h1>
        <hr />
        <div>
          <div>
            <h3>Nome: </h3>
            <h4>{this.state.name}</h4>
          </div>
          <div>
            <h3>Responsavel: </h3>
            <h4>{this.state.responsavel}</h4>
          </div>
          <div>
            <h3>Lote: </h3>
            <h4>{this.state.lote}</h4>
          </div>
          <div>
            <h3>Data de Fabricação: </h3>
            <h4>{this.state.data_de_fabricacao}</h4>
          </div>
          <div>
            <h3>Validade: </h3>
            <h4>{this.state.validade}</h4>
          </div>
          <div>
            <h3>Formula: </h3>
            <h4>{this.state.solucao}</h4>
          </div>
          <div>
            <h3>Concentração: </h3>
            <h4>{this.state.concentracao}</h4>
          </div>
        </div>
      </div>
    );
  }
}
