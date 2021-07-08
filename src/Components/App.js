import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./Navbar";
import LogIn from "./Login";
import Singup from "./Singup";
import Calculadora from "./Calculadora";
import SolutionsList from "./SolutionsList";
import NewSolution from "./NewSolution";
import EditSolution from "./EditSolution";
import SolutionDetails from "./SolutionDetails";
import Delete from "./Delete";

class App extends React.Component {
  state = {
    _id: "",
    sol_id: "",
  };

  SetUser = (_id) => {
    this.setState({ _id: _id });
  };

  render() {
    return (
      <div className="App">
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
          <Route exact path="/:_id/edit/:sol_id" component={EditSolution} />
          <Route
            exact
            path="/:_id/details/:sol_id"
            component={SolutionDetails}
          />
          <Route exact path="/:_id/delete/:sol_id" component={Delete} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
