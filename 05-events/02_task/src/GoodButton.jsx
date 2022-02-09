import React from 'react';
import './goodButton.scss';

class GoodButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    alert(e.target.textContent)
  }

  render() {
    return (
      <button className='fancy-button' onClick={this.handleClick}>
        Good Button
      </button>
    )
  }
}

export default GoodButton;
