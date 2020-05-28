import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class Calculator extends Component {

  state = { ...initialState };

  clearMemory() {
    this.setState({...initialState});
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const clearDisplay = (this.state.displayValue === '0' && n !== '.' ) || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });
  }

  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = n => this.setOperation(n);
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" triple click={() => this.clearMemory()} />
        <Button label="/" operation click={setOperation} />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" operation click={setOperation}/>
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" operation click={setOperation} />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" operation click={setOperation} />
        <Button label="0" double click={addDigit} />
        <Button label="." click={addDigit} />
        <Button label="=" operation click={setOperation} />
      </div>
    );
  }
}