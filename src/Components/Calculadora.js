import React from "react";
import molFormula from "molecular-formula";

export default class Calculadora extends React.Component {
  state = {
    formula: "",
    grams: 0,
    volume: "",
    mols: "",
  };

  calculate = () => {
    this.setState({ formula: this.state.formula });
    let x = new molFormula(this.state.formula);
    let mass = x.getMass();
    return (this.grams = mass * this.state.volume * this.state.mols);
    
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handeClick = () => {
    this.calculate();
  };

  render() {
    return (
      <div className="all">
        <form className="calcForm">
          <div className="p-5 form-group row">
            <label>Digite a Formula:</label>
            <input
              placeholder="Digite a Formula"
              name="formula"
              value={this.state.formula}
              onChange={this.handleChange}
            />
          </div>
          <div className="p-5 form-group row">
            <label>Digite a concentração em M ou N (apenas numeros): </label>
            <input
              placeholder="Digite a concentração desejada"
              name="mols"
              value={this.state.mols}
              onChange={this.handleChange}
            />
          </div>
          <div className="p-5 form-group row">
            <label>Digite o volume desejados em litros: </label>
            <input
              placeholder="Digite o volume desejado"
              name="volume"
              value={this.state.volume}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary m-5"
              onClick={this.calculate}
            >
              Calcule
            </button>
          </div>
        </form>
        <p>
          Você deve utilizar: <span>{this.grams} </span>
          ml ou gramas
        </p>
      </div>
    );
  }
}

//10 = m/40*1
