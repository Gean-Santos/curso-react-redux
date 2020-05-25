import "./Contador.css";
import React, { Component } from 'react';

import Display from './Display';
import PassoForm from './PassoFrom';
import Botao from './Botao';

class Contador extends Component {
  initialstate = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  }
  state = {...this.initialstate};
  

  inc = _ =>  this.setState({numero: this.state.numero + this.state.passo});
  dec = _ => this.setState({numero: this.state.numero - this.state.passo});
  setPasso = novoPasso => this.setState({passo: novoPasso});

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm 
          setPasso={this.setPasso}
          passo={this.state.passo}
        />
        <Botao setFunc={this.inc}>+</Botao>
        <Botao setFunc={this.dec}>-</Botao>
      </div>
    );
  }
}

export default Contador;