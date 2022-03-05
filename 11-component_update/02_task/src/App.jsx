import React, { Component } from 'react';
import './index.scss';
import Dialog from './Dialog.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onClose = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div class='app'>
        <button class='btn' onClick={() => this.onClose()}>
          Show dialog
        </button>
        <Dialog
          onClose={this.onClose}
          title={'Recommendation'}
          isOpen={this.state.isOpen}
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}

export default App;
