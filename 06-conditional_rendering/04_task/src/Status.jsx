import React, { Component } from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './status.scss';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: props.isOnline,
    };

    this.onConnect = this.onConnect.bind(this);
  }

  render() {
    return (
      this.state.isOnline 
        ? <Online />
        : <Offline />
    )
  }
}

export default Status;
