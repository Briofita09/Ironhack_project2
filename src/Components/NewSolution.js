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
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`
      );
      console.log(response.data.solucoes);
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    //response.data.solucoes.push(this.state);
    event.preventDefault();
    axios
      .post(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>New Solution</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>Nome: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
          <label>Responsavel: </label>
          <input
            type="text"
            name="responsavel"
            onChange={this.handleChange}
            value={this.state.responsavel}
            required
          />
          <label>Lote: </label>
          <input
            type="text"
            name="lote"
            onChange={this.handleChange}
            value={this.state.lote}
            required
          />
          <label>Data de Fabricação: </label>
          <input
            type="date"
            name="data_de_fabricacao"
            onChange={this.handleChange}
            value={this.state.data_de_fabricacao}
            required
          />
          <label>Validade: </label>
          <input
            type="date"
            name="validade"
            onChange={this.handleChange}
            value={this.state.validade}
            required
          />
          <label>Formula: </label>
          <input
            type="text"
            name="solucao"
            onChange={this.handleChange}
            value={this.state.solucao}
            required
          />
          <label>Concentração: </label>
          <input
            type="text"
            name="concentracao"
            onChange={this.handleChange}
            value={this.state.concentracao}
            required
          />
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </form>
      </div>
    );
  }
}
