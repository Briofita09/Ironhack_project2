import React, { Component } from "react";
import axios from "axios";
class Delete extends Component {
  componentDidMount = async () => {
    let resposta = await axios.get(
      `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}`
    );
    let resposta2 = resposta.data.solucoes.filter((el) => {
      return el.sol_id !== this.props.match.params.sol_id;
    });

    resposta.solucoes = [...resposta2];

    const id = this.props.match.params._id;

    axios
      .put(`https://ironrest.herokuapp.com/FelipeEGabriel/${id}`, resposta)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/${id}/solucoes`);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return <div>...</div>;
  }
}
export default Delete;
