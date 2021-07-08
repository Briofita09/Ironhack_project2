import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component } from "react";

class SolutionUpdate extends Component{
state={ solutions: [],
    _id: ""}

componentDidMount = async () => {
    try {
      const id = this.props.match.params._id;

      const response = await axios.get(
        `https://ironrest.herokuapp.com/FelipeEGabriel/${id}`
      );

      this.setState({ ...response.data });
    } catch (err) {
      console.log(err);
    }
  };



  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const id = this.props.match.params._id;

    event.preventDefault();

    axios
      .put(`https://ih-crud-api.herokuapp.com/characters/${id}`, this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/${id}/solucoes`); // Redireciona a aplicação de volta pra lista de personagens
      })
      .catch((err) => {
        console.log(err);
      });
  };


render(){
    return
}
}









export default SolutionUpdate