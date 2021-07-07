import React from "react";

import axios from "axios";

export default class SolutionsList extends React.Component {
  state = {
    solutions: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get("url");
      this.setState({ solutions: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <thead>
        <tr>
          <th>Solution</th>
          <th></th>
        </tr>
      </thead>
    );
  }
}

//email, senha, id {solucoes {responsavel, lote, data de fabricacao, validade, solucao}}
