import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LogIn from "./Login";
import Singup from "./Singup";
import Calculadora from "./Calculadora";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route
          exact
          path="/"
          render={function (props) {
            return <LogIn />;
          }}
        />
        <Route exact path="/singup" component={Singup} />
        <Route exact path="/:id/calculadora" component={Calculadora} />
      </BrowserRouter>
    </div>
  );
}

export default App;
