import axios from "axios";
import React, { Component } from "react";
import TextInput from "./TextInput";
class LogIn extends Component {
  state = {
    email: "",
    password: "",
    isBlurred: {
      email: false,
      password: false,
    },
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleBlur = (event) => {
    this.setState({
      isBlurred: { ...this.state.isBlurred, [event.target.name]: true },
    });
  };

  renderFeedback = (error, blur, validMessage) => {
    if (error && blur) {
      return <div className="invalid-feedback">{error}</div>;
    } else if (!blur) {
      return null;
    } else {
      return <div className="valid-feedback">{validMessage}</div>;
    }
  };
  validate = (formValues) => {
    let errors = {};
    if (
      !formValues.email ||
      !formValues.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g)
    ) {
      errors = { ...errors, email: "Invalid E-mail" };
    }
    if (
      !formValues.password ||
      !formValues.password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
      )
    ) {
      errors = { ...errors, password: "Your password is too weak" };
    }
    return errors;
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
