import React from "react";
import axios from "axios";

export default class NewSolution extends React.Component {
  state = {
    name: "",
    responsavel: "",
    lote: "",
    data_de_fabricacao: "",
    validade: "",
    solucao: "",
    concentracao: "",
    sol_id: "",
  };

  /*   componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/FelipeEGabriel/`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }; */

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      sol_id: Date.now(),
    });
    console.log(
      `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`
    );
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`
      );

      console.log(response);

      let newSolution = [...response.data.solucoes, this.state];

      let solutionUpdate = await axios.put(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${response.data._id}`,
        { solucoes: newSolution }
      );
      console.log(solutionUpdate);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    //console.log(this.state);
    return (
      <div className="newSolutionContainer all">
        <div>
          <h1>Nova Solução</h1>
        </div>
        <hr />
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="newSolutionContainerForm"
          >
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Nome:{" "}
              </label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
            </div>
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Responsavel:{" "}
              </label>
              <input
                type="text"
                name="responsavel"
                onChange={this.handleChange}
                value={this.state.responsavel}
                required
              />
            </div>
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Lote:{" "}
              </label>
              <input
                type="text"
                name="lote"
                onChange={this.handleChange}
                value={this.state.lote}
                required
              />
            </div>
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Data de Fabricação:{" "}
              </label>
              <input
                type="date"
                name="data_de_fabricacao"
                onChange={this.handleChange}
                value={this.state.data_de_fabricacao}
                required
              />
            </div>
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Validade:{" "}
              </label>
              <input
                type="date"
                name="validade"
                onChange={this.handleChange}
                value={this.state.validade}
                required
              />
            </div>
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Formula:{" "}
              </label>
              <input
                type="text"
                name="solucao"
                onChange={this.handleChange}
                value={this.state.solucao}
                required
              />
            </div>
            <div className="newSolutionItemForm">
              <label>
                <i className="fas fa-atom"></i>Concentração:{" "}
              </label>
              <input
                type="text"
                name="concentracao"
                onChange={this.handleChange}
                value={this.state.concentracao}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-5">
              Adicionar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
