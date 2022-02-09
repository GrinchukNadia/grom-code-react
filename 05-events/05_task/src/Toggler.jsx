import React from 'react';
import './toggler.scss';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: 'Off'
    }
  }

  clickHandler() {
    const updated = this.state.condition === 'Off'
      ? 'On'
      : 'Off'

    this.setState({
      condition: updated
    })
  }

  render() {
    return (
      <button 
        className='toggler'
        onClick={() => this.clickHandler()}
      >
        {this.state.condition}
      </button>
    );
  }
}

export default Toggler;
