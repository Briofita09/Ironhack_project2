import React from "react";
import chemyMass from "chemymass";
import molFormula from "molecular-formula";

export default class Calculadora extends React.Component {
  state = {
    formula: "",
    grams: "",
    volume: "",
    mols: "",
  };

  calculate = () => {
    this.setState({ formula: this.state.formula });
    console.log(this.formula);
    let x = new molFormula(this.state.formula);
    let mass = x.getMass();
    let result = mass * this.state.volume * this.state.mols;
    console.log(result);
    return result;
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handeClick = () => {
    console.log(this.calculate());
    this.calculate();
  };

  /*    var formula = "NaOH";
  var precision = 3;
  console.log(chemyMass(formula, precision));  */

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <div>
            <label>Digite a Formula:</label>
            <input
              placeholder="Digite a Formula"
              name="formula"
              value={this.state.formula}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Digite a concentração em M ou N (apenas numeros): </label>
            <input
              placeholder="Digite a Concentração desejada (apenas numeros)"
              name="mols"
              value={this.state.mols}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Digite o volume desejados em litros: </label>
            <input
              placeholder="Digite o Volume desejado"
              name="volume"
              value={this.state.volume}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="button" onClick={this.calculate}>
              Calcule
            </button>
          </div>
          <p>{this.grams}</p>
        </form>
      </div>
    );
  }
}

//10 = m/40*1
