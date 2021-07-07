import React, { Component } from "react";
import TextInput from "./TextInput";
import axios from "axios";

class Singup extends Component {
  state = {
    email: "",
    password: "",
    solucoes: [],
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        "https://ironrest.herokuapp.com/FelipeEGabriel",
        this.state
      );
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <form className="container m-5">
          <TextInput
            label="Email address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextInput
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleSubmit} className="m-5 btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}
export default Singup;
