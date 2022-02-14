import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
      height: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    console.log(innerWidth)
    this.setResize(innerWidth, innerHeight);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  
  setResize = (width, height) => {
    this.setState({
      width,
      height,
    });

    document.title = `${innerWidth} x ${innerHeight}`
  }

  onResize = e => {
    const {innerWidth, innerHeight} = e.target
    this.setResize(innerWidth, innerHeight)
  }

  render() {
    return (
      <div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Dimensions;
