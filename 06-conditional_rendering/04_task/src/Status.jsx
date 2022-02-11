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
  }

  render() {
    if (this.state.isOnline) {
      return <Online />;
    }
    return <Offline />;
  }
}

export default Status;
