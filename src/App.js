import React, { Component } from 'react';
import './styles.css'

import Screen from './components/Screen'
import Keypad from './components/Keypad'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      equation: '0',
      result: '',
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  handleComputation() {
    const { equation, result } = this.state
    // compute only if last figure is a number
    if(!/[+\-*/]/.test(equation[equation.length -1])) {
      this.setState({
        equation:  Math.round(eval(`${result}${equation}`) * 10000) / 10000,
        result: ''
      })
    }
  }

  handleOperator(operator) {
    const { equation, result } = this.state;
    // if equation already displays an operator, consider the position of the operator itself
    if(/[+\-*/]/.test(equation)) {
      // check if operator is last figure and append value
      if(/[+\-*/]/.test(equation[equation.length -1])) {
        // check if the value is the minus sign
        if(operator !== '-') {
          this.setState({
            equation: operator,
          })
        } else if(!/-/.test(equation)) {
          this.setState({
            equation: `${equation}${operator}`
          })
        }
      } else {
        // compute total and include operator in display
        this.setState({
          equation: operator,
          result: Math.round(eval(`${result}${equation}`) * 10000) / 10000,
        })
      }
    } else {
      // if no operator, add operator to display and existing expression to the total
      this.setState({
        equation: operator,
        result: equation,
      })
    }
  }

  handleDigit(digit) {
    const { equation } = this.state;
    // ! add digit if current display is different from '0'
    this.setState({
      equation: equation !== '0' ? `${equation}${digit}` : digit,
    })
  }

  handleDecimal() {
    const { equation } = this.state;
    // check if there's already a point and add if no point
    if(!/\./.test(equation)) {
      this.setState({
        equation: `${equation}.`
      })
    }
  }

  clear() {
    this.setState({
        equation: '0',
        result: ''
      })
    }

  onButtonPress(e) {
    // consider the text of the pressed button
    const { textContent: innerHTML } = e.target

    switch(innerHTML) {
      case 'AC':
        this.clear();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handleDigit(innerHTML);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.handleOperator(innerHTML);
        break;
      case '=':
        this.handleComputation();
        break;
      case '.':
        this.handleDecimal();
        break;
      default:
        console.error('This should not happen.');
    }
  }

  render() {
    const { equation, result } = this.state;
    return (
        <div className="App">
            <main className="calculator" >
                <Screen equation={equation} result={result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </main>
        </div>
    );
  }
}

export default App;