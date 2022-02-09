import React from 'react';
import './colors.scss';

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color
    }
  }

  onClickColor() {
    document.body.style.backgroundColor = this.state.color; 
  }

  render() {
    return (
      <button 
        className='colors__button'
        style={{backgroundColor: this.state.color}}
        onClick={() => this.onClickColor()}
      ></button>
    )
  }
}

export default Colors;
