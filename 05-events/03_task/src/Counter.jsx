import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.decrease = this.decrease.bind(this)
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className='counter'>
        <button 
          data-action='decrease' 
          className='counter__button'
          onClick={this.decrease}
        >
          -
        </button>
        <span 
          className='counter__value'
          onClick={this.reset}
        >
          {this.state.count}
        </span>
        <button 
          data-action='increase' 
          className='counter__button'
          onClick={() => this.increase()}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
