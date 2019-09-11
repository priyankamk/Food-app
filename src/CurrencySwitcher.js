import React from 'react';

const CurrencySwitcher = props => {
  return (
    <button onClick={props.handleChangeCurrency}>
      change it!
    </button>
  )
}

export default CurrencySwitcher;