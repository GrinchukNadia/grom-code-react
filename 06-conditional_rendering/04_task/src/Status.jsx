import React, { Component } from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './status.scss';

class Status extends Component {
  state = {
    isOnline: false,
  };

  render() {
    return (
      <div className='status'>
        {this.state.isOnline 
          ? <Online />
          : <Offline/>
        }
      </div>
    );
  }
}

export default Status;
