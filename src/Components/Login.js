import axios from "axios";
import React, { Component } from "react";
import TextInput from "./TextInput";
class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/findOne/FelipeEGabriel?email=${this.state.email}`
      );
      if (
        response.data.password === this.state.password &&
        response.data.email === this.state.email
      ) {
        console.log("usuario valido");
      } else {
        console.log("usuario invalido");
      }
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
export default LogIn;
