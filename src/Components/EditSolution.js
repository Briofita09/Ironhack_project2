import React from "react";
import axios from "axios";

export default class EditSolution extends React.Component {
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
        `https://ironrest.herokuapp.com/FelipeEGabriel/${this.props.match.params._id}/edit/${this.props.match.params.sol_id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
}
