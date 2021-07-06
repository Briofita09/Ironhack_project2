import React, { Component } from "react";
import TextInput from "./TextInput";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    users: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { email: this.state.email, password: this.state.password };
    this.setState({ users: [...this.state.users, newUser] });
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



