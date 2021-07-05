import React from "react";
import chemyMass from "chemymass";

export default class Calculadora extends React.Component {
  state = {
    formula: "",
    grams: "",
    volume: "",
    mols: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /* calculate() {
    this.setState({ formula: chemyMass(this.formula) });
    return (grams = formula * volume * mols);
  }

  handeClick() {
    calculate();
  } */

  /* var formula = "NaOH";
  var precision = 3;
  console.log(chemyMass(formula, precision)); */

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <input
            placeholder="Digite a Formula"
            name="formula"
            value={this.state.formula}
            onChange={this.handleChange}
          />
          <input
            placeholder="Digite a Concentração desejada (apenas numeros)"
            name="mols"
            value={this.state.mols}
            onChange={this.handleChange}
          />
          <input
            placeholder="Digite o Volume desejado"
            name="volume"
            value={this.state.volume}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleClick}>
            Calcule
          </button>
        </form>
      </div>
    );
  }
}

//10 = m/40*1
