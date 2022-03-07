import React, { Component } from 'react';
import './index.scss';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isWisible: '',
  };

  onHide = () => {
    this.setState({
      isWisible: this.state.isWisible ? false : true,
    });
  };

  render() {
    return (
      <div className='app'>
        <Expand
          onHide={this.onHide}
          isWisible={this.state.isWisible}
          title={'Some title'}
        >
          {this.state.isWisible ? (
            <p>
              Hooks are a new addition in React 16.8. They let you use state and
              other React features without writing a class.
            </p>
          ) : null}
        </Expand>
      </div>
    );
  }
}

export default App;
