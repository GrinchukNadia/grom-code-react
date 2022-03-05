import React, { Component } from 'react';
import './index.scss';
import Dialog from './Dialog.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className='app'>
        <button className='btn' onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog
          onClose={this.hideDialog}
          title={'Recommendation'}
          isOpen={this.state.isOpen}
        >
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
