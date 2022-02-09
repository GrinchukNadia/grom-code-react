import React from 'react';
import './colorPicker.scss';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    }
  }

  overHandler(color) {
    this.setState({
      color,
    })
  }

  outHandler() {
    this.setState({
      color: '',
    });
  }

  render() {
    return (
      <div>
        <div className='picker__title'>{this.state.color}</div>
        <div>
          <button 
            className='picker__button picker__button_coral'
            onMouseOver={() => this.overHandler('Coral')}
            onMouseOut={() => this.outHandler()}
          ></button>

          <button 
            className='picker__button picker__button_aqua'
            onMouseOver={() => this.overHandler('Aqua')}
            onMouseOut={() => this.outHandler()}
          ></button>

          <button 
            className='picker__button picker__button_bisque'
            onMouseOver={() => this.overHandler('Bisque')}
            onMouseOut={() => this.outHandler()}
          ></button>

        </div>
      </div>
    );
  }
}

export default ColorPicker;
