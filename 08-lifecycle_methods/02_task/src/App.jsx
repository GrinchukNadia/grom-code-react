import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className='hide_clock'>
        <button onClick={() => this.toggleVisible()}>Hide</button>
        {this.state.visible && (
          <div className='clock_block'>
            <Clock location={'New York'} offset={0} />
            <Clock location={'Kyiv'} offset={2} />
            <Clock location={'London'} offset={-5} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
