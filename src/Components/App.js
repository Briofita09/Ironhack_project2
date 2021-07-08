import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import LogIn from "./Login";
import Singup from "./Singup";
import Calculadora from "./Calculadora";
import SolutionsList from "./SolutionsList";
import NewSolution from "./NewSolution";
import EditSolution from "./EditSolution";

class App extends React.Component {
  state = {
    _id: "",
  };

  SetUser = (_id) => {
    this.setState({ _id: _id });
  };

  render() {
    return (
      <div className="App">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
        </style>
        <BrowserRouter>
          <Navbar user={this.state._id} />
          <Route
            exact
            path="/"
            render={(props) => {
              return <LogIn {...props} setUser={this.SetUser} />;
            }}
          />
          <Route exact path="/singup" component={Singup} />
          <Route exact path="/:_id/calculadora" component={Calculadora} />
          <Route exact path="/:_id/solucoes" component={SolutionsList} />
          <Route exact path="/:_id/create" component={NewSolution} />
          <Route exact path="/:_id/edit/sol_id" component={EditSolution} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
