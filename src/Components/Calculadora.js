import React from "react";
import chemyMass from "chemymass";

export default class Calculadora extends React.Component {
  state = {
    formula: "",
    grams: "",
    volume: "",
    mols: "",
  };

  calculate(formula, grams, volume, mols) {
    this.setState({ formula: chemyMass(this.state.formula) });
    let result = (this.grams = this.formula * this.volume * this.mols);
    console.log(result);
    return result;
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handeClick() {
    console.log(this.calculate());
    this.calculate();
  }

  /* var formula = "NaOH";
  var precision = 3;
  console.log(chemyMass(formula, precision)); */

  render() {
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
