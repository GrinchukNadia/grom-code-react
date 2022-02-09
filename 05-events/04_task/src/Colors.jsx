import React from 'react';
import './colors.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickColor(color) {
    document.body.style.backgroundColor = color; 
  }

  render() {
    return (
      <div className='colors'>
        <button
          className='colors__button'
          style={{ backgroundColor: RED }}
          onClick={() => this.onClickColor(RED)}
        ></button>

        <button
          className='colors__button'
          style={{ backgroundColor: GREEN }}
          onClick={() => this.onClickColor(GREEN)}
        ></button>

        <button
          className='colors__button'
          style={{ backgroundColor: BLUE }}
          onClick={() => this.onClickColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
