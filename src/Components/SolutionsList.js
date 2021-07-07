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
      <div>
        <ul>
          {this.state.solutions.map((solution) => {
            return (
              <li>
                <p>{solution.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//email, senha, id {solucoes {responsavel, lote, data de fabricacao, validade, solucao}}
