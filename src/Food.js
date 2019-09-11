import React, { Component } from 'react';
import CurrencySwitcher from './CurrencySwitcher';
import Display from './Display';


class Food extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: ["Pancakes", "Churros", "Pasta"],
      currency: '€'
    }
  }

  handleChangeCurrency = e => {
    this.setState({
      currency: this.state.currency === '€' ? '$' : '€'
    })
  }

  render() {
    return (
      <div>{this.state.foods.map((food) => {
        return <li>{food}</li>
      })}
        <Display currency={this.state.currency} />
        <CurrencySwitcher
          currency={this.state.currency}
          handleChangeCurrency={this.handleChangeCurrency}
        />

      </div>
    )
  }
}

export default Food;