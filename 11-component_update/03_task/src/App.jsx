import React, { Component } from 'react';
import './index.scss';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isWisible: false,
  };

  onHide = () => {
    this.setState({
      isWisible: !this.state.isWisible,
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
            <div className='expand__content'>
              {' '}
              <p>
                Hooks are a new addition in React 16.8. They let you use state
                and other React features without writing a class.
              </p>
            </div>
          ) : null}
        </Expand>
      </div>
    );
  }
}

export default App;
