import React from "react";
import axios from "axios";

class LogIn extends React.Component {
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
  renderClassname = (error, blur) => {
    if (error && blur) {
      return "is-invalid";
    } else if (!blur) {
      return "";
    } else {
      return "is-valid";
    }
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
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{1,}$/g
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
      console.log(response);
      console.log(this.state.email);
      console.log(this.state.password);
      if (
        response.data.password === this.state.password &&
        response.data.email === this.state.email
      ) {
        this.props.setUser(response.data._id);
        this.props.history.push(`/${response.data._id}/solucoes`);
        console.log("usuario valido");
      } else {
        console.log("usuario invalido");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const errors = this.validate(this.state);
    return (
      <div className="col-lg-6 m-4">
        <form>
          {/* Email input */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={`form-control ${this.renderClassname(
                errors.email,
                this.state.isBlurred.email
              )}`}
              id="exampleInputEmail1"
              name="email"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.state.email}
              required
            />
            {this.renderFeedback(
              errors.email,
              this.state.isBlurred.email,
              "You typed a valid e-mail"
            )}
          </div>
          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control ${this.renderClassname(
                errors.password,
                this.state.isBlurred.password
              )}`}
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.state.password}
              required
            />
            {this.renderFeedback(
              errors.password,
              this.state.isBlurred.password,
              "You typed a valid password"
            )}
          </div>
          <button
            type="submit"
            className="btn mt-5 btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default LogIn;
